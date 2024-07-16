import { renderBooks, getStoredBooks, removeFromLibrary } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const libraryContainer = document.getElementById('library-books');
    const librarySearchInput = document.getElementById('library-search-bar');

    // Initial rendering of books on the library page when the page loads
    renderBooks(getStoredBooks(), 'library-books', true);

    // Event listener for search input on library page
    librarySearchInput.addEventListener('input', (event) => {
        const query = event.target.value.trim();
        if (query.length === 0) {
            renderBooks(getStoredBooks(), 'library-books', true); // Show all stored books if search query is empty
        } else {
            const filteredBooks = getStoredBooks().filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
            renderBooks(filteredBooks, 'library-books', true); // Render stored books (filtered if necessary)
        }
    });
});
