let $ = document;
let name = $.getElementById('title');
let writer = $.getElementById('author');
let publish = $.getElementById('year');
let inputBtn = $.querySelector('.btn');
let list = $.querySelector('#book-list')

// name.focus()

let index = 0;
booksArray = [];

function addBook(event){
    event.preventDefault()
    // console.log(name.value)
    let newBook = {id: booksArray.length+1 , title: name.value , author: writer.value ,year: publish.value}
        console.log(newBook)
    booksArray[index] = newBook;
    index++;

    name.value = '';
    writer.value = '';
    publish.value = '';
    name.focus()

    setLocalStorage(booksArray);
    generator();
}

function setLocalStorage(bookslist){
    localStorage.setItem('books',JSON.stringify(bookslist));
}

function generator(){
    // let bookslist = JSON.parse(localStorage.getItem('books'));
    // booksArray = bookslist;
    list.innerHTML = '';

    booksArray.forEach(function (book){

/*         let newName = $.createElement('td');
        newName.innerHTML = book.title;
        // console.log(newName)
        let newAuthor = $.createElement('td');
        newAuthor.innerHTML = book.author
        let newYear = $.createElement('td');
        newYear.innerHTML = book.year

        let newTr = $.createElement('tr');
        newTr.append(newName,newAuthor,newYear);

        list.append(newTr); */

        // booksArray=[]

        list.insertAdjacentHTML('beforeend',`<tr><td>${book.title}</td><td>${book.author}</td><td>${book.year}</td></tr>`)
    })

}

function getBooksFromLocalStorage() {

    let localStorageBooks = localStorage.getItem('books')

    if (localStorageBooks) {
        booksArray = JSON.parse(localStorageBooks);
        generator(booksArray);
    }
}

// console.log(name.value)

inputBtn.addEventListener('click',addBook);
window.addEventListener('load', getBooksFromLocalStorage)