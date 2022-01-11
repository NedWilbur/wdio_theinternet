import dynamicloadView from '../views/dynamicload.view';
import DynamicLoadView from '../views/dynamicload.view';

describe('Dynamically Loaded Page Elements - 1', () => {
    beforeEach(async () => {
        await DynamicLoadView.navTo1();
    });

    it('header', async () => {
        await expect(DynamicLoadView.Header).toHaveText(DynamicLoadView.Title);
    });

    it('Element visible after load', async () => {
        await expect(DynamicLoadView.FinishText).not.toBeDisplayed();
        await DynamicLoadView.StartButton.click();
        await expect(DynamicLoadView.FinishText).toBeDisplayed();
    });
});