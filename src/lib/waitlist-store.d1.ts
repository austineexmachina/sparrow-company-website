import { env } from "cloudflare:workers";
import type { WaitlistEntry } from "./waitlist-schema";

interface WaitlistStore {
  save(entry: WaitlistEntry): Promise<"created" | "already_registered">;
}

export class D1WaitlistStore implements WaitlistStore {
  async save(entry: WaitlistEntry): Promise<"created" | "already_registered"> {
    const database = env.DB;
    if (!database) throw new Error("WAITLIST_D1_BINDING_UNAVAILABLE");
    const email = entry.email.trim().toLowerCase();
    const [inserted, saved] = await database.batch([
      database
        .prepare("INSERT INTO waitlist_registrations (full_name, email) VALUES (?, ?) ON CONFLICT(email) DO NOTHING")
        .bind(entry.fullName.trim(), email),
      database.prepare("SELECT id FROM waitlist_registrations WHERE email = ?").bind(email),
    ]);
    if (!saved.results?.[0]) throw new Error("WAITLIST_REGISTRATION_NOT_CONFIRMED");
    return Number(inserted.meta?.changes ?? 0) > 0 ? "created" : "already_registered";
  }
}

export function waitlistStore(): WaitlistStore {
  return new D1WaitlistStore();
}
