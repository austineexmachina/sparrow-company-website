import { describe, expect, it } from "vitest";
import { waitlistSchema } from "../../src/lib/waitlist-schema";

describe("waitlist contract", () => {
  it("accepts and normalizes only full name and email", () => {
    const result = waitlistSchema.safeParse({
      fullName: " Avery Example ",
      email: " AVERY@Example.COM ",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data).toEqual({ fullName: "Avery Example", email: "avery@example.com" });
    }
  });

  it("rejects invalid email and the removed interest category field", () => {
    expect(waitlistSchema.safeParse({ fullName: "Avery Example", email: "bad" }).success).toBe(false);
    expect(
      waitlistSchema.safeParse({
        fullName: "Avery Example",
        email: "avery@example.com",
        audience: "creator",
      }).success,
    ).toBe(false);
  });
});
