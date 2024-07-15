// scripts.js

import { books, addToLibrary, renderBooks, filterBooks, getStoredBooks, removeFromLibrary } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.getElementById('all-books');
    const libraryContainer = document.getElementById('library-books');
    const searchInput = document.getElementById('search-bar');
    const addBookForm = document.getElementById('add-book-form');

    // Event listener for search input on main page
    searchInput.addEventListener('input', (event) => {
        const query = event.target.value.trim();
        if (query.length === 0) {
            renderBooks(books, 'all-books', false); // Show all books if search query is empty
        } else {
            const filteredBooks = filterBooks(query);
            renderBooks(filteredBooks, 'all-books', false); // Filter books based on search query
        }
    });

    // Event listener for add book form submission
    addBookForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const title = document.getElementById('book-title').value;
        const genre = document.getElementById('book-genre').value;
        const rating = parseFloat(document.getElementById('book-rating').value);

        // Validate rating (optional)
        if (isNaN(rating) || rating < 0 || rating > 5) {
            alert('Please enter a valid rating between 0 and 5.');
            return;
        }

        // Add the new book to the books array
        addToLibrary({ title, genre, rating });

        // Re-render the books list on the main page
        renderBooks(books, 'all-books', false);

        // Clear form fields
        addBookForm.reset();
    });

    // Initial rendering of books on the main page when the page loads
    renderBooks(books, 'all-books', false);

    // Event listener for search input on library page
    if (libraryContainer) {
        const librarySearchInput = document.getElementById('library-search-bar');

        librarySearchInput.addEventListener('input', (event) => {
            const query = event.target.value.trim();
            if (query.length === 0) {
                renderBooks(getStoredBooks(), 'library-books', true); // Show all stored books if search query is empty
            } else {
                // Implement your filter logic here if needed
                // Example: const filteredBooks = getStoredBooks().filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
                renderBooks(getStoredBooks(), 'library-books', true); // Render stored books (filtered if necessary)
            }
        });

        // Initial rendering of books on the library page when the page loads
        renderBooks(getStoredBooks(), 'library-books', true);
    }
});
