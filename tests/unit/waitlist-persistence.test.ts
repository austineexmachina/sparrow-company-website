import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { mkdirSync, mkdtempSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { DatabaseSync } from "node:sqlite";
import { waitlistSchema } from "../../src/lib/waitlist-schema";
import { SQLiteWaitlistStore } from "../../src/lib/waitlist-store";

describe("SQLite waitlist persistence", () => {
  let directory: string;
  let databasePath: string;

  beforeEach(() => {
    directory = mkdtempSync(join(tmpdir(), "sparrow-waitlist-test-"));
    databasePath = join(directory, "waitlist.sqlite");
  });

  afterEach(() => {
    rmSync(directory, { recursive: true, force: true });
  });

  it("saves full name and normalized email and reads the committed row back", async () => {
    const store = new SQLiteWaitlistStore(databasePath);
    await expect(
      store.save({ fullName: " Avery Example ", email: " CREATOR@Example.COM " }),
    ).resolves.toBe("created");

    const database = new DatabaseSync(databasePath);
    try {
      const row = database
        .prepare("SELECT full_name, email, created_at FROM waitlist_registrations")
        .get() as { full_name: string; email: string; created_at: string };
      expect(row.full_name).toBe("Avery Example");
      expect(row.email).toBe("creator@example.com");
      expect(row.created_at).toMatch(/^\d{4}-\d{2}-\d{2}T/);
    } finally {
      database.close();
    }
  });

  it("prevents duplicates without replacing the original registration", async () => {
    const store = new SQLiteWaitlistStore(databasePath);
    await store.save({ fullName: "First Name", email: "same@example.com" });
    await expect(
      store.save({ fullName: "Different Name", email: "SAME@EXAMPLE.COM" }),
    ).resolves.toBe("already_registered");

    const database = new DatabaseSync(databasePath);
    try {
      const rows = database
        .prepare("SELECT full_name, email FROM waitlist_registrations")
        .all() as { full_name: string; email: string }[];
      expect(rows).toEqual([{ full_name: "First Name", email: "same@example.com" }]);
    } finally {
      database.close();
    }
  });

  it("rejects invalid names and email addresses", () => {
    expect(waitlistSchema.safeParse({ fullName: "A", email: "bad" }).success).toBe(false);
    expect(waitlistSchema.safeParse({ fullName: "Avery Example", email: "bad" }).success).toBe(false);
  });

  it("does not report success when SQLite cannot open the database", async () => {
    const directoryPath = join(directory, "is-a-directory.sqlite");
    mkdirSync(directoryPath);
    const store = new SQLiteWaitlistStore(directoryPath);
    await expect(
      store.save({ fullName: "Avery Example", email: "avery@example.com" }),
    ).rejects.toThrow();
  });
});
