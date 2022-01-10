import BaseView from './_base.view';

class Checkboxes extends BaseView {
    constructor() { super("Checkboxes") }

    // Locators
    get checkbox1() { return $('//form[@id="checkboxes"]/input[1]'); }
    get checkbox2() { return $('//form[@id="checkboxes"]/input[2]'); }

    // Methods
    navTo() { return super.navTo('checkboxes'); }
    clickCheckBox1() { this.checkbox1.click(); }
    clickCheckBox2() { this.checkbox2.click(); }
}

export default new Checkboxes();