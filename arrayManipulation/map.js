// you have to return something in map otherwise it returns an array with undefined elements


console.log('')

const number = [1,2,3,4,5,6];
// adding 10 to each number using map;


 const sum = number.map(options => {
    options = options + 10;
    return options;
 })

console.log(`10 more is -> ${sum}`);
console.log('')


const fruits = ['apple', 'banana', 'mango'];
// making it uppercase;
const big = fruits.map(i => i.toUpperCase());
console.log(big);
console.log('')

// Get the lengths of each string

const len = fruits.map(l => {
    return l.length;
})
console.log(len);

console.log('')

// Extract names from array of objects

const users = [
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 30 }
  ];


  const names = users.map(i => {
    return i.name;
  })

  console.log(names);
  console.log('')


//   Format strings from object
  const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
  ];

  const formatted = products.map(format =>{
    return  `${format.name} costs ${format.price}`;
  })

  console.log(formatted);
