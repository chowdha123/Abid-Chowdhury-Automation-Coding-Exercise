import TaskTwo from '../pageobjects/taskTwo.page.js'

describe('Table Test Suite', () => {
  it('Verify Table Headers are correct', async () => {
    TaskTwo.open('/tables')
    await expect(TaskTwo.tabel1).toExist()
    await TaskTwo.checkTableHeaders()
  })

  it('Verify table can be sorted by column', async () => {
    await TaskTwo.verifyColumnSorts()
  })
})
