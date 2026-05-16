# SQL Commands

Import the full library schema and CSV seed data:

```bash
docker compose exec -T sqlite sqlite3 /workspace/practice.db < sqlite/data/import_library.sql
```

Confirm Schema with this:

```bash
PRAGMA table_info(longlist);

.schema longlist
```

Check the amount of tables with this:

```bash
.tables
```

## SQL Basic Commands

1. Select everything from the table:

```bash
SELECT * FROM "longlist";
```

2. Select multiple columns from the table:

```bash
SELECT "title", "author" FROM "longlist";
```

3. LIMIT the number of rows I get back from my query.

```bash
SELECT "title" FROM "longlist" LIMIT 10;
```

4. WHERE allows me to get back not all rows but only some rows WHERE some condition is true.

```bash
SELECT "title", "author" FROM "longlist" WHERE "year" = 2017;

SELECT DISTINCT "year" FROM "longlist" ORDER BY "year";
```

5. != / <> / NOT queries that do not follow a particular condition

```bash
SELECT "title", "format" FROM "longlist" WHERE "format" != / <> / 'hardcover';

SELECT "title" FROM "longlist" WHERE NOT "format" = 'hardcover';
```

6. This condition should come first and another condition should come afterwards.

```bash
SELECT "title", "author" FROM "longlist" WHERE "year" = 2022 OR "year" = 2018;

SELECT "title", "format" FROM "longlist" WHERE ("year" = 2017 OR "year" = 2018) AND "format" != 'hardcover';
```

7. NULL: Getting an empty query.

```bash
SELECT "title", "translator" FROM "longlist" WHERE "translator" IS NOT NULL;

SELECT "title", "translator" FROM "longlist" WHERE "translator" IS NULL;
```

8. LIKE is a keyword to use when i want to roughly match some strings in my database ans it becomes powerful when you combine it with other operators.
% - match any character around a string I give it.
_ can match any single character that I pass in with my string.

```bash
SELECT "title" FROM "longlist" WHERE "title" LIKE '%love%';
SELECT "title" FROM "longlist" WHERE "title" LIKE 'The%';
SELECT "title", "year" FROM "longlist" WHERE "year" = 2015 OR "year" = 2016 OR "year" = 2017 OR "year" = 2018;
```

9.

```bash
SELECT * FROM "longlist" WHERE "year" > 2012;
SELECT * FROM "longlist" WHERE "year" < 2018;
SELECT "title", "year" FROM "longlist" WHERE "year" >= 2010 AND "year" <= 2022;
SElECT "title", "rating" FROM "longlist" WHERE "rating" > 4.0;
```

10. BETWEEN ... AND ...

```bash
SELECT "title", "year" FROM "longlist" WHERE "year" BETWEEN 2012 AND 2017;

SELECT "title", "rating", "votes" FROM "longlist" WHERE "rating" > 4.0 AND "votes" > 1000;
```
11. ORDER BY (ASC / DESC): allows us to take the results of our query and order them as it suggests by the column itself. In the end, we get an arranged columns or rows as the case may be.


```bash
SELECT "title", "rating" FROM "longlist" ORDER BY "rating" LIMIT 10;
SELECT "title", "rating" FROM "longlist" ORDER BY "rating" DESC LIMIT 10;
SELECT "title", "rating" FROM "longlist" ORDER BY "rating" DESC, "votes" DESC LIMIT 10;

SELECT "title" FROM "longlist" ORDER BY "title";
```

12. SQL Aggregate functions
These allow us to take a whole set of rows and return one number based on the values in those rows.

```bash
SELECT AVG("rating") FROM "longlist";
SELECT AVG("votes") FROM "longlist";

SELECT ROUND(AVG("rating"), 2) FROM "longlist";
SELECT MAX("rating") FROM "longlist";
SELECT MIN("rating") FROM "longlist";
SELECT SUM("votes") FROM "longlist";

SELECT COUNT(*) FROM "longlist";
SELECT COUNT("publisher") FROM "longlist";
```

13. DISTINCT - find unique value from our column

```bash
SELECT DiSTINCT "publisher" FROM "longlist";
SELECT COUNT(DISTINCT "publisher") FROM "longlist";
```

You can quit the sqlite termina with:
```bash
.quit
```

### Subqueries

1.

```bash
SELECT "id" FROM "publishers" WHERE "name" = 'Norton';
SELECT "title" FROM "books" WHERE "publisher_id" = 5;

SELECT "title" FROM "books"
WHERE "publisher_id" = (
  SELECT "id" FROM "publishers"
  WHERE "name" = 'Norton'
);
```

```bash
SELECT "id" FROM "books" WHERE "title" = 1984;
SELECT "rating" FROM "ratings" WHERE "book_id" = 5;

SELECT "id" FROM "ratings" WHERE "book_id" = (
  SELECT "id" FROM "books" WHERE "title" = 1884
);

SELECT AVG("rating") FROM "ratings" WHERE "book_id" = (
  SELECT "id" FROM "books" WHERE "title" = 1984
);

SElecT "name" FROM "authors" WHERE "id" = (
  SELECT "author_id" FROM "authored" WHERE "book_id" = (
    SELECT "id" FROM "books" WHERE "title" = 1984
  )
);


```




