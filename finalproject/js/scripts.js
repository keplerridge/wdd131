// scripts.js (index.html)

import { books, addBook, renderBooks, filterBooks } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.getElementById('all-books');
    const searchInput = document.getElementById('search-bar');
    const addBookForm = document.getElementById('add-book-form');

    // Event listener for search input
    searchInput.addEventListener('input', (event) => {
        const query = event.target.value.trim();
        if (query.length === 0) {
            renderBooks(books, 'all-books'); // Show all books if search query is empty
        } else {
            const filteredBooks = filterBooks(query);
            renderBooks(filteredBooks, 'all-books'); // Filter books based on search query
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
        addBook(title, genre, rating);

        // Clear form fields
        addBookForm.reset();

        // Re-render the books list
        renderBooks(books, 'all-books');
    });

    // Initial rendering of books when the page loads
    renderBooks(books, 'all-books');
});