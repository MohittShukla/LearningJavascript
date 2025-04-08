const values = [-10, 0, 5, -3, 8, 12];
// Filter out only the positive numbers (i.e., > 0)

const positive = values.filter(i =>{
    return i>0;
})
console.log(positive);

// Filter only those comments that have 5 or more characters
const comments = ["nice", "amazing post", "ok", "thanks a lot", "lol", "brilliant"];


const longComments = comments.filter(i =>{
    return i.length>5;
})

console.log(longComments);

  // Filter users who live in 'Delhi'
const users = [
    { name: "Alice", address: { city: "Delhi" } },
    { name: "Bob", address: { city: "Mumbai" } },
    { name: "Charlie", address: { city: "Delhi" } }
  ];


  const delhites = users.filter(d => {
    return d.address.city === "Delhi";
  })

  console.log(delhites);

  // Filter products that are in stock AND cost less than ₹20,000

  const products = [
    { name: "Laptop", price: 70000, inStock: true },
    { name: "Mouse", price: 1000, inStock: false },
    { name: "Keyboard", price: 2000, inStock: true },
    { name: "Monitor", price: 15000, inStock: true }
  ];


  const filtered = products.filter(i => {
    return (i.price<20000 && i.inStock);
  })

  console.log(filtered);

  // Get the names of students who passed (marks >= 50)
  const students = [
    { name: "Ananya", marks: 85 },
    { name: "Rahul", marks: 42 },
    { name: "Sneha", marks: 73 },
    { name: "Vikram", marks: 35 }
  ];


  let intelligent = students.filter(i => {
        return i.marks > 50;
  })

  let names = intelligent.map(i=> {
    return i.name;
  })

  console.log(names);
