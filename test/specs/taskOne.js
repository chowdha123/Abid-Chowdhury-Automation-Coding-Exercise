import TaskOne from '../pageobjects/taskOne.page.js'

describe('Task One: Form Authentication', () => {
  it('Verify user can login with valid credentials', async () => {
    await TaskOne.open('/login')
    // Positive Test
    await TaskOne.login('tomsmith', 'SuperSecretPassword!')
    await expect(TaskOne.alertMessage).toBeExisting()
    await expect(TaskOne.alertMessage).toHaveTextContaining('You logged into a secure area!')
  })

  it('Verify user can logout successfully', async () => {
    await TaskOne.waitAndClick(TaskOne.logoutButton)
    await expect(TaskOne.alertMessage).toHaveTextContaining('You logged out of the secure area!')
  })

  it('Verify invalid login credentials yields error messages', async () => {
    // Negative Tests
    // Blank Fields
    await TaskOne.login('', '')
    await expect(TaskOne.alertMessage).toHaveTextContaining('Your username is invalid!')
    // Invalid Username
    await TaskOne.login('test', 'SuperSecretPassword!')
    await expect(TaskOne.alertMessage).toHaveTextContaining('Your username is invalid!')
    // Invalid Password
    await TaskOne.login('tomsmith', 'test')
    await expect(TaskOne.alertMessage).toHaveTextContaining('Your password is invalid!')
  })
})
