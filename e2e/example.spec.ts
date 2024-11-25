import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  await page.goto('https://www.google.com/?hl=en');
  
  const button = await page.getByRole('button', { name: 'Google Search' });
  await button.click();
  
  await expect(button).toBeEnabled();
});
