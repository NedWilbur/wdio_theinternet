import DropdownView from '../views/dropdown.view';

describe('Dropdown List', () => {
    beforeEach(() => {
        DropdownView.navTo();
    });

    it('header', () => {
        expect(DropdownView.Header).toHaveText(DropdownView.Title);
    });

    it('toggle through options', () => {
        DropdownView.Dropdown.selectByVisibleText('Option 1');
        expect(DropdownView.Option1).toBeSelected();
        DropdownView.Dropdown.selectByVisibleText('Option 2');
        expect(DropdownView.Option2).toBeSelected();
    });
});