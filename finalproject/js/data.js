const books = [
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

export { books };
