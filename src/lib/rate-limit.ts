const attempts = new Map<string, { count: number; resetAt: number }>();

export async function checkRateLimit(scope: string, address: string, maximum: number, windowSeconds: number): Promise<boolean> {
  const now = Date.now();
  for (const [key, value] of attempts) if (value.resetAt <= now) attempts.delete(key);
  const key = `${scope}:${address}`;
  const current = attempts.get(key);
  if (!current || current.resetAt <= now) {
    attempts.set(key, { count: 1, resetAt: now + windowSeconds * 1000 });
    return false;
  }
  current.count += 1;
  return current.count > maximum;
}
