import LoginView from '../views/login.view';
import SecureView from '../views/secure.view';

describe('Login Page', () => {
    beforeEach(() => {
        LoginView.navTo();
    });

    it('header', () => {
        expect(LoginView.Header).toHaveText(LoginView.Title);
    });

    it('warning displayed with invalid credentials'), () => {
        LoginView.login('tomsmith', 'WrongPassword!');
        expect(SecureView.flashAlert).toBeExisting();
        expect(SecureView.flashAlert).toHaveTextContaining('Your username is invalid!');
    }

    it('should login with valid credentials', () => {
        LoginView.login('tomsmith', 'SuperSecretPassword!');
        expect(SecureView.flashAlert).toBeExisting();
        expect(SecureView.flashAlert).toHaveTextContaining('You logged into a secure area!');
    });
});