import LoginView from '../views/login.view';
import SecureView from '../views/secure.view';

describe('Login Page', () => {
    beforeEach(async () => {
        await LoginView.navTo();
    });

    it('header', async () => {
        await expect(LoginView.header).toHaveText(LoginView.title);
    });

    it('warning displayed with invalid credentials'), async () => {
        await LoginView.login('tomsmith', 'WrongPassword!');
        await expect(SecureView.flashAlert).toBeExisting();
        await expect(SecureView.flashAlert).toHaveTextContaining('Your username is invalid!');
    }

    it('should login with valid credentials', async () => {
        await LoginView.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecureView.flashAlert).toBeExisting();
        await expect(SecureView.flashAlert).toHaveTextContaining('You logged into a secure area!');
    });
});