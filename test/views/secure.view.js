import BaseView from './_base.view';

class SecurePage extends BaseView {
    // Elements
    get flashAlert() { return $('#flash'); }

    // Methods
    navTo() { return super.navTo('secure'); }
}

export default new SecurePage();