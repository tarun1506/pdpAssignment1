class Interaction {
    prompt = "";
    response = "";
    
    
    constructor(prompt, response){
      this.prompt = prompt;
      this.response = response;
    }
    
    show() {
      console.log();  
      console.log(`Prompt=> ${this.prompt}  had response=> ${this.response}`);
    }

    showInteractionType(){
        console.log("This interaction is GPT Interaction");
    }
    
  }
    
  export default Interaction;
  
  