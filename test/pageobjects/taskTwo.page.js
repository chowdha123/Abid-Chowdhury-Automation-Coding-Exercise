import { expect } from 'chai';
import Page from '../reusableutiities/page.js';

class TaskTwo extends Page{

    get tabel1(){
        return $('table[id=table1]');
    }

    get headers() {
        return $$('#table1 .header span');
    }
    get firstRow() {
        return $$('#table1 tbody tr:nth-child(1) td');
    }
    get lastRow() {
        return $$('#table1 tbody tr:nth-child(4) td');
    }
    get headerClick() {
        return $$('#table1 .header ');
    }
   
    tableHeaders= ['Last Name', 'First Name', 'Email', 'Due', 'Web Site', 'Action']; //This data can be dynamic intead of harcoding the values

    async checkTableHeaders() {
        let headersArray = [];
        for (let i = 0; i < await this.headers.length; i++) {
            let header = await this.headers[i];
            let text = await header.getText();
            headersArray.push(text);
        }
        await browser.waitUntil(
            async () => {
               return headersArray.length === this.tableHeaders.length &&
               headersArray.every((element, index) => element === this.tableHeaders[index]);
            }, {
                timeout: 2000,
                timeoutMsg: 'Table headers are not correct'
            }
        )
    }

    //We can sort the entire table using below method with little adjustments like replacing 0 with i in a for loop
    async verifyColumnSorts(){
            let header = await this.headerClick[0];
            let firstRowElementBeforeClick = await this.firstRow[0].getText();  
            await this.waitAndClick(header);  
            await browser.waitUntil(
                async () => { 
                    let firstRowElementAfterClick = await this.firstRow[0].getText();
                    console.log(firstRowElementAfterClick)   
                    return firstRowElementAfterClick != firstRowElementBeforeClick;
                },
                {
                    timeoutMsg: `Columns didn't sort`,
                },
            );
        }
        

    }

export default new TaskTwo()