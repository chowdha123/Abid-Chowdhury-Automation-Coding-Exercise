import TaskFour from '../pageobjects/taskFour.page.js';

describe('Task Four: Checkboxes', () => {
    it('Verify user can mousehover over profiles and view profile links', async () => {
        await TaskFour.open('/checkboxes');
        await TaskFour.selectCheckBox();
    });
});