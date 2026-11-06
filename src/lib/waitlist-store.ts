import { mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { DatabaseSync } from "node:sqlite";
import type { WaitlistEntry } from "./waitlist-schema";

export interface WaitlistStore {
  save(entry: WaitlistEntry): Promise<"created" | "already_registered">;
}

export function waitlistDatabasePath() {
  const configuredPath = process.env.WAITLIST_DB_PATH;
  if (configuredPath === ":memory:") {
    throw new Error("WAITLIST_PERSISTENT_DATABASE_REQUIRED");
  }
  return configuredPath
    ? resolve(configuredPath)
    : join(process.cwd(), "data", "waitlist.sqlite");
}

function assertLocalDiskIsDurable() {
  if (
    process.env.CF_PAGES ||
    process.env.CLOUDFLARE_WORKERS ||
    process.env.VERCEL ||
    process.env.AWS_LAMBDA_FUNCTION_NAME ||
    process.env.NETLIFY ||
    process.env.FUNCTIONS_WORKER_RUNTIME
  ) {
    throw new Error("WAITLIST_SQLITE_UNSUPPORTED_RUNTIME");
  }
}

export class SQLiteWaitlistStore implements WaitlistStore {
  constructor(private readonly databasePath = waitlistDatabasePath()) {}

  async save(entry: WaitlistEntry): Promise<"created" | "already_registered"> {
    assertLocalDiskIsDurable();
    const databasePath = resolve(this.databasePath);
    mkdirSync(dirname(databasePath), { recursive: true });

    const database = new DatabaseSync(databasePath);
    let inTransaction = false;
    try {
      database.exec("PRAGMA busy_timeout = 5000;");
      database.exec(`
        CREATE TABLE IF NOT EXISTS waitlist_registrations (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          full_name TEXT NOT NULL,
          email TEXT NOT NULL UNIQUE COLLATE NOCASE,
          created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
        );
      `);

      database.exec("BEGIN IMMEDIATE;");
      inTransaction = true;
      const inserted = database
        .prepare(
          `INSERT INTO waitlist_registrations (full_name, email)
           VALUES (?, ?)
           ON CONFLICT(email) DO NOTHING;`,
        )
        .run(entry.fullName.trim(), entry.email.trim().toLowerCase());
      const record = database
        .prepare(
          `SELECT id, full_name, email, created_at
           FROM waitlist_registrations
           WHERE email = ?;`,
        )
        .get(entry.email.trim().toLowerCase());

      if (!record) throw new Error("WAITLIST_REGISTRATION_NOT_CONFIRMED");
      database.exec("COMMIT;");
      inTransaction = false;
      return Number(inserted.changes) > 0 ? "created" : "already_registered";
    } catch (error) {
      if (inTransaction) {
        try {
          database.exec("ROLLBACK;");
        } catch {
          // Preserve the original SQL failure.
        }
      }
      throw error;
    } finally {
      database.close();
    }
  }
}

export function waitlistStore(): WaitlistStore {
  return new SQLiteWaitlistStore();
}
