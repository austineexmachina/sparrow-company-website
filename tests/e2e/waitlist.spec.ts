import { test, expect } from "@playwright/test";

test("waitlist SQL registration saves full name and shows success after persistence", async ({ page }) => {
  await page.goto("/");
  await page.getByLabel("Full Name").fill("Codex SQLite Verification");
  await page.getByLabel("Email Address").fill("codex-sqlite-verification@example.invalid");
  await page.getByRole("button", { name: "Join Waitlist" }).click();
  await expect(page.getByRole("heading", { name: "Thanks for Joining the Sparrow Waitlist!" })).toBeVisible();
  await expect(page.getByText("You're on the list! Thank you for joining Sparrow Love Edit. We're excited to have you with us.")).toBeVisible();
  await expect(page.getByRole("link", { name: "Back to Home" })).toBeVisible();
});

test("duplicate normalized email does not create another SQL registration", async ({ request }) => {
  const response = await request.post("/api/waitlist", {
    data: {
      fullName: "Another Name",
      email: "CODEX-SQLITE-VERIFICATION@EXAMPLE.INVALID",
    },
  });
  expect(response.status()).toBe(200);
  expect(await response.json()).toMatchObject({ accepted: true, alreadyRegistered: true });
});

test("waitlist failure does not show success", async ({ page }) => {
  await page.route("**/api/waitlist", (route) =>
    route.fulfill({
      status: 503,
      contentType: "application/json",
      body: JSON.stringify({ error: "We couldn't save your registration. Please try again later." }),
    }),
  );
  await page.goto("/");
  await page.getByLabel("Full Name").fill("Avery Example");
  await page.getByLabel("Email Address").fill("avery@example.com");
  await page.getByRole("button", { name: "Join Waitlist" }).click();
  await expect(page.getByText("We couldn't save your registration. Please try again later.")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Thanks for Joining the Sparrow Waitlist!" })).toHaveCount(0);
});

test("invalid email is rejected by the waitlist API", async ({ request }) => {
  const response = await request.post("/api/waitlist", {
    data: { fullName: "Avery Example", email: "invalid-email" },
  });
  expect(response.status()).toBe(400);
});
