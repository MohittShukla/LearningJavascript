// This array contains all the books with their details like title, author, pages, genre, rating and whether it's in stock or not
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

// 1. Get all books that are currently in stock
const stock = books.filter(i => {
    return i.inStock; // this will filter out only those books which are available
});

// Map those books to a readable string format
const book = stock.map(i => {
    return `${i.title} by ${i.author} (Rating: ${i.rating})`;
});

console.log("Books that are in stock:");
console.log(book);

// 2. Get all fantasy books with rating above 4.5
const goodFantasyBooks = books.filter(i => {
    return i.rating > 4.5 && i.genre === "Fantasy"; // check for both genre and rating
});

console.log("\nFantasy books with rating greater than 4.5:");
console.log(goodFantasyBooks);

// 3. Calculate total pages from all books
const pages = books.reduce((acc, i) => {
    return acc + i.pages; // add pages one by one using reduce
}, 0);

console.log(`\nTotal number of pages from all books: ${pages}`);

// 4. Find average rating of self-help books
const self = books.filter(i => {
    return i.genre === "Self-help"; // filter out only self-help books
});

// Now get the sum of ratings of all self-help books
const totalRating = self.reduce((acc, i) => {
    return acc + i.rating;
}, 0);

// Divide total rating by number of self-help books to get average
const averageRating = totalRating / self.length;

console.log(`\nAverage rating of Self-help books: ${averageRating.toFixed(2)}`);

// 5. Get books that have more than 300 pages and title starts with "The"
const bigBooks = books.filter(i => {
    return i.pages > 300 && i.title.startsWith("The");
    // checking two conditions together: pages > 300 and title starts with 'The'
});

console.log("\nBooks with more than 300 pages and title starting with 'The':");
console.log(bigBooks);

// 6. Get unique genres from all books
const genres = books.map(book => book.genre); // get all genres from books

// Using Set to remove duplicates and then spreading it into an array
const uniqueGenres = [...new Set(genres)];

console.log("\nList of unique genres:");
console.log(uniqueGenres);
