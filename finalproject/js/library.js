// library.js

// Import necessary functions and variables
import { renderBooks, getStoredBooks, removeFromLibrary } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-bar');

    // Function to get stored books from localStorage
    const getStoredBooks = () => {
        return JSON.parse(localStorage.getItem('userLibrary')) || [];
    };

    // Event listener for search input
    searchInput.addEventListener('input', (event) => {
        const query = event.target.value.trim();
        if (query.length === 0) {
            renderBooks(getStoredBooks(), 'library-books'); // Show all stored books if search query is empty
        } else {
            // Implement your filter logic here if needed
            // Example: const filteredBooks = getStoredBooks().filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
            renderBooks(getStoredBooks(), 'library-books'); // Render stored books (filtered if necessary)
        }
    });

    // Function to render books with remove button
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

                    const removeFromLibraryBtn = document.createElement('button');
                    removeFromLibraryBtn.textContent = 'Remove from Library';
                    removeFromLibraryBtn.classList.add('remove-from-library');
                    removeFromLibraryBtn.addEventListener('click', () => removeFromLibrary(book));
                    bookItem.appendChild(removeFromLibraryBtn);

                    bookList.appendChild(bookItem);
                });

                genreBooksContainer.appendChild(bookList);
                mainContainer.appendChild(genreBooksContainer);
            }
        });
    };

    // Initial rendering of books when the page loads
    renderBooks(getStoredBooks(), 'library-books');
});
