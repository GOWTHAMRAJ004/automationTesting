
class Login {
    constructor(page) {
        this.page = page;
    }

    async goToUrl(url) {
        await this.page.goto(url);
        await this.page.waitForTimeout(2000);
    }

    async loginToTheWebPage(userName, password) {
        await this.page.locator("//input[@placeholder='Username']").fill(userName);
        await this.page.waitForTimeout(2000);
        await this.page.locator("//input[@placeholder='Password']").fill(password);
        await this.page.waitForTimeout(2000);
        await this.page.locator("//button[@type='submit']").click();
    }

    async menuTraversal() {
        const homeMenus = await this.page.locator("//ul/li/a/span").all(); 
        console.log(homeMenus.length);

        for (const menu of homeMenus) {
            const text = await menu.textContent();
            if (text && text.trim() !== "Dashboard") {
                await this.page.locator(`//span[text()='${text.trim()}']`).click();
                await this.page.screenshot({ path: `./screenShort/${text.trim()}.png`, fullPage: true });

                await this.page.waitForTimeout(2000);
            }
        }
    }
}

export default Login;
