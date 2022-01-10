import CheckboxesView from  '../views/checkboxes.view';
import SecureView from '../views/secure.view';

describe('Login Page', () => {
    beforeEach(async () => {
        await CheckboxesView.navTo();
    });

    it('header', async () => {
        await expect(CheckboxesView.header).toBeExisting();
    });
});