const library = [];

let tableBody = document.getElementById("tableBody");

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

addBookToLibrary("Lord of the Rings", "Ringy dude", 300, "Yes");

console.log(library);
updateTable();