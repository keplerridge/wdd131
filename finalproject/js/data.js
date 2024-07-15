// data.js

// Define initial books array with random ratings
let books = [
    { title: 'To Kill a Mockingbird', genre: 'Fiction', rating: getRandomRating() },
    { title: '1984', genre: 'Science Fiction', rating: getRandomRating() },
    { title: 'The Great Gatsby', genre: 'Classic', rating: getRandomRating() },
    { title: 'Pride and Prejudice', genre: 'Romance', rating: getRandomRating() },
    { title: 'The Catcher in the Rye', genre: 'Fiction', rating: getRandomRating() },
    { title: 'Animal Farm', genre: 'Science Fiction', rating: getRandomRating() },
    { title: 'Brave New World', genre: 'Science Fiction', rating: getRandomRating() },
    { title: 'Lord of the Flies', genre: 'Classic', rating: getRandomRating() },
    { title: 'Jane Eyre', genre: 'Romance', rating: getRandomRating() },
    { title: 'Moby Dick', genre: 'Classic', rating: getRandomRating() },
    { title: 'The Hobbit', genre: 'Fantasy', rating: getRandomRating() },
    { title: 'War and Peace', genre: 'Classic', rating: getRandomRating() },
    { title: 'The Odyssey', genre: 'Classic', rating: getRandomRating() },
    { title: 'Frankenstein', genre: 'Horror', rating: getRandomRating() },
    { title: 'The Picture of Dorian Gray', genre: 'Classic', rating: getRandomRating() },
    { title: 'Wuthering Heights', genre: 'Romance', rating: getRandomRating() },
    { title: 'The Road', genre: 'Fiction', rating: getRandomRating() },
    { title: 'Anna Karenina', genre: 'Classic', rating: getRandomRating() },
    { title: 'Catch-22', genre: 'Fiction', rating: getRandomRating() },
    { title: 'The Count of Monte Cristo', genre: 'Adventure', rating: getRandomRating() },
    { title: 'Dracula', genre: 'Horror', rating: getRandomRating() },
    { title: 'Slaughterhouse-Five', genre: 'Science Fiction', rating: getRandomRating() },
    { title: 'Gone with the Wind', genre: 'Romance', rating: getRandomRating() },
    { title: 'The Shining', genre: 'Horror', rating: getRandomRating() },
    { title: 'Les Misérables', genre: 'Classic', rating: getRandomRating() },
    { title: 'The Lord of the Rings', genre: 'Fantasy', rating: getRandomRating() },
    { title: 'One Hundred Years of Solitude', genre: 'Classic', rating: getRandomRating() },
    { title: 'A Clockwork Orange', genre: 'Science Fiction', rating: getRandomRating() },
    { title: 'The Handmaid\'s Tale', genre: 'Science Fiction', rating: getRandomRating() },
    { title: 'Invisible Man', genre: 'Classic', rating: getRandomRating() },
    { title: 'Beloved', genre: 'Fiction', rating: getRandomRating() }
];

// Function to generate random ratings between 3.0 and 5.0
function getRandomRating() {
    return (Math.random() * (5.0 - 3.0) + 3.0).toFixed(1);
}

// Function to add a book to the books array
const addBook = (title, genre, rating) => {
    const newBook = {
        title: title,
        genre: genre,
        rating: rating.toFixed(1) // Convert rating to fixed decimal format
    };
    books.push(newBook);
};

// Function to render books
const renderBooks = (booksArray, containerId) => {
    const mainContainer = document.getElementById(containerId);
    mainContainer.innerHTML = ''; // Clear previous content

    const genres = [...new Set(booksArray.map(book => book.genre))];

    genres.forEach(genre => {
        const booksByGenre = booksArray.filter(book => book.genre === genre);

        if (booksByGenre.length > 0) {
            const genreBooksContainer = document.createElement('div');
            genreBooksContainer.classList.add('genre');

            const genreTitle = document.createElement('h2');
            genreTitle.textContent = genre;
            genreBooksContainer.appendChild(genreTitle);

            const bookList = document.createElement('div');
            bookList.classList.add('book-list');

            booksByGenre.forEach(book => {
                const bookItem = document.createElement('div');
                bookItem.classList.add('book-item');

                const bookInfo = document.createElement('p');
                bookInfo.textContent = `${book.title} - Rating: ${book.rating}`;
                bookItem.appendChild(bookInfo);

                const addToLibraryBtn = document.createElement('button');
                addToLibraryBtn.textContent = 'Add to Library';
                addToLibraryBtn.classList.add('add-to-library');
                addToLibraryBtn.addEventListener('click', () => addToLibrary(book));
                bookItem.appendChild(addToLibraryBtn);

                bookList.appendChild(bookItem);
            });

            genreBooksContainer.appendChild(bookList);
            mainContainer.appendChild(genreBooksContainer);
        }
    });
};

// Function to filter books based on search query
const filterBooks = (query) => {
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.genre.toLowerCase().includes(query.toLowerCase())
    );
    return filteredBooks;
};

export { books, addBook, renderBooks, filterBooks };
