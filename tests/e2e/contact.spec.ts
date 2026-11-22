import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("contact page exposes the current approved copy and fields and passes axe", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/contact");
  await expect(page.getByRole("heading", { name: "Let's Build the Future of Global Entertainment." })).toBeVisible();
  await expect(page.getByText("UK-focused. Globally ambitious. Open to meaningful partnerships worldwide.")).toBeVisible();
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

test("contact validates required fields and presents the actual email-app handoff", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: "Submit Enquiry" }).click();
  await expect(page.getByText("Enter your full name.")).toBeVisible();

  await page.getByLabel("Full Name").fill("Avery Example");
  await page.getByLabel("Email Address").fill("avery@example.com");
  await page.getByLabel("Your Message").fill("I would like to discuss a collaboration.");
  await page.getByRole("button", { name: "Submit Enquiry" }).click();
  await expect(page.getByRole("status")).toContainText(
    "Your email app should open with your enquiry addressed to austinechibueze905@gmail.com. Please press Send in your email app to complete it.",
  );
  await expect(page.getByText("Thank you. Your enquiry has been sent.")).toHaveCount(0);
});

test("contact form offers the six current enquiry categories", async ({ page }) => {
  await page.goto("/contact");
  const options = await page.locator("#contact-category option").allTextContents();
  expect(options).toEqual([
    "General Enquiry",
    "Investment & Strategic Partnerships",
    "Technology & Cofounder Opportunities",
    "Business & Entertainment Partnerships",
    "Media & Corporate Communications",
    "Creator & Community Relations",
  ]);
});
