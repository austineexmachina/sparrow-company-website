import { expect, test } from "@playwright/test";

const viewports = [
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1440, height: 900 },
];

test("About and Contact navigation works at mobile, tablet, and desktop widths", async ({ page }) => {
  for (const viewport of viewports) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto("/about");
    await expect(page.getByRole("heading", { name: "Building the Future of Digital Creativity and Entertainment" })).toBeVisible();
    await expect(page.getByText("AUSTINGREATLEO", { exact: true })).toBeVisible();
    await expect(page.getByText("Founder — Sparrow Love Edit", { exact: true })).toBeVisible();

    const navigation = page.getByRole("navigation", { name: "Main navigation" });
    if (viewport.width <= 760) {
      const toggle = navigation.locator(".mobile-nav-toggle");
      await toggle.click();
      await expect(toggle).toHaveAttribute("aria-expanded", "true");
      await navigation.getByRole("link", { name: "Contact" }).click();
      await expect(navigation.getByRole("button", { name: "Open navigation menu" })).toHaveAttribute("aria-expanded", "false");
    } else {
      await navigation.getByRole("link", { name: "Contact" }).click();
    }
    await expect(page).toHaveURL(/\/contact$/);
    await expect(page.getByRole("heading", { name: "Let's Build the Future of Creativity Together." })).toBeVisible();
    await expect(page.locator("#contact-category option")).toHaveCount(6);

    const dimensions = await page.evaluate(() => ({
      viewportWidth: document.documentElement.clientWidth,
      contentWidth: document.documentElement.scrollWidth,
    }));
    expect(dimensions.contentWidth, `${viewport.name} layout should not overflow horizontally`).toBeLessThanOrEqual(dimensions.viewportWidth);

    if (viewport.width <= 760) await navigation.getByRole("button", { name: "Open navigation menu" }).click();
    await navigation.getByRole("link", { name: "About" }).click();
    await expect(page).toHaveURL(/\/about$/);
  }
});

test("mobile navigation closes with Escape", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const toggle = page.locator(".mobile-nav-toggle");
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Open navigation menu" })).toHaveAttribute("aria-expanded", "false");
});

