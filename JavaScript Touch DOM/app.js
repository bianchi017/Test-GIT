class Book {
    constructor(title, author, wasRead) {
        this.title = title;
        this.author = author;
        this.wasRead = wasRead;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getWasRead() {
        return this.wasRead;
    }
}
const library = [];

const titleInput = document.getElementById('inputTitle');
const authorInput = document.getElementById('inputAuthor');
const readInput = document.getElementById('inputRead');
const booksTable = document.getElementById('tableBooks');
const addBookButton = document.getElementById('buttonAddBook');
const cancelButton = document.getElementById('buttonCancel');

addBookButton.onclick = onValidar;
cancelButton.onclick = clearInputs;
readInput.checked = true;
titleInput.focus();

function clearInputs() {
    titleInput.value = '';
    authorInput.value = '';
    readInput.checked = true;
    titleInput.focus();
}

function updateBooksTable() {
    const newTableBody = document.createElement('tbody');
    const oldTableBody = booksTable.getElementsByTagName('tbody')[0];

    var index;
    for (index = 0; index < library.length; index++) {
        const newRow = newTableBody.insertRow();
        const textTitle = document.createTextNode(library[index].getTitle());
        const textAuthor = document.createTextNode(library[index].getAuthor());
        const textWasRead = document.createTextNode(library[index].getWasRead());

        newRow.insertCell(0).appendChild(textTitle);
        newRow.insertCell(1).appendChild(textAuthor);
        newRow.insertCell(2).appendChild(textWasRead);
    }
    oldTableBody.parentNode.replaceChild(newTableBody, oldTableBody);
}

function AddBook() {
    const newBook = new Book(titleInput.value, authorInput.value, readInput.checked ? 'Sí' : 'No');
    library.push(newBook);
    updateBooksTable();
    clearInputs();
}

function onValidar() {
    if (titleInput.value == '') {
        alert("¡Debe ingresar un Título!");
        titleInput.focus();
    }
    else if (authorInput.value == '') {
        alert("¡Debe ingresar un Autor!");
        authorInput.focus();
    }
    else if (authorInput.value.match(/[0-9]/)) {
        alert("¡No se permite ingresar números en el campo Autor!");
        authorInput.focus();
    }
    else {
        AddBook();
    }
}    