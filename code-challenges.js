// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code: 

// Set one:

const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code: 1. create a function named tempNumbers 2. create a parameter variable that lets you use const temp(1)(2)(3) into that function 3. set up the conditionals that returns the the phrases provided based on wether the temps. are above or below 212. 4. console.log() the function with the provided const variables to ouput the results within the terminal.
const temp1 = 42
const temp2 = 350
const temp3 = 212
const temNumbers = (temp) => {
    if(temp > 212){
        return `${temp} is above boiling point`
    } else if(temp === 212) {
        return `${temp} is at boiling point`
    } else if(temp <= 212) {
        return `${temp} is below boiling point`
    }
}
console.log(temNumbers(temp1))
console.log(temNumbers(temp2))
console.log(temNumbers(temp3))



// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code: 1. creat a variable with a name with the values (const numbersCombined =). 2. use the accessor .concat to combine both arrays into one (const numbersCombined = mynumbers1.concat(myNumbers2)). 3. console.log the new created variable with the .length to output the number of characters within the new array (console.log(numbersCombined.length)). 4. output will display 10 in the terminal. 

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

const numbersCombined = myNumbers1.concat(myNumbers2)

console.log(numbersCombined.length)


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ohcE"

// Pseudo code: The current variable value is a string that needs to be reversed completely backwards by characters. use the built in function to shorten the work and output the results. 2. create a function called reversString with the parameter of the given variable.  NOTE: In order to obtain the output we will need to follow a variety of steps suchs: converting the string to an arrray (.split("")), reverseing the values of the array(.revers()), and joining the values of the arrays together. (.join("")). 3. apply the parameter variable in the return along with ALL the accessors accordingingly to shorten the work.  

const currentCohort = "Echo 2022"

const reverseString = (currentCohort) => {
    return currentCohort.split("").reverse().join("")
}
console.log(reverseString(currentCohort))

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code: To determine if each value is even or odd, you need to set up an iteration. 1. use the for loop iteration to evaluate the possible outcomes of the values. 2. set the iteration at 0 to start. 3. set the condtion so that the iteration ends only at the length of the variable. 4 at every iteration set the iteration to add the following value number.

const myArray = [13, 34, 5, 10, 27, 42]
for(let i = 0; i < myArray.length; i++)
if(myArray[i] % 2 === 0){
    console.log("even")
} else{
    console.log("odd")
}


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code: 1. create two new variables that subtract set one and set two from the largest number to the smallest number. 2. create a function named numberSets with a parameter called set that lets you apply the two new variables. 3. console.log() the function twice with the two new variables.

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

const set1 = number2 - number1
const set2 = number3 - number4
const numberSets = (set) => {
    return set
}
console.log(numberSets(set1))
console.log(numberSets(set2))