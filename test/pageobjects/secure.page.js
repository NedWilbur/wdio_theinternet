import Page from './_base.page';

class SecurePage extends Page {
    // Elements
    get flashAlert() { return $('#flash'); }

    // Methods
    navTo() { return super.navTo('secure'); }
}

export default new SecurePage();
