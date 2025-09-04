const library = [];

const tableBody = document.getElementById("tableBody");
const dialog = document.getElementById("mainDialog");
const showButton = document.getElementById("showButton");
const closeButon = document.getElementById("closeButton");
const modalForm = document.getElementById("modalForm");

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

addBookButton.addEventListener("click", () => {
    addBookModal();
    modalForm.reset();
    updateTable();
    dialog.close();
})

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () =>{
    dialog.close();
});



function addBookToLibrary(title, author, pages, read){
    addedBook = new Book(title, author, pages, read);
    library.push(addedBook);
}

function updateTable(){
    clearTable();
    

    for (let i = 0; i < library.length; i++){
        let row = document.createElement("tr");


        let nTitle = document.createElement("td");
        nTitle.innerHTML = library[i].title;
        
        let nAuthor = document.createElement("td");
        nAuthor.innerHTML = library[i].author;

        let nPages = document.createElement("td");
        nPages.innerHTML = library[i].pages;

        let nRead = document.createElement("td");
        nRead.innerHTML = library[i].read;

        row.appendChild(nTitle);
        row.appendChild(nAuthor);
        row.appendChild(nPages);
        row.appendChild(nRead);
        tableBody.appendChild(row);
        console.log("done for 1");
    }

}

function clearTable(){
    tableBody.innerHTML = "";
}

function addBookModal(){
    let modalTitle = document.getElementById("title").value;
    let modalAuthor = document.getElementById("author").value;
    let modalPages = document.getElementById("pages").value;
    let modalRead = document.getElementById("read").value;

    let newBook = new Book(modalTitle,modalAuthor,modalPages,modalRead);
    library.push(newBook);
    updateTable();

}

addBookToLibrary("Lord of the Rings", "Ringy dude", 300, "Yes");
addBookToLibrary("Hitchikers Guide to the Galaxy", "Doughlass Adams", 160, "Yes");

console.log(library);
updateTable();