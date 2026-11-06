import { env } from "cloudflare:workers";

const encoder = new TextEncoder();

async function addressDigest(address: string) {
  const bytes = await crypto.subtle.digest("SHA-256", encoder.encode(address));
  return Array.from(new Uint8Array(bytes), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

export async function checkRateLimit(scope: string, address: string, maximum: number, windowSeconds: number): Promise<boolean> {
  const database = env.DB;
  if (!database) throw new Error("RATE_LIMIT_DATABASE_UNAVAILABLE");
  const now = Math.floor(Date.now() / 1000);
  const windowStart = Math.floor(now / windowSeconds) * windowSeconds;
  const addressHash = await addressDigest(address);
  const result = await database.prepare(`
    INSERT INTO request_rate_limits (scope, address_hash, window_start, attempts, expires_at)
    VALUES (?, ?, ?, 1, ?)
    ON CONFLICT(scope, address_hash, window_start)
    DO UPDATE SET attempts = request_rate_limits.attempts + 1
    RETURNING attempts
  `).bind(scope, addressHash, windowStart, now + 24 * 60 * 60).first<{ attempts: number }>();
  if (!result) throw new Error("RATE_LIMIT_WRITE_UNCONFIRMED");
  if (result.attempts === 1) {
    try { await database.prepare("DELETE FROM request_rate_limits WHERE expires_at <= ?").bind(now).run(); } catch { /* Expired counters do not block a valid request. */ }
  }
  return result.attempts > maximum;
}
