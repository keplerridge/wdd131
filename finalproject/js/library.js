// library.js

import { books, renderBooks } from './js/data.js';

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-bar');

    // Event listener for search input
    searchInput.addEventListener('input', (event) => {
        const query = event.target.value.trim();
        if (query.length === 0) {
            renderBooks(books, 'library-books'); // Show all books if search query is empty
        } else {
            const filteredBooks = filterBooks(query);
            renderBooks(filteredBooks, 'library-books'); // Filter books based on search query
        }
    });

    // Initial rendering of books when the page loads
    renderBooks(books, 'library-books');
});
