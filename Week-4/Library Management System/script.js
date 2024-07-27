class Book {
    constructor(title, author, year, genre) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
    }
}

const books = [];
let editIndex = -1;

function addBook() {
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    const year = document.getElementById('bookYear').value;
    const genre = document.getElementById('bookGenre').value;

    if (title && author && year && genre) {
        const book = new Book(title, author, year, genre);
        books.push(book);
        showAllBooks();
        resetForm();
    } else {
        alert("Please fill out all fields.");
    }
}

function resetForm() {
    document.getElementById('bookTitle').value = '';
    document.getElementById('bookAuthor').value = '';
    document.getElementById('bookYear').value = '';
    document.getElementById('bookGenre').value = '';
}

function deleteBook(index) {
    books.splice(index, 1);
    showAllBooks();
}

function editBook(index) {
    editIndex = index;
    const book = books[index];
    document.getElementById('editBookTitle').value = book.title;
    document.getElementById('editBookAuthor').value = book.author;
    document.getElementById('editBookYear').value = book.year;
    document.getElementById('editBookGenre').value = book.genre;
    document.getElementById('editBookForm').style.display = 'block';
    document.getElementById('addBookForm').style.display = 'none';
    document.getElementById('searchBookForm').style.display = 'none';
    document.getElementById('filterBookForm').style.display = 'none';
    document.getElementById('result').style.display = 'none';
}

function updateBook() {
    const title = document.getElementById('editBookTitle').value;
    const author = document.getElementById('editBookAuthor').value;
    const year = document.getElementById('editBookYear').value;
    const genre = document.getElementById('editBookGenre').value;

    if (title && author && year && genre) {
        books[editIndex] = new Book(title, author, year, genre);
        showAllBooks();
        document.getElementById('editBookForm').style.display = 'none';
    } else {
        alert("Please fill out all fields.");
    }
}

function showAllBooks() {
    document.getElementById('addBookForm').style.display = 'none';
    document.getElementById('searchBookForm').style.display = 'none';
    document.getElementById('filterBookForm').style.display = 'none';
    document.getElementById('editBookForm').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    const result = document.getElementById('result');
    if (books.length === 0) {
        result.innerHTML = '<h3>No books found in the library.</h3>';
    } else {
        result.innerHTML = `<h3>All Books</h3>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Year</th>
                        <th>Genre</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${books.map((book, index) => `
                        <tr>
                            <td>${book.title}</td>
                            <td>${book.author}</td>
                            <td>${book.year}</td>
                            <td>${book.genre}</td>
                            <td>
                                <button class="edit-button" onclick="editBook(${index})">Edit</button>
                                <button class="delete-button" onclick="deleteBook(${index})">Delete</button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>`;
    }
}

function searchBooks() {
    document.getElementById('addBookForm').style.display = 'none';
    document.getElementById('searchBookForm').style.display = 'block';
    document.getElementById('filterBookForm').style.display = 'none';
    document.getElementById('editBookForm').style.display = 'none';
    document.getElementById('result').style.display = 'none';
}

function performSearch() {
    const query = document.getElementById('searchQuery').value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query));
    const result = document.getElementById('result');
    if (filteredBooks.length === 0) {
        result.innerHTML = '<h3>No books found matching the search criteria.</h3>';
    } else {
        result.innerHTML = `<h3>Search Results</h3>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Year</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    ${filteredBooks.map((book, index) => `
                        <tr>
                            <td>${book.title}</td>
                            <td>${book.author}</td>
                            <td>${book.year}</td>
                            <td>${book.genre}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>`;
    }
    document.getElementById('searchBookForm').style.display = 'none';
    document.getElementById('result').style.display = 'block';
}

function filterBooks() {
    document.getElementById('addBookForm').style.display = 'none';
    document.getElementById('searchBookForm').style.display = 'none';
    document.getElementById('filterBookForm').style.display = 'block';
    document.getElementById('editBookForm').style.display = 'none';
    document.getElementById('result').style.display = 'none';
}

function performFilter() {
    const title = document.getElementById('filterTitle').value.toLowerCase();
    const author = document.getElementById('filterAuthor').value.toLowerCase();
    const year = document.getElementById('filterYear').value;
    const genre = document.getElementById('filterGenre').value.toLowerCase();

    const filteredBooks = books.filter(book => 
        (title ? book.title.toLowerCase().includes(title) : true) &&
        (author ? book.author.toLowerCase().includes(author) : true) &&
        (year ? book.year == year : true) &&
        (genre ? book.genre.toLowerCase().includes(genre) : true)
    );

    const result = document.getElementById('result');
    if (filteredBooks.length === 0) {
        result.innerHTML = '<h3>No books found matching the filter criteria.</h3>';
    } else {
        result.innerHTML = `<h3>Filter Results</h3>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Year</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    ${filteredBooks.map((book, index) => `
                        <tr>
                            <td>${book.title}</td>
                            <td>${book.author}</td>
                            <td>${book.year}</td>
                            <td>${book.genre}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>`;
    }
    document.getElementById('filterBookForm').style.display = 'none';
    document.getElementById('result').style.display = 'block';
}

function showAddBookForm() {
    document.getElementById('addBookForm').style.display = 'block';
    document.getElementById('searchBookForm').style.display = 'none';
    document.getElementById('filterBookForm').style.display = 'none';
    document.getElementById('editBookForm').style.display = 'none';
    document.getElementById('result').style.display = 'none';
}

