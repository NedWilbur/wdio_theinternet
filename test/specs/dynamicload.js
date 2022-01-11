import DynamicLoadView from '../views/dynamicload.view';

describe('Dynamically Loaded Page Elements - 1', () => {
    beforeEach(() => {
        DynamicLoadView.navTo1();
    });

    it('header', () => {
        expect(DynamicLoadView.Header).toHaveText(DynamicLoadView.Title);
    });

    it('Element visible after load', () => {
        expect(DynamicLoadView.FinishText).not.toBeDisplayed();
        DynamicLoadView.StartButton.click();
        expect(DynamicLoadView.FinishText).toBeDisplayed();
    });
});

describe('Dynamically Loaded Page Elements - 2', () => {
    beforeEach(() => {
        DynamicLoadView.navTo2();
    });

    it('header', () => {
        expect(DynamicLoadView.Header).toHaveText(DynamicLoadView.Title);
    });

    it('Element visible after load', () => {
        expect(DynamicLoadView.FinishText).not.toExist();
        DynamicLoadView.StartButton.click();
        expect(DynamicLoadView.FinishText).toBeDisplayed();
    });
});