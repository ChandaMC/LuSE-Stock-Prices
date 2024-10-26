var magic_number = 10;

var user_number = 10;

while (true) {
  if (user_number === magic_number) {
    console.log("Congratulations you guessed the correct magic number!");
    console.log("Magic number was " + magic_number);
    break;
  }
  else {
    console.log("Sorry you have failed to guess the magic number!");
    console.log("The magic number was " + magic_number);
  }
}
console.log("Thank You!!");
