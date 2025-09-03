const library = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary(title, author, pages, read){
    addedBook = new Book(title, author, pages, read);
    library.push(addedBook);
}

function updateTable(){
    clearTable();
}

function clearTable(){
    let table = document.getElementById("mainTable");
    table.innerHTML = table.rows[0].outerHTML;
}

addBookToLibrary("Lord of the Rings", "Ringy dude", 300, "Yes");

console.log(library);
clearTable();