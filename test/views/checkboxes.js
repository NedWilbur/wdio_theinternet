import Page from './_base';

class Checkboxes extends Page {
    constructor() { super("Checkboxes") }

    // Locators
    get checkbox1() { return $('//form[@id="checkboxes"]/input[1]'); }
    get checkbox2() { return $('//form[@id="checkboxes"]/input[2]'); }

    // Methods
    navTo() { return super.navTo('checkboxes'); }
    async clickCheckBox1() { await this.checkbox1.click(); }
    async clickCheckBox2() { await this.checkbox2.click(); }

    // Validate
    async checkbox1Checked() { return this.checkbox1.getAttribute('checked') }
}

export default new LoginPage();