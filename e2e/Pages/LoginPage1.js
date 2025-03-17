exports.LoginPage1 = 
class LoginPage1 {
    constructor(page) {
        this.page = page;
        this.loginLink = page.locator("#login2")
        this.usernameField = page.locator("#loginusername");
        this.passwordField = page.locator("#loginpassword");
        this.submitButton = page.locator("//button[normalize-space()='Log in']");
    }

    async navigateToLoginPage(url) {
        await this.page.goto("https://demoblaze.com/");
    }

    async login(username, password) {
        await this.loginLink.click();
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.submitButton.click();
    }

   
}