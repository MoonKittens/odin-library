const myLibrary = [];


function book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBooktoLibrary(){
    const title = document.querySelector("#title").value
    const author = document.querySelector("#author").value
    const pages = document.querySelector("#pages").value
    const read = document.querySelector("#read").checked

    const newbook = new book(title, author, pages, read);
    myLibrary.push(newbook);
    showBooks();

}

function showBooks(){
    var Library = document.querySelector(".library");
    Library.textContent = "";
    for(var i = 0; i < myLibrary.length; i++){
        var libraryBook = myLibrary[i];

        card = document.createElement("div");
        card.classList.add("card");
        Library.appendChild(card);
        
        booktitle = document.createElement('h2');
        booktitle.textContent = `${libraryBook.title}`;
        card.appendChild(booktitle);

        bookauthor = document.createElement('p');
        bookauthor.textContent = `${libraryBook.author}`;
        card.appendChild(bookauthor);

        bookpages = document.createElement('p');
        bookpages.textContent = `${libraryBook.pages}`;
        card.appendChild(bookpages);

        bookstatus = document.createElement('p');
        bookstatus.textContent = `${libraryBook.read}`;
        card.appendChild(bookstatus);
    }
}

newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click", function(e){
    e.preventDefault();
    addBooktoLibrary();
})
