import BaseView from './_base.view';

class DynamicLoadView extends BaseView {
    constructor() { super("Dynamically Loaded Page Elements") }

    // Elements
    get StartButton() { return $('#start button'); }
    get FinishText() { return $('#finish h4'); }

    // Methods
    navTo1() { return super.navTo('dynamic_loading/1'); }
    navTo2() { return super.navTo('dynamic_loading/2'); }
}

export default new DynamicLoadView();