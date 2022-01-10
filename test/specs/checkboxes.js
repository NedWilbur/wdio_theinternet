import CheckboxesView from  '../views/checkboxes.view';
import SecureView from '../views/secure.view';

describe('Checkboxes', () => {
    beforeEach(async () => {
        await CheckboxesView.navTo();
    });

    it('header', async () => {
        await expect(CheckboxesView.header).toBeExisting();
    });

    it('Checkbox default values', async () => {
        await expect(CheckboxesView.checkbox1).not.toBeChecked();
        await expect(CheckboxesView.checkbox2).toBeChecked();
    });

    it('Checkbox value changes on click', async () => {
        await CheckboxesView.checkbox1.click();
        await expect(CheckboxesView.checkbox1).toBeChecked();

        await CheckboxesView.checkbox2.click();
        await expect(CheckboxesView.checkbox2).not.toBeChecked();
    });
});