// If you're using map, make sure you return something inside it,
// otherwise you'll end up with an array full of undefined

console.log('');

// Array of numbers
const number = [1, 2, 3, 4, 5, 6];

// Adding 10 to each number using map
const sum = number.map(options => {
    return options + 10;
});

console.log("Each number +10 gives:");
console.log(sum);
console.log('');


// Array of fruit names
const fruits = ['apple', 'banana', 'mango'];

// Converting all fruit names to uppercase
const big = fruits.map(i => i.toUpperCase());

console.log("Fruits in uppercase:");
console.log(big);
console.log('');


// Getting length of each fruit name
const len = fruits.map(l => {
    return l.length;
});

console.log("Length of each fruit name:");
console.log(len);
console.log('');


// Extracting names from array of user objects
const users = [
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 30 }
];

// Getting only the names from the users array
const names = users.map(i => {
    return i.name;
});

console.log("Names of all users:");
console.log(names);
console.log('');


// Formatting product names with prices
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
];

// Creating formatted strings from product details
const formatted = products.map(format => {
    return `${format.name} costs ${format.price}`;
});

console.log("Formatted product info:");
console.log(formatted);
