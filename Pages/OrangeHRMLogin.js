class HRMLogin {
    constructor(page) {
        this.page = page;
        this.username = page.locator('//input[@id="txtUsername"]');
        this.password = page.locator('//input[@id="txtPassword"]');
        this.loginButton = page.locator('//button[@type="submit"]');
    }
    async goto(url){
        await this.page.goto(url);
    }

    async LoginForm(Username, Password){
        await this.username.fill(Username);
        await this.password.fill(Password);
        await this.loginButton.click();
    }
}
module.exports = { HRMLogin };