import { books, addBookToMainList, addToLibrary, renderBooks, filterBooks, getStoredBooks, removeFromLibrary } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.getElementById('all-books');
    const searchInput = document.getElementById('search-bar');
    const addBookForm = document.getElementById('add-book-form');

    // Retrieve stored books or use initial books
    let storedBooks = JSON.parse(localStorage.getItem('mainBooks')) || books;

    // Update the global books variable to reflect the stored books
    books.splice(0, books.length, ...storedBooks);

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

        // Validate rating input (between 0 and 5, optional)
        if (isNaN(rating) || rating < 0 || rating > 5) {
            alert('Please enter a valid rating between 0 and 5.');
            return;
        }

        // Add the new book to the main books array
        addBookToMainList({ title, genre, rating });

        // Re-render the books list on the main page
        renderBooks(books, 'all-books', false);

        // Clear form fields
        addBookForm.reset();
    });

    // Initial rendering of books on the main page when the page loads
    renderBooks(books, 'all-books', false);
});
