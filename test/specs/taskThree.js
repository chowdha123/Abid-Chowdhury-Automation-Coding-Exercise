import TaskThree from '../pageobjects/taskThree.page.js';


describe('Task Three: Hovers', () => {
    it('Verify user can mousehover over profiles and view profile links', async () => {
        await TaskThree.open('/hovers');
        await TaskThree.navigateToUserProfiles();
    });
});