DROP TABLE IF EXISTS longlist;

CREATE TABLE longlist (
  isbn TEXT PRIMARY KEY,
  title TEXT,
  author TEXT,
  publisher TEXT,
  published DATE,
  year INTEGER,
  votes INTEGER,
  rating NUMERIC(3, 2),
  format TEXT,
  pages INTEGER
);

\copy longlist (isbn, title, author, publisher, published, year, votes, rating, format, pages) FROM '/docs/csv_files/longlist.csv' WITH (FORMAT csv, HEADER true);

SELECT title, author, year, rating
FROM longlist
ORDER BY rating DESC
LIMIT 5;
