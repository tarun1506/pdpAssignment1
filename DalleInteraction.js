import Interaction from "./Interaction.js"

class DalleInteraction extends Interaction{

    URL = "";

    constructor(prompt, response, URL){
    super(prompt,response);
    this.URL = URL;
    }

    show() {
        console.log();
        console.log(`Prompt=> ${this.prompt}... had response=> ${this.response}... had URL=> ${this.URL}`);
      }

      showInteractionType(){
        console.log("This interaction is Dalle Interaction");
        console.log();
    }
}
 

export default DalleInteraction 