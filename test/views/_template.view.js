import BaseView from './_base.view';

class TemplatePage extends BaseView {
    constructor() { super("Template Page") }

    // Elements
    get MyElement() { return $('#flash'); }

    // Methods
    navTo() { return super.navTo('secure'); }
}

export default new TemplatePage();