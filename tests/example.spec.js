
import { test, expect } from '@playwright/test';
import Login from '../Helper/loginTesting.js';

test('has title', async ({ page }) => {
    const login = new Login(page);

    await login.goToUrl("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await login.loginToTheWebPage("Admin", "admin123");
    await page.waitForTimeout(2000)
    await login.menuTraversal();
});
