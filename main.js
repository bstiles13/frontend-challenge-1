var api = {};

/*
  PART 1: Implement fanOut.

  fanOut - return a new collection of results after applying the
           input function to each item in the input collection.

  args: input - input collection
        fn - function to apply to each item in the collection

  EX:  - fanOut([1, 2, 3], double) -->  [1, 4, 9];

 function double(n) { return n * n; }

  Restrictions:
    - Do not use make any function calls (other than fn and push)
    - You may not use any external libraries

*/
api.fanOut = function (input, fn) {
  // TODO: your implementation here.

  // SOLUTION 1: with methods
  // return input.map(item => {
  //   return fn(item);
  // })

  // SOLUTION 2: without methods
  // Define array to be returned
  let output = [];
  // Apply fn to each item in input collection and push the result to output
  for (var i = 0; i < input.length; i++) {
    output.push(fn(input[i]));
  }
  // Return new collection
  return output;
};



/*
 PART 2: Implement funnel.

 funnel - return an result after applying an accumulation function to
          each item in the collection. Funneling down to a single result.

 args: input - input collection
       fn - function to apply to each item in the collection with
            args accumulation value and current value
       startValue - start the accumulation with this value

 EX:  - funnel([1, 2, 3], add, 0) -->  6;
      - funnel([1, 2], add, 1) --> 4

      function add(total, n) { return total + n; }

 Restrictions:
   - Do not use make any function calls (other than fn and push)
   - You may not use any external libraries

 */
api.funnel = function (input, fn, startValue) {
  // TODO: your implementation here.

  // Define sum variable to be returned and determine if it will accumulate numbers or strings
  let sum = isNaN(input[0]) ? '' : 0;
  // For each number or word in the input collection, add the number to the sum value or add the word to the end of the sum string
  for (var i = 0; i < input.length; i++) {
    sum += input[i];
  }
  // Return final sum
  return fn(sum, startValue);
};



/*
 PART 3: Implement distill.

 distill - return a new collection of results after applying the
 predicate function to each item. Only include the item in the result
 if the predicate returns true.

 args: input - input collection
 fn - predicate function to apply to each item in the collection

 EX:  - distill([1, 2, 3], isEven) -->  [2];
      - distill([1, 2, 3], isOdd) -->  [1, 3];
      - distill([1, 2, 3], isNegative) -->  [];

 Restrictions:
 - Do not use make any function calls (other than fn and push)
 - You may not use any external libraries

 */
api.distill = function (input, fn) {
  // TODO: your implementation here.

  // SOLUTION 1: with methods
  // return input.filter(item => {
  //   return fn(item);
  // })

  // SOLUTION 2: without methods
  // Define array to be returned
  let output = [];
  // Apply fn to each item in input collection and, if true, push the result to output
  for (var i = 0; i < input.length; i++) {
    fn(input[i]) ? output.push(input[i]) : false;
  }
  // Return new/distilled collection
  return output;
};



/*
 PART 4: Implement numberOfChars.

 numberOfChars - return the number of characters in the input array of strings

 args: input - input collection of strings (words)

 EX:  - numberOfChars(['the']) -->  3;
 - numberOfChars(['the', 'end']) -->  6;

 Restrictions:
 - You MAY use fanOut, funnel, and distill, and the length property
 - You may not use make any other function calls
 - You may not use any external libraries

 */
api.numberOfChars = function (input) {
  // TODO: your implementation here

  // SOLUTION 1: with methods
  // let characters = input.join('');
  // return characters.length;

  //SOLUTION 2: without methods
  // Define variable/string to hold all characters in collection
  let characters = '';
  // Combine all items in input collection in a single string in characters variable
  for (var i = 0; i < input.length; i++) {
    characters += input[i];
  }
  // Return length (number of characters) in characters string
  return characters.length;
};



/*
 PART 5: Implement numberOfCertainChars.

 numberOfCertainChars - return the number of c characters in the input array of strings

 args: input - input collection of strings (words)
       c - the certain character to count

 EX:  - numberOfCertainChars(['the'], 'e') -->  1;
      - numberOfCertainChars(['the', 'end'], 'e') -->  2;

 Restrictions:
 - You MAY use fanOut, funnel, and distill, and the length property
 - You may not use make any other function calls
 - You may not use any external libraries

 */
api.numberOfCertainChars = function (input, c) {
  // TODO: your implementation here

  // SOLUTION 1: with methods
  // let count = 0;
  // let characters = input.join('');
  // for (var i = 0; i < characters.length; i++) {
  //   characters[i] == c ? count++ : false;
  // }
  // return count;

  //SOLUTION 2: without methods
  // Define variable that will count the number of times c occurs
  let count = 0;
  // For each item in the input collection, test each character in the item to see if it matches c and, if true, increase the count by 1
  for (var i = 0; i < input.length; i++) {

    for (var j = 0; j < input[i].length; j++) {
      input[i][j] == c ? count++ : false;
    }

  }
  // Return the final number of c characters 
  return count;
};

module.exports = api;
