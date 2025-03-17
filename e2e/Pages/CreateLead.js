exports.CreateLead = class CreateLead {
    constructor(page) {
        this.page = page;
        this.createbutton = page.locator("//a[@id='ext-gen589']");
        this.companyname = page.locator("//input[@id='createLeadForm_companyName']");
        this.firstname = page.locator("//td[@id='ext-gen600']");
        this.lastname = page.locator("//input[@id='createLeadForm_lastName']");
        this.submitbutton = page.locator("//input[@id='ext-gen604']");

    }
    async createButton() {
        await this.createbutton.click();

    }        
    async companyName(cname) {
        await this.companyname.fill(cname);

    }
    async firstName(fname) {
        await this.firstname.fill(fname);
    }
    async lastName(lname) {
        await this.lastname.fill(lname);
    }
    async submitLead() {
        await this.submitbutton.click();
    }
}