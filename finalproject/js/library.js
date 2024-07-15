document.addEventListener('DOMContentLoaded', () => {
    const renderLibrary = (library) => {
        const libraryBooks = document.getElementById('library-books');
        libraryBooks.innerHTML = '';

        library.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.classList.add('book-item');

            const bookInfo = document.createElement('p');
            bookInfo.textContent = `${book.title} - Rating: ${book.rating}`;
            bookItem.appendChild(bookInfo);

            const removeButton = document.createElement('button');
            removeButton.classList.add('remove-button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => openPopup(book));
            bookItem.appendChild(removeButton);

            libraryBooks.appendChild(bookItem);
        });
    };

    const openPopup = (book) => {
        const popup = document.getElementById('popup');
        const popupContent = document.getElementById('popup-content');
        const confirmButton = document.getElementById('confirm-button');
        const cancelButton = document.getElementById('cancel-button');

        popupContent.innerHTML = `
            <h2>Are you sure you want to remove ${book.title}?</h2>
            <div class="popup-buttons">
                <button id="confirm-button">Confirm</button>
                <button id="cancel-button">Cancel</button>
            </div>
        `;

        confirmButton.addEventListener('click', () => {
            removeBook(book);
            closePopup();
        });

        cancelButton.addEventListener('click', closePopup);

        popup.style.display = 'flex';
    };

    const closePopup = () => {
        const popup = document.getElementById('popup');
        popup.style.display = 'none';
    };

    const removeBook = (book) => {
        let library = JSON.parse(localStorage.getItem('library')) || [];
        library = library.filter(b => b.title !== book.title);
        localStorage.setItem('library', JSON.stringify(library));
        renderLibrary(library);
    };

    const searchBooks = () => {
        const searchTerm = document.getElementById('search-bar').value.toLowerCase();
        let library = JSON.parse(localStorage.getItem('library')) || [];
        library = library.filter(book => book.title.toLowerCase().includes(searchTerm));
        renderLibrary(library);
    };

    document.getElementById('search-bar').addEventListener('input', searchBooks);

    renderLibrary(JSON.parse(localStorage.getItem('library')) || []);
});

