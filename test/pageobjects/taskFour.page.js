import Page from "../reusableutiities/page.js";

class TaskFour extends Page {
    
    get checkBox(){
        return $$('#checkboxes input');
    }
    
    randomNumber = Math.floor(Math.random() * 10); //When number is greateer than 10 else block will execute

    async selectCheckBox(){
            await this.checkBox.forEach(async (element) => {
            if(this.randomNumber <= 10){
                for (let i = 0; i < this.randomNumber; i++) {
                await this.waitAndClick(element);    
                // console.log(`${i}:` + this.randomNumber);  //uncomment this line to verify that the checkbox is being clicked equal to randomNumber          
                }
            } else{
                await this.waitAndClick(element);
            }
        });
    }
}

export default new TaskFour();
