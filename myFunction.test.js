// myFunction.js
function add(a, b) {
  return a + b;
}

// myFunction.test.js
const myFunction = require('./myFunction');

test('adds 1 + 2 to equal 3', () => {
  expect(myFunction.add(1, 2)).toBe(3);
});