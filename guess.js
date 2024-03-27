// The module to prompt users entries
const prompt = require("prompt-sync")({ sigint: true });

function guess() {

  const guess_No = Math.round(10 * Math.random());

  //Prompt user to enter a number between 0 and 10

  const user_input = Number(prompt("Enter a number between 0 and 10 "));

  if (user_input == guess_No) {

    console.log(`You answered ${user_input}. This is the correct answer`);

  } else if (user_input > guess_No) {

    console.log(`You answered ${user_input}. The correct answer is lower`);

  } else {

    console.log(`You answered ${user_input}. The correct answer is higher`);

  }

}


// Call the function
guess();