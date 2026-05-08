DROP TABLE IF EXISTS longlist;

CREATE TABLE longlist (
  isbn VARCHAR(20) PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(120),
  publisher VARCHAR(160),
  published DATE,
  year INT,
  votes INT,
  rating DECIMAL(3, 2),
  format VARCHAR(40),
  pages INT
);

LOAD DATA LOCAL INFILE '/docs/longlist.csv'
INTO TABLE longlist
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(isbn, title, author, publisher, published, year, votes, rating, format, pages);

SELECT title, author, year, rating
FROM longlist
ORDER BY rating DESC
LIMIT 5;
