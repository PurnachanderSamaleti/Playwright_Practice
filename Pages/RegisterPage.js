export class Registration {
    constructor(page){
        this.page = page;
        this.AgentLogin = page.locator('//a[@title="Agent Login"]');
        this.JoinReal = page.getByText('Join Real');
        this.firstnameInput = page.getByTestId('text-input-First Name');
        this.lastnameInput = page.getByTestId('text-input-Last Name');
        this.usernameInput = page.getByTestId('text-input-Username');
        this.emailInput = page.getByTestId('email-input-Email');
        this.passwordInput = page.getByPlaceholder('Choose password');
        this.confirmPasswordInput = page.getByPlaceholder('Confirm password');
        this.checkbox1 = page.getByTestId('consentedToTerms');
        this.checkbox2 = page.getByTestId('consentedToCallMessage')
        this.registerButton = page.locator('//span[text()="Create Account"]');
    }
    async goto(url){
        await this.page.goto(url);
    }

    async registrationpage(FirstName, LastName, UserName, Email, Password, ConfirmPassword){
        await this.AgentLogin.click();
        await this.JoinReal.click();
        await this.firstnameInput.fill(FirstName);
        await this.lastnameInput.fill(LastName);
        await this.usernameInput.fill(UserName);
        await this.emailInput.fill(Email);
        await this.passwordInput.fill(Password);
        await this.confirmPasswordInput.fill(ConfirmPassword);
        await this.checkbox1.check();
        await this.checkbox2.check();
        await this.registerButton.click();

    }
}
   // module.exports = { Registrationform };