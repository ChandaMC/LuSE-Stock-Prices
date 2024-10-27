function letterFinder(word, match) {
  for (let i = 0; i < word.length; i++) {

  }
}

/**
 * Represents a Rectangle.
 * @class
 */
class Rectangle {
  /**
   * Create a rectangle.
   * @param {number} width - The width of the rectangle.
   * @param {number} height - The height of the rectangle.
   */
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}



/*
Your task in this exercise is to code a function which will be able to take
a word and locate the position of a chosen letter in that given word.

Task 1:
Write a function named letterFinder that accepts two parameters: word and match.

Task 2:
Code a 'for' loop inside the function's body. The for loop's counter should start at zero,
increment by 1 on each iteration and exit when the counter variable's value is equal to
the length of the word parameter.

Task 3:
Add an if statement inside the for loop whose condition works as follows:

Access each of the letters inside the passed in word using the counter variable,
with word[i].

Check if the current word[i] is equal to the value of match.

Task 4:
console.log the following inside the body of the if statement: console.log('Found the',
match, 'at', i).

Task 5:
Write the else condition. Here you'll just console log the following:
  console.log('---No match found at', i).

Task 6:
Call the letterFinder and pass it as its first argument as the string "test" and as
its second argument, the string "t".

Your output should be the following:

Found the t at 0

---No match found at 1

---No match found at 2

Found the t at 3
*/

/*
var names = ['Chanda'];

names.push("Chimfwembe");
names.push("John");
names.push("Mary");
names.push("James");
names.push("January");
names.push("February");
names.push("March");
names.push("April");
names.push("May");
names.push("June");
names.push("July");
names.push("August");
names.push("September");
names.push("October");
names.push("November");
names.push("December");
names.push(1);
names.push(10);
names.push(100);
names.push(1000);
names.push(10000);
names.push(100000);
names.push(1000000);
names.push(10000000);
names.push(100000000);

var arraySize = names.length;
for (var j = 0; j < arraySize; j++)
  for (var k = 1; k < (10**10); k*=10) {
    names.push(k);
    names.push(j);
  }

console.log(names[names.length - 1]);
console.log(names.length);
console.log(names)

var i = names.length - 1;
var counter = 0;
while (true) {

  console.log("The length of the array is", names.length );
  console.log("["+ names[i] + "] has been popped out, from position", i);
  names.pop();
  console.log("["+ counter + "] is the loop counter now.");
  console.log("The length of the array is now", names.length, "\n");
  counter++;
  i--;
  if (names.length === 0) {
    console.log("The array is now empty")
    break;
  }
}

console.log(names.length);
console.log(names);
*/

/*
function learn() {
  console.log("Switch Case......");
  for ( var j = 1; j <= 10; j++) {
    switch (j) {
      case 1:
        console.log("Gold medal");
        break;
      case 2:
        console.log("Silver medal");
        break;
      case 3:
        console.log("Bronze medal");
        break;
      default:
        console.log(j);
        break;
    }
  }
}

learn();
*/

/*
//TIP the code is made in js

console.log("Switch Case..............")
var j = 1;
for (j; j <= 10; j++) {
  switch (j) {
    case 1:
      console.log("Gold medal");
      break;
    case 2:
      console.log("Silver medal");
      break;
    case 3:
      console.log("Bronze medal");
      break
    default:
      console.log(j);
  }
}

console.log("")
console.log("For Loop................")
for (var i = 1; i <= 10; i++) {
  if (i === 1) {
    console.log("Gold medal");
  } else if (i === 2) {
    console.log("Silver medal");
  } else if (i === 3) {
    console.log("Bronze medal");
  } else
    console.log(i);
}
*/

/*
for (var i = 1; i <= 3; i++) {
  console.log("Week", i);
  for (var j = 1; j <= 3; j++) {
    console.log("....Day",  j);
  }
}
*/

/*
for (var i = 1; i <= 3; i++)
 console.log(i);
console.log("Go")
*/

/*
var i = 1;
while (i <= 3) {
  console.log(i);
  i++;
}
console.log("Go")
*/

/*
const age = 25;

if (age >= 65)
  console.log('You get your income from your pension.');
else if (age < 65 && age >= 18)
  console.log('Each month you get a salary.');
else if (age < 18)
  console.log('You get an allowance.');
else
  console.log('The value of the age is not numeric.');
*/

/*
const day = 'Sunday';

switch (day) {
  case 'Monday':
    console.log('Today is Monday');
    break;
  case 'Tuesday':
    console.log('Today is Tuesday');
    break;
  case 'Wednesday':
    console.log('Today is Wednesday');
    break;
  case 'Thursday':
    console.log('Today is Thursday');
    break;
  case 'Friday':
    console.log('Today is Friday');
    break;
  case 'Saturday':
    console.log('Today is Saturday');
    break;
  case 'Sunday':
    console.log('Today is Sunday');
    break;
  default:
    console.log('They is no such day');
}
*/