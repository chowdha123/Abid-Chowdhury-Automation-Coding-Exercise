import Pages from '../reusableutiities/page.js'

class TaskThree extends Pages {
  get userProfiles () {
    return $$('.figure img')
  }

  get userProfileNames () {
    return $$('.figcaption h5')
  }

  get userProfileLinks () {
    return $$('.figcaption a')
  }

  get title () {
    return $('h1=Not Found')
  }

  async navigateToUserProfiles () {
    let j = 1
    for (let i = 0; i < await this.userProfiles.length; i++) {
      const element = this.userProfiles[i]
      await element.moveTo()
      // await this.userProfileNames[i].waitForDisplayed();
      await expect(await this.userProfileNames[i]).toHaveTextContaining(`user${j}`)
      await this.waitAndClick(this.userProfileLinks[i])
      await expect(browser).toHaveUrlContaining(`/users/${j}`)
      await expect(this.title).toHaveTextContaining('Not Found')
      j++
    }
  }
}

export default new TaskThree()
