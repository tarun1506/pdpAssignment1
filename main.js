import PromptManager from "./PromptManager.js";
import readline from 'readline';


const myPromptManager = new PromptManager();

myPromptManager.recordPrompt(
  "What is a coding paradigm?",
  "A coding paradigm is a style or way of thinking about programming."
);

myPromptManager.recordPrompt(
  "What is declarative programming?",
  "Declarative programming is a programming paradigm that expresses the logic of a computation without describing its control flow."
);

myPromptManager.recordTimestampInteraction(
  "What is imperative programming?",
  "Imperative programming is a programming paradigm that uses statements that change a program's state. In imperative programming, the focus is on describing how a program operates.",
  new Date()
);

myPromptManager.recordDalleInteraction(
  "Why is Husky has blue eyes?",
  "Because he is a Siberian Husky",
  "https://plus.unsplash.com/premium_photo-1667729435876-3a83af97f536?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);

myPromptManager.recordDalleInteraction(
  "Which is the fastest car in the world?",
  "Bugatti Chiron Super Sport 300+",
  "https://www.motortrend.com/uploads/2023/08/Bugatti-Chiron-Super-Sport-Golden-Era-17.jpg?fit=around%7C875:492"
);

myPromptManager.recordTimestampInteraction(
  "Which is new car manufactured by Ferrari?",
  "Ferrari 296 GTB",
  new Date()
);    
myPromptManager.showAllInteractions();
console.log("======================================");


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("1. Delete prompt by index");
console.log("2. Delete all prompts");
console.log("3. Show all prompts");
console.log("4. Exit");

rl.question('Please enter your choice: ', (input) => {
  switch(input){
    case "1":
      rl.question('Please enter index of the prompt to be deleted: ', (index) => {
        console.log(`Deleting prompt at index ${index}`);
        myPromptManager.deletePromptByIndex(index);
        rl.close();
      });
      break;
    case "2":
      myPromptManager.deleteAllPrompts();
      console.log("All prompts deleted");
      rl.close();
      break;
    case "3":
      myPromptManager.showAllInteractions();
      rl.close();
      break;
    case "4":
      console.log("Exiting !!");
      rl.close();
      process.exit(0);
      break;
    default:
      console.log("Invalid choice");
      rl.close();
      process.exit(1);
  }
});
