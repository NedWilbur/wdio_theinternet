import BaseView from './_base.view';

class LoginView extends BaseView {
    constructor() { super("Login Page") }

    // Locators
    get inputUsername() { return $('#username'); }
    get inputPassword() { return $('#password');}
    get btnSubmit() { return $('button[type="submit"]'); }

    // Methods
    navTo() { return super.navTo('login'); }

    login (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click();
    }
}

export default new LoginView();