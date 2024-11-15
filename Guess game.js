const magic_number = Math.floor(Math.random() * 11);

console.log("Magic Number: ",   magic_number, "\n");

let user_number = 5;

let number_of_tries = 3;

while (true) {
  console.log("You have " + number_of_tries + " tries remaining!!")
  if (number_of_tries === 1)
    console.log("Careful this is your last try!")

  if (user_number === magic_number) {
    console.log("Congratulations you guessed the correct magic number!");
    console.log("Magic number was " + magic_number);
    break;
  }
  else {
    console.log("Sorry you have failed to guess the magic number!");
    console.log(user_number + " is not the correct magic number!");

    if (magic_number < user_number)
      console.log("The magic number is less than " + user_number, "\n");
    else
      console.log("The magic number is greater than " + user_number, "\n");
  }
  number_of_tries--;

  if (number_of_tries === 0) {
    console.log("All your tries are over!, \nyou have successfully failed to guess the magic number");
    console.log("Game Over!!", "\n");
    break;
  }
}

console.log("The correct magic number was " + magic_number);

console.log("Thank You!!");


