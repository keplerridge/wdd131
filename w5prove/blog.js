const articles = [
    {
        id: 1,
        title: "Septimus Heap Book One: Magyk",
        date: "July 5, 2022",
        description:
            "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
        imgAlt: "Book cover for Septimus Heap 1",
        ages: "10-14",
        genre: "Fantasy",
        stars: "****"
    },
    {
        id: 2,
        title: "Magnus Chase Book One: Sword of Summer",
        date: "December 12, 2021",
        description:
            "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
        imgSrc:
            "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
        imgAlt: "Book cover for Magnus Chase 1",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐"
    }
];

document.addEventListener('DOMContentLoaded', generateBooks);

function generateBooks() {
    // get the sections where I want to add elements
    const mainSection = document.getElementsByClassName('main-books')[0];

    // iterate through the array of objects to create and add them to the page
    articles.forEach(article => {
        // create the new elements for the review-info section and main-books area
        const mainBookSection = document.createElement('article');
        mainBookSection.classList.add('book')

        const bookReviewSection = document.createElement('article');
        bookReviewSection.classList.add('reviews');
        
        // grab info from the current book and add it to the main-books section
        const dateElement = document.createElement('p');
        dateElement.textContent = article.date;
        dateElement.classList.add('date');
        bookReviewSection.appendChild(dateElement);

        const ageRange = document.createElement('p');
        ageRange.classList.add('age-range')
        ageRange.textContent = article.ages;
        bookReviewSection.appendChild(ageRange);

        const genre = document.createElement('p');
        genre.classList.add('genre');
        genre.textContent = article.genre;
        bookReviewSection.appendChild(genre);

        const reviewStars = document.createElement('p');
        reviewStars.classList.add('review-stars');
        reviewStars.textContent = article.stars;
        bookReviewSection.appendChild(reviewStars);

        const blankElement = document.createElement('article');
        blankElement.classList.add('blank');
        mainBookSection.appendChild(blankElement);
        
        const titleElement = document.createElement('h2');
        titleElement.textContent = article.title;
        titleElement.classList.add('book-title');
        mainBookSection.appendChild(titleElement);

        const img = document.createElement('img');
        img.setAttribute('src', article.imgSrc);
        img.setAttribute('alt', article.imgAlt);
        img.classList.add('book-cover');
        mainBookSection.appendChild(img);

        const description = document.createElement('p');
        description.classList.add('description');
        description.textContent = article.description;
        mainBookSection.appendChild(description);
        
        mainBookSection.appendChild(bookReviewSection);
        mainSection.appendChild(mainBookSection);
    });
};