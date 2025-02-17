import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  expect(await page.locator('body').innerText()).toContain('POWERED BY YOU');
  await page.locator('button:has-text("Get Started")').click();
  expect(await page.locator('h1').innerText()).toBe('Dashboard Page');
});
