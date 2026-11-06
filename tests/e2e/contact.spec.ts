import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("contact form exposes approved fields and passes axe", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/contact");
  await expect(page.getByRole("heading", { name: "Let's Build the Future of Creativity Together." })).toBeVisible();
  await expect(page.locator("#contact-category option")).toHaveCount(6);
  for (const label of [
    "Full Name",
    "Email Address",
    "Company / Organization (Optional)",
    "Enquiry Category",
    "Your Message",
  ]) {
    await expect(page.getByLabel(label)).toBeVisible();
  }

  const result = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(result.violations).toEqual([]);
});

test("contact validates inputs and reports unavailable delivery without success", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: "Submit Enquiry" }).click();
  await expect(page.getByText("Enter your full name.")).toBeVisible();

  await page.getByLabel("Full Name").fill("Avery Example");
  await page.getByLabel("Email Address").fill("avery@example.com");
  await page.getByLabel("Your Message").fill("I would like to discuss a collaboration.");
  await page.getByRole("button", { name: "Submit Enquiry" }).click();
  await expect(page.getByRole("status")).toContainText(/unable to send your enquiry/i);
  await expect(page.getByText("Thank you. Your enquiry has been sent.")).toHaveCount(0);
});

test("contact success is shown only after the API accepts delivery", async ({ page }) => {
  await page.route("**/api/contact", async (route) => {
    await route.fulfill({
      status: 202,
      contentType: "application/json",
      body: JSON.stringify({ accepted: true }),
    });
  });
  await page.goto("/contact");
  await page.getByLabel("Full Name").fill("Avery Example");
  await page.getByLabel("Email Address").fill("avery@example.com");
  await page.getByLabel("Your Message").fill("I would like to discuss a collaboration.");
  await page.getByRole("button", { name: "Submit Enquiry" }).click();
  await expect(page.getByRole("status")).toHaveText("Thank you. Your enquiry has been sent.");
});
