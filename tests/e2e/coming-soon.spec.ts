import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("home shows approved copy and all original images", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Sparrow Love Edit.*Where Creativity Takes Flight/ })).toBeVisible();
  await expect(page.getByText("A new world of creativity, storytelling, entertainment and digital innovation is coming.")).toBeVisible();
  await expect(page.getByText("Big ideas. Bold imaginations. Endless possibilities. Welcome to the creative world of Sparrow Love Edit.")).toBeVisible();
  await expect(page.getByText("Your Vision. Your Story. Your Studio.")).toBeVisible();
  await expect(page.getByText("From Imagination to the Big Screen.")).toBeVisible();
  await expect(page.getByText("Big Dreams. Magical Stories.")).toBeVisible();
  await expect(page.getByText("Create Together. Connect Everywhere. A creative community where talent, entertainment and opportunity meet.", { exact: false })).toBeVisible();
  const body = await page.locator("body").innerText();
  for (const text of [
    "Promotional artwork only.",
    "promotional illustration",
    "not a verified customer photograph",
    "Illustrative company storytelling",
    "Concept illustration",
    "1000611243.png",
    "Sparrow Love Edit Movie Night.png",
  ]) {
    expect(body).not.toContain(text);
  }
  const images = await page.locator(".crew img").all();
  expect(images).toHaveLength(6);
  for (const image of images) {
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true);
  }
});

test("waitlist rejects an invalid email without submitting", async ({ page }) => {
  await page.goto("/");
  await page.getByLabel("Full Name").fill("Avery Example");
  await page.getByLabel("Email Address").fill("invalid-email");
  await page.getByRole("button", { name: "Join Waitlist" }).click();
  await expect(page.getByText("Enter a valid email address.")).toBeVisible();
});

test("navigation and home axe scan", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.getByRole("navigation", { name: "Main navigation" })).toBeVisible();
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
  expect(results.violations).toEqual([]);
});

test("What Is Sparrow story presents all five scenes in order", async ({ page }) => {
  await page.goto("/");
  const story = page.locator("#what-is-sparrow");
  const expected = [
    "WHAT IS SPARROW?",
    "CREATE WITHOUT LIMITS.",
    "STORIES THAT MOVE THE WORLD.",
    "ONE CONNECTED CREATIVE WORLD.",
    "WHERE CREATIVITY TAKES FLIGHT.",
  ];
  const headings = story.locator(".what-is-sparrow-scene h2");
  await expect(headings).toHaveCount(5);
  const actual = (await headings.allTextContents()).map((text) => text.replace(/\s+/g, " ").trim());
  expect(actual).toEqual(expected);
  await expect(story.getByText("A new vision for digital creativity and entertainment.")).toBeAttached();
  await expect(story.getByText("Sparrow Love Edit — building toward a new generation of creative experiences.")).toBeAttached();
});

test("story copy remains readable with reduced motion enabled", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const story = page.locator("#what-is-sparrow");
  await expect(story.locator(".what-is-sparrow-scene")).toHaveCount(5);
  const word = story.locator(".story-word").first();
  await expect(word).toBeVisible();
  await expect.poll(() => word.evaluate((element) => getComputedStyle(element).opacity)).toBe("1");
  expect(await word.evaluate((element) => getComputedStyle(element).animationName)).toBe("none");
});
