/**
 * base page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
    constructor(title) {
        this.title = title;
    }

    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    navTo(path) {
        return browser.url(`/${path}`)
    }
}