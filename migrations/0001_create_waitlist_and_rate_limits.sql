CREATE TABLE IF NOT EXISTS waitlist_registrations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL COLLATE NOCASE UNIQUE,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);

CREATE TABLE IF NOT EXISTS request_rate_limits (
  scope TEXT NOT NULL,
  address_hash TEXT NOT NULL,
  window_start INTEGER NOT NULL,
  attempts INTEGER NOT NULL CHECK (attempts > 0),
  expires_at INTEGER NOT NULL,
  PRIMARY KEY (scope, address_hash, window_start)
);

CREATE INDEX IF NOT EXISTS request_rate_limits_expiration
  ON request_rate_limits (expires_at);
