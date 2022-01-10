export default class BaseView {
    constructor(title) {
        this.title = title;
    }

    // Locators
    get header() { return $('h3'); }

    // Methods
    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    navTo(path) { return browser.url(`/${path}`); }
}