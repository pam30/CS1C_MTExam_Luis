let theFavNumber = 7;  // Favorite number
let guess;

while (guess != theFavNumber) {
    guess = prompt("Guess the favorite number:");
    guess = Number(guess); // Convert input to number

    if (guess > theFavNumber) {
        console.log("Too high! Try again.");
    } else if (guess < theFavNumber) {
        console.log("Too low! Try again.");
    } else {
        console.log("Correct! Well done.");
    }
}
