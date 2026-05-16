DROP TABLE IF EXISTS longlist;

CREATE TABLE longlist (
  isbn TEXT PRIMARY KEY,
  title TEXT,
  author TEXT,
  publisher TEXT,
  published TEXT,
  year INTEGER,
  votes INTEGER,
  rating REAL,
  format TEXT,
  pages INTEGER
);

.mode csv
.import --skip 1 /docs/csv_files/longlist.csv longlist
.headers on
.mode column

SELECT title, author, year, rating
FROM longlist
ORDER BY rating DESC
LIMIT 5;
