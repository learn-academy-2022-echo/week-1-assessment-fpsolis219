// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: my initial answer was correct because the console.log was going to output the the number of characters of the string value of the variable const cohort. using .length gives the total number of characters that are in a value.


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: my initial  answer was correct because the console.log was set to output the index of the variable value that was in the 4th place. Even though the letter O is technically the fifth letter of the word hello, the index is numbered starting from 0.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: ruby
// b) Verify and explain: my initial answer is correct because the console.log is outputing the value that was in the 1st place of the index. index are numbered from 0, making ruby the value thats in the 1 index


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer:  "SATURDAYS", "SUNDAY"
// b) Verify and explain: my answer was incorrect. According to the terminal weekendDays.toUpperCase, is not a function.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: my initial answer was correct because the console.log() was set to output the type of data type that was going to be outputted. In this case the output was going to be 3 for the number of character values within the length of the variable. since the output was 3 and the console.log() was asking for the type of data the, the answer was number.
