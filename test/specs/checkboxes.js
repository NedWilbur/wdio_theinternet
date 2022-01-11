import CheckboxesView from '../views/checkboxes.view';

describe('Checkboxes', () => {
    beforeEach(() => {
        CheckboxesView.navTo();
    });

    it('header', () => {
        expect(CheckboxesView.Header).toHaveText(CheckboxesView.Title);
    });

    it('Checkbox default values', () => {
        expect(CheckboxesView.checkbox1).not.toBeChecked();
        expect(CheckboxesView.checkbox2).toBeChecked();
    });

    it('Checkbox value changes on click', () => {
        CheckboxesView.checkbox1.click();
        expect(CheckboxesView.checkbox1).toBeChecked();

        CheckboxesView.checkbox2.click();
        expect(CheckboxesView.checkbox2).not.toBeChecked();
    });
});