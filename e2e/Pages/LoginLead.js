exports.LoginLead = 
class LoginLead {
    constructor(page) {
        this.page = page;
        this.usernameField = page.locator("#username");
        this.passwordField = page.locator("#password");
        this.signInput = page.locator("//input[@value='Login']");
        this.image = page.locator("//*[@id='button']/a/img");
    }

    async navigateToLoginPage(url) {
        await this.page.goto("http://leaftaps.com/opentaps/");
    }

    async login(username, password) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.signInput.click();
        await this.image.click();
    }

   
}