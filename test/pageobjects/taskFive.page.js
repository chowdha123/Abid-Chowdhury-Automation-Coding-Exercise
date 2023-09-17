import Page from '../reusableutiities/page.js'

class TaskFive extends Page {
  get dropDownMenu () {
    return $('select[id=dropdown]')
  }

  get dropDownMenuOptions () {
    return $$('select[id=dropdown] option')
  }

  randomNumber = this.getRandomNumber(1, 3) // between 1 and 2

  async selectDropdownOption () {
    await this.waitAndClick(this.dropDownMenu)
    await this.dropDownMenu.selectByIndex(this.randomNumber)
    await expect(this.dropDownMenuOptions[this.randomNumber]).toHaveAttributeContaining('selected', 'true')
  }
}

export default new TaskFive()
