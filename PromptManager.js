import DalleInteraction from "./DalleInteraction.js";
import Interaction from "./Interaction.js";
import TimestampInteraction from "./TimestampInteraction.js";

class PromptManager {
  interactions = [];

  showAllInteractions() {


    for( let interaction of this.interactions) {
      interaction.show();
      interaction.showInteractionType();
    }
  }

  recordPrompt(prompt, response) {

    const firstInteraction = new Interaction(prompt, response);
    
    this.interactions.push(firstInteraction);

  }

  recordDalleInteraction(prompt,response,url) {
    const dalle = new DalleInteraction(prompt,response,url);
    this.interactions.push(dalle);

  }

  recordTimestampInteraction(prompt,response,timestamp) {
    const timestampInteraction = new TimestampInteraction(prompt,response,timestamp);
    this.interactions.push(timestampInteraction);

  }

  deletePromptByIndex(index) {
    this.interactions.splice(index,1);
  }
  deleteAllPrompts() {
    this.interactions = [];
  }

  
}

export default PromptManager;