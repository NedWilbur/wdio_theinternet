import LoginPage from  '../views/login';
import SecurePage from '../views/secure';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.navTo();
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!');
    });

    it.skip('warning shows with invalid credentials'), async () => {

    }
});