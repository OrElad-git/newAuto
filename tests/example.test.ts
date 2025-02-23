import { test, expect } from '@playwright/test';

test('reach_from_login_to_chat_module', async ({ page }) => {
  await page.goto('https://automationqa.commbox.io/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('automationcommb@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Commboxtest123!');
  await page.locator('#trLoginButtons div').filter({ hasText: 'Login' }).click();
  await page.getByTitle('Settings').locator('a').click();
  await page.goto('https://automationqa.commbox.io/modules#/');
  await page.locator('#divModule_9 span').first().click();
});