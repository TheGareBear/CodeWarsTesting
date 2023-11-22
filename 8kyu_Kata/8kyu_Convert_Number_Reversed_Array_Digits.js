// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function reverseArrayOfDigits(number) {
    // Convert the number to a string and then split, reverse, and map each character to an integer
    const reversedArray = String(number).split('').reverse().map(Number);
    
    return reversedArray;
}