// console.log("hello");
// const Person = {
//     name : "mohit",
//     age: 20,
// }
// const np = Person;
// console.log(np.name);
// class Person{   
//     constructor(name,age){
//         this.name  = name;
//         this.age = age;
//     }
//     greet(name) {
//         console.log("Hellow", name);
//     }
// }
let journal = [];
function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}
addEntry(["work", "touched tree", "pizza", "running",
    "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
    "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
    "beer"], true);
journal.forEach(journ => {
    console.log(`${journ.events.join(", ")}`);
})

