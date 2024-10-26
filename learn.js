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