import DropdownView from '../views/dropdown.view';

describe('Dropdown List', () => {
    beforeEach(async () => {
        await DropdownView.navTo();
    });

    it('header', async () => {
        await expect(DropdownView.header).toHaveText(DropdownView.title);
    });

    it('toggle through options', async () => {
        await DropdownView.Dropdown.selectByVisibleText('Option 1');
        await expect(DropdownView.Option1).toBeSelected();
        await DropdownView.Dropdown.selectByVisibleText('Option 2');
        await expect(DropdownView.Option2).toBeSelected();
    });
});