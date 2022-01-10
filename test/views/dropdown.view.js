import BaseView from './_base.view';

class DropdownView extends BaseView {
    constructor() { super("Dropdown List") }

    // Elements
    get Dropdown() { return $('#dropdown'); }
    get Option1() { return $('[value="1"]'); }
    get Option2() { return $('[value="2"]'); }

    // Methods
    navTo() { return super.navTo('dropdown'); }
}

export default new DropdownView();