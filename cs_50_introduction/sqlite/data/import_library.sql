PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS translated;
DROP TABLE IF EXISTS authored;
DROP TABLE IF EXISTS ratings;
DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS translators;
DROP TABLE IF EXISTS authors;
DROP TABLE IF EXISTS publishers;

CREATE TABLE publishers (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE authors (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE translators (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE books (
  id INTEGER PRIMARY KEY,
  isbn TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  publisher_id INTEGER,
  FOREIGN KEY (publisher_id) REFERENCES publishers(id)
);

CREATE TABLE ratings (
  book_id INTEGER PRIMARY KEY,
  rating REAL NOT NULL CHECK (rating >= 0 AND rating <= 5),
  FOREIGN KEY (book_id) REFERENCES books(id)
);

CREATE TABLE authored (
  author_id INTEGER NOT NULL,
  book_id INTEGER NOT NULL,
  PRIMARY KEY (author_id, book_id),
  FOREIGN KEY (author_id) REFERENCES authors(id),
  FOREIGN KEY (book_id) REFERENCES books(id)
);

CREATE TABLE translated (
  translator_id INTEGER NOT NULL,
  book_id INTEGER NOT NULL,
  PRIMARY KEY (translator_id, book_id),
  FOREIGN KEY (translator_id) REFERENCES translators(id),
  FOREIGN KEY (book_id) REFERENCES books(id)
);

.mode csv
.import --skip 1 /docs/csv_files/publishers.csv publishers
.import --skip 1 /docs/csv_files/authors.csv authors
.import --skip 1 /docs/csv_files/translators.csv translators
.import --skip 1 /docs/csv_files/books.csv books
.import --skip 1 /docs/csv_files/ratings.csv ratings
.import --skip 1 /docs/csv_files/authored.csv authored
.import --skip 1 /docs/csv_files/translated.csv translated
.headers on
.mode column

SELECT b.title, a.name AS author, r.rating
FROM books AS b
JOIN authored AS au ON au.book_id = b.id
JOIN authors AS a ON a.id = au.author_id
LEFT JOIN ratings AS r ON r.book_id = b.id
ORDER BY r.rating DESC, b.title;
