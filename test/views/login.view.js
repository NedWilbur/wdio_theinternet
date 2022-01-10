import BaseView from './_base.view';

class LoginView extends BaseView {
    constructor() { super("Login Page") }

    // Locators
    get header() { return $('h2'); }
    get inputUsername() { return $('#username'); }
    get inputPassword() { return $('#password');}
    get btnSubmit() { return $('button[type="submit"]'); }

    // Methods
    navTo() { return super.navTo('login'); }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

export default new LoginView();