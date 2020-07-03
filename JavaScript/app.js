var bookCollection = [];

function addBook(title, author, numOfPages) {
    const newBook = {
        title, author, numOfPages
    };
    bookCollection.push(newBook);
}

function listBooks() {
    var index;
    for (index = 0; index < bookCollection.length; index++) {
        const currentBook = bookCollection[index];
        const { title, author, numOfPages } = currentBook;
        /*const title = currentBook.title;
        const author = currentBook.author;
        const numOfPages = currentBook.numOfPages;*/
        console.log(`El libro ${index + 1} se llama "${title}", fue escrito por ${author} y tiene ${numOfPages} páginas.`);
    }
}

addBook('Harry Potter y la piedra filosofal', 'Joanne Rowling​', 255);
addBook('Pet Sematary', 'Stephen King', 487);
addBook('Unknown', 1 / 'Pepito Perez',);

listBooks();


console.log(`\n`);
console.log(`Test operaciones`);

var x = 10;
var y = "20";
var z = x + y;
console.log(z);

var x = 10;
var y = 20;
var z = x + y;
console.log(z);

var x = "10";
var y = 20;
var z = x + y;
console.log(z);

var x = "10";
var y = "20";
var z = x + y;
console.log(z);

var x = "10";
var y = 20;
var z = x * y;
console.log(z);

var x = 10;
var y = 20;
var z = x * y;
console.log(z);

var x = "10";
var y = "20";
var z = x * y;
console.log(z);

var x = 10;
var y = 'Pepito';
var z = x / y;
console.log(z);

var x = 10;
var y = 0;
var z = x / y;
console.log(z);

var x = -10;
var y = 0;
var z = x / y;
console.log(z);