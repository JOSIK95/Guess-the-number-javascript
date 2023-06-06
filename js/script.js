var response = document.querySelector(".response");
var showGuess = document.querySelector(".show-guess");
var num = Number(prompt("Guess a number between 1-25. :)"));
var name = prompt("What's your name?");

function guessNumber(name, num) {
  var randomNumber = Math.floor(Math.random() * 26); // This will produce a number between 1 and 25 - this line is error free :)

  if (num > 25) {
    response.innerText = "We need a number between 1 and 25.";
    return;
  } else if (num < 1) {
    response.innerText = "We need a number between 1 and 25.";
    return;
  }

  // We've got a number between 1 and 25, let's do this.
  showGuess.innerText = num;
  response.innerText = name;
  if (num === randomNumber) {
    response.innerText = `Hey, ${name}, you totally guessed the number! Must be your lucky day.`;
  } else if (num < randomNumber) {
    response.innerText = `Hey, ${name}, your guess was too low. The number was ${randomNumber}.`;
  } else if (num > randomNumber) {
    response.innerText = `Hey, ${name}, your guess was too high. The number was ${randomNumber}.`;
  } else {
    response.innerText = `That's not a number, ${name}!`;
  }
}

guessNumber(name, num);
