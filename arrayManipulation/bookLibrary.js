const books = [
    { title: "Atomic Habits", author: "James Clear", pages: 320, genre: "Self-help", rating: 4.8, inStock: true },
    { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 310, genre: "Fantasy", rating: 4.7, inStock: false },
    { title: "1984", author: "George Orwell", pages: 328, genre: "Dystopian", rating: 4.6, inStock: true },
    { title: "The Alchemist", author: "Paulo Coelho", pages: 197, genre: "Fiction", rating: 4.3, inStock: true },
    { title: "Deep Work", author: "Cal Newport", pages: 296, genre: "Self-help", rating: 4.5, inStock: true },
    { title: "Sapiens", author: "Yuval Noah Harari", pages: 443, genre: "History", rating: 4.7, inStock: false },
    { title: "Clean Code", author: "Robert C. Martin", pages: 464, genre: "Programming", rating: 4.9, inStock: true },
    { title: "The Pragmatic Programmer", author: "Andy Hunt", pages: 352, genre: "Programming", rating: 4.6, inStock: true },
    { title: "Harry Potter and the Sorcerer’s Stone", author: "J.K. Rowling", pages: 309, genre: "Fantasy", rating: 4.9, inStock: true },
    { title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", pages: 224, genre: "Self-help", rating: 4.2, inStock: false }
  ];
  
// //   "Clean Code by Robert C. Martin (Rating: 4.9)
// ✅ 2. Get an array of all book titles that are Fantasy genre and have rating > 4.5
// ✅ 3. Calculate the total number of pages for books that are in stock.
// ✅ 4. Find the average rating of all "Self-help" books.
// ✅ 5. List only those books that have more than 300 pages and start with 'The'
// ✅ 6. Create an array of unique genres from the dataset (no duplicates).

const stock = books.filter(i =>{
        return i.inStock;
})
const book = stock.map(i=> {
    return (`${i.title} by ${i.author} (Rating: ${i.rating})`);
})
console.log(book);
const goodFantasyBooks = books.filter(i=>{
    return (i.rating > 4.5 && i.genre == "Fantasy");
})
console.log(goodFantasyBooks);

const pages = books.reduce((acc,i)=>{
    return i.pages + acc;
},0)

console.log(pages);

const self = books.filter(i=>{
    return i.genre == "Self-help"
})

const totalRating = self.reduce((acc,i)=> {
  return acc + i.rating;
},0)
let averageRating = totalRating/self.length;
console.log(averageRating);


const bigBooks = books.filter(i=>{
    return (i.pages>300 && i.title.startsWith("The"));
})

console.log(bigBooks);

const genres = books.map(book => book.genre);
const uniqueGenres = [...new Set(genres)];  
console.log(uniqueGenres);
