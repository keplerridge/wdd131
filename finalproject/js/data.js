// data.js

// Define initial books array with random ratings
let books = JSON.parse(localStorage.getItem('mainBooks')) || [
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

// Function to add a book to the main list
const addBookToMainList = (book) => {
    // Add the book to the main books array
    books.push(book);

    // Update localStorage with the new books array
    localStorage.setItem('mainBooks', JSON.stringify(books));
};

// Function to add a book to the library
const addToLibrary = (book) => {
    // Retrieve existing library from localStorage or initialize an empty array
    let library = JSON.parse(localStorage.getItem('userLibrary')) || [];

    // Check if the book is already in the library based on some unique identifier (e.g., title)
    const existingBook = library.find(item => item.title === book.title);

    if (!existingBook) {
        // If the book is not already in the library, add it
        library.push(book);

        // Update localStorage with the new library array
        localStorage.setItem('userLibrary', JSON.stringify(library));

        // Log a confirmation message
        console.log(`Added "${book.title}" to your library.`);
    } else {
        // Log a message indicating that the book is already in the library
        console.log(`"${book.title}" is already in your library.`);
    }
};

// Function to render books
const renderBooks = (booksArray, containerId, isLibraryPage) => {
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

                const actionBtn = document.createElement('button');
                actionBtn.textContent = isLibraryPage ? 'Remove from Library' : 'Add to Library';
                actionBtn.classList.add(isLibraryPage ? 'remove-from-library' : 'add-to-library');
                actionBtn.addEventListener('click', () => {
                    if (isLibraryPage) {
                        removeFromLibrary(book);
                    } else {
                        addToLibrary(book);
                    }
                    // Re-render books after action
                    renderBooks(isLibraryPage ? getStoredBooks() : books, containerId, isLibraryPage);
                });
                bookItem.appendChild(actionBtn);

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

// Function to get stored books from localStorage
const getStoredBooks = () => {
    return JSON.parse(localStorage.getItem('userLibrary')) || [];
};

// Function to remove a book from the library
const removeFromLibrary = (book) => {
    // Retrieve current library from localStorage
    let library = JSON.parse(localStorage.getItem('userLibrary')) || [];

    // Filter out the book to be removed
    library = library.filter(item => item.title !== book.title);

    // Update localStorage with the updated library array
    localStorage.setItem('userLibrary', JSON.stringify(library));

    // Log a confirmation message
    console.log(`Removed "${book.title}" from your library.`);
};

export { books, renderBooks, filterBooks, addBookToMainList, addToLibrary, getStoredBooks, removeFromLibrary };
