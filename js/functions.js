import { BookHTML, TsundokuHTML } from "./classesHTML.js";

function toggleNav() { //para hamburguesa
    let nav = document.querySelector(".nav-apartados");
    nav.classList.toggle("active");
}

function displayBook(books) {
    const resultSection = document.getElementById("browser__results");
    resultSection.innerHTML = ""; //si hemos hecho búsqueda anterior, la borra
    books.forEach(book => {
        const volumeInfo = book.volumeInfo;
        const bookCard = new BookHTML(
            volumeInfo.title,
            volumeInfo.publishedDate,
            volumeInfo.pageCount,
            volumeInfo.language,
            volumeInfo.categories,
            volumeInfo.description,
            volumeInfo.imageLinks,
            volumeInfo.authors,
            volumeInfo.infoLink
        )
        if (!volumeInfo.imageLinks) { //si no hay foto, no lo enseñes
            return
        } else {
            bookCard.initialize(resultSection);
        }
    });
}

export {
    toggleNav,
    displayBook
}