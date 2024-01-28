import Interaction from "./Interaction.js";

class TimestampInteraction extends Interaction{
    
        timestamp = "";
    
        constructor(prompt, response, timestamp){
        super(prompt,response);
        this.timestamp = timestamp;
        }
    
        show() {
            console.log();
            console.log(`Prompt=> ${this.prompt}... had response=> ${this.response}... had timestamp=> ${this.timestamp}`);
        }
    
        showInteractionType(){
            console.log("This interaction is Timestamp Interaction");
            console.log();
        }
    }

export default TimestampInteraction