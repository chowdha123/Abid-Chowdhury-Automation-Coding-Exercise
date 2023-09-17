import TaskFive from '../pageobjects/taskFive.page.js'

describe('Task Five: Dropdown', () => {
  it('Verify User can select any dropdown option', async () => {
    await TaskFive.open('/dropdown')
    await TaskFive.selectDropdownOption()
  })
})
