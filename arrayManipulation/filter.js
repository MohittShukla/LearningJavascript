// Array of numbers - some are negative, some are zero or positive
const values = [-10, 0, 5, -3, 8, 12];

// Getting only the positive numbers from the array
const positive = values.filter(i => {
    return i > 0;
});

console.log("Positive numbers from the array:");
console.log(positive);


// Comments array - some are short, some are longer
const comments = ["nice", "amazing post", "ok", "thanks a lot", "lol", "brilliant"];

// Filtering out comments which have 5 or more characters
const longComments = comments.filter(i => {
    return i.length >= 5;
});

console.log("\nComments with 5 or more characters:");
console.log(longComments);


// Users array - each user has a name and a nested address object with city
const users = [
    { name: "Alice", address: { city: "Delhi" } },
    { name: "Bob", address: { city: "Mumbai" } },
    { name: "Charlie", address: { city: "Delhi" } }
];

// Filtering out users who live in Delhi
const delhites = users.filter(d => {
    return d.address.city === "Delhi";
});

console.log("\nUsers who live in Delhi:");
console.log(delhites);


// Product list - includes price and inStock info
const products = [
    { name: "Laptop", price: 70000, inStock: true },
    { name: "Mouse", price: 1000, inStock: false },
    { name: "Keyboard", price: 2000, inStock: true },
    { name: "Monitor", price: 15000, inStock: true }
];

// Filtering products that are both in stock and cost less than ₹20,000
const filtered = products.filter(i => {
    return i.price < 20000 && i.inStock;
});

console.log("\nProducts in stock and under ₹20,000:");
console.log(filtered);


// Student list with their marks
const students = [
    { name: "Ananya", marks: 85 },
    { name: "Rahul", marks: 42 },
    { name: "Sneha", marks: 73 },
    { name: "Vikram", marks: 35 }
];

// First filtering the students who have marks 50 or more
let intelligent = students.filter(i => {
    return i.marks >= 50;
});

// Then mapping only their names (just to get a clean list of passed students)
let names = intelligent.map(i => {
    return i.name;
});

console.log("\nNames of students who passed:");
console.log(names);
