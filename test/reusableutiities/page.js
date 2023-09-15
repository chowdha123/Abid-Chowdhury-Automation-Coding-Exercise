import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    // * Opens a sub page of the page
    // * @param path path of the sub page (e.g. /path/to/page.html)
    // */
    // open (path) {
    //     return browser.url(`https://the-internet.herokuapp.com/${path}`)
    // }
    // Allows each test to open a page based on base url or baseUrl + path.
    async open(path) {
        return browser.url(path);
    }
    
    //Reusable method to first wait for element, then click on it
    async waitAndClick(selector) {
        await selector.waitForClickable();
        await selector.click();
    }
    //First wait for element, then set value using given key
    async waitAndSetValue(selector, value) {
        await selector.waitForClickable();
        await selector.clearValue();
        await selector.setValue(value);
    }  
}
