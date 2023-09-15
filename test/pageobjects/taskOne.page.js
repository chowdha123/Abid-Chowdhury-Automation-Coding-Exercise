import { $ } from '@wdio/globals'
import Pages from '../reusableutiities/page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TaskOne extends Pages {
    /**
     * define selectors using getter methods
     */

    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get loginButton () {
        return $('button[type="submit"]');
    }

    get alertMessage(){
        return $('#flash');
    }

    get logoutButton(){
        return $(`a[href="/logout"`)
    }

   
    async login (username, password) {
        await this.waitAndSetValue(this.inputUsername, username);
        await this.waitAndSetValue(this.inputPassword, password);
        await this.waitAndClick(this.loginButton);
    }

}

export default new TaskOne();
