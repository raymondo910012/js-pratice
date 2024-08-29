let answer = Math.floor(Math.random() * 100);
let right = 100;
let left = 0;

while (true) {
  let guess = Number(
    prompt("Input your guess ( from " + left + " ~ " + right + " )")
  );

  if (guess < left || guess > right) {
    alert("Invalid input, Please try again");
    continue;
  }

  if (left < guess && guess < answer) {
    left = guess;
  } else if (answer < guess && guess < right) {
    right = guess;
  } else if (answer == guess) {
    alert("The answer is " + answer + " congratulation !!!");
    break;
  }
}
