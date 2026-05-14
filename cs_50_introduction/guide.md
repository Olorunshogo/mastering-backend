# CS50 SQL Docker Practice Guide

This folder gives you 3 isolated practice environments you can use from Docker:

- `sql` -> MySQL (`mysql` client)
- `sqlite` -> SQLite (`sqlite3` client)
- `postgres` -> PostgreSQL (`psql` client)

All commands below assume you are inside:

```bash
cd cs_50_introduction
```

## 1. Start and Stop Everything

Start all containers:

```bash
docker compose up -d --wait
```

Start only one environment:

```bash
docker compose up -d --wait sql
docker compose up -d --wait postgres
docker compose up -d --wait sqlite
```

The Make shortcuts are:

```bash
make up-mysql
make up-postgres
make up-sqlite
```

Check status:

```bash
docker compose ps
```

Stop containers:

```bash
docker compose down
```

Stop and remove DB volumes (full reset):

```bash
docker compose down -v
```

## 2. Quick Access Commands

You can use either raw Docker commands or `make` shortcuts.

### Using Make (recommended)

```bash
make help
make up
make ps
make mysql
make postgres
make sqlite
```

Run the starter lesson data:

```bash
make run-mysql
make run-postgres
make run-sqlite
```

Reset the starter lesson data:

```bash
make reset-mysql
make reset-postgres
make reset-sqlite
```

Import the longlist CSV:

```bash
make import-longlist-mysql
make import-longlist-postgres
make import-longlist-sqlite
```

### Using Docker directly

MySQL shell:

```bash
docker compose exec sql mysql -h127.0.0.1 -ustudent -pstudent practice_db
```

Postgres shell:

```bash
docker compose exec postgres psql -U student -d practice_db
```

SQLite shell:

```bash
docker compose exec sqlite sqlite3 /workspace/practice.db
```

## 3. MySQL (`sql` service)

### Create a new database

```sql
CREATE DATABASE school;
SHOW DATABASES;
USE school;
```

### Create a table

```sql
CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  age INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Insert and query data

```sql
INSERT INTO students (first_name, last_name, age)
VALUES ('Ada', 'Lovelace', 20), ('Grace', 'Hopper', 22);

SELECT * FROM students;
SELECT first_name, age FROM students WHERE age > 20;
```

### Useful MySQL commands

```sql
SHOW TABLES;
DESCRIBE students;
DROP TABLE students;
DROP DATABASE school;
EXIT;
```

## 4. PostgreSQL (`postgres` service)

### Create a new database

Inside `psql`:

```sql
CREATE DATABASE school;
```

Then connect to it:

```sql
\c school
```

### Create a table

```sql
CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  age INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Insert and query data

```sql
INSERT INTO students (first_name, last_name, age)
VALUES ('Ada', 'Lovelace', 20), ('Grace', 'Hopper', 22);

SELECT * FROM students;
SELECT first_name, age FROM students WHERE age > 20;
```

### Useful PostgreSQL commands

```sql
\l
\dt
\d students
DROP TABLE students;
DROP DATABASE school;
\q
```

## 5. SQLite (`sqlite` service)

Your sqlite DB file lives at:

- `cs_50_introduction/sqlite/data/practice.db`

Open shell:

```bash
docker compose exec sqlite sqlite3 /workspace/practice.db
```

### Create table

```sql
CREATE TABLE students (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  age INTEGER,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
```

### Insert and query data

```sql
INSERT INTO students (first_name, last_name, age)
VALUES ('Ada', 'Lovelace', 20), ('Grace', 'Hopper', 22);

SELECT * FROM students;
SELECT first_name, age FROM students WHERE age > 20;
```

### Useful SQLite commands

```sql
.tables
.schema students
.headers on
.mode column
DROP TABLE students;
.quit
```

## 6. Run SQL Files (Great for Practice)

You can write `.sql` files and run them repeatedly.

This scaffold already includes starter files:

- `sql/init/lesson1.sql`
- `postgres/init/lesson1.sql`
- `sqlite/data/lesson1.sql`

Each one creates three practice tables:

- `students`
- `courses`
- `enrollments`

Then it inserts sample records and runs a `JOIN` query.

### MySQL

```bash
docker compose exec -T sql mysql -h127.0.0.1 -ustudent -pstudent practice_db < sql/init/lesson1.sql
```

### PostgreSQL

```bash
docker compose exec -T postgres psql -U student -d practice_db < postgres/init/lesson1.sql
```

### SQLite

```bash
docker compose exec -T sqlite sqlite3 /workspace/practice.db < sqlite/data/lesson1.sql
```

The Make shortcuts do the same thing:

```bash
make run-mysql
make run-postgres
make run-sqlite
```

## 7. Practice Queries To Try

After running a starter lesson, open any shell and try these queries.

### List all students

```sql
SELECT * FROM students;
```

### Sort students by age

```sql
SELECT first_name, last_name, age
FROM students
ORDER BY age DESC;
```

### Filter students

```sql
SELECT first_name, last_name, city
FROM students
WHERE age >= 21;
```

### Count students by city

```sql
SELECT city, COUNT(*) AS total_students
FROM students
GROUP BY city
ORDER BY total_students DESC;
```

### Join students to courses

```sql
SELECT s.first_name, s.last_name, c.title, e.grade
FROM students AS s
JOIN enrollments AS e ON e.student_id = s.id
JOIN courses AS c ON c.id = e.course_id
ORDER BY s.last_name, c.title;
```

### Update a record

```sql
UPDATE students
SET age = 24
WHERE first_name = 'Alan' AND last_name = 'Turing';
```

### Delete a record

```sql
DELETE FROM enrollments
WHERE student_id = 4 AND course_id = 1;
```

## 8. Import `docs/longlist.csv`

The file [docs/longlist.csv](/home/olorunshogo/Projects/mastering-backend/cs_50_introduction/docs/longlist.csv) is mounted inside every container at:

```text
/docs/longlist.csv
```

This means you can keep CSV files in `cs_50_introduction/docs/` and import them from inside MySQL, Postgres, or SQLite.

### Import into MySQL

Start only MySQL:

```bash
make up-mysql
```

Run the import script:

```bash
make import-longlist-mysql
```

Or manually:

```bash
docker compose exec -T sql mysql --local-infile=1 -h127.0.0.1 -ustudent -pstudent practice_db < sql/import_longlist.sql
```

Then open MySQL and query it:

```bash
make mysql
```

```sql
SELECT title, author, rating
FROM longlist
ORDER BY rating DESC
LIMIT 10;
```

### Import into PostgreSQL

Start only Postgres:

```bash
make up-postgres
```

Run the import script:

```bash
make import-longlist-postgres
```

Or manually:

```bash
docker compose exec -T postgres psql -U student -d practice_db < postgres/import_longlist.sql
```

Then open Postgres and query it:

```bash
make postgres
```

```sql
SELECT title, author, rating
FROM longlist
ORDER BY rating DESC
LIMIT 10;
```

### Import into SQLite

Start only SQLite:

```bash
make up-sqlite
```

Run the import script:

```bash
make import-longlist-sqlite
```

Or manually:

```bash
docker compose exec -T sqlite sqlite3 /workspace/practice.db < sqlite/data/import_longlist.sql
```

Then open SQLite and query it:

```bash
make sqlite
```

```sql
SELECT title, author, rating
FROM longlist
ORDER BY rating DESC
LIMIT 10;
```

## 9. Suggested Learning Flow

1. Start with `make up`.
2. Run one starter file, for example `make run-sqlite`.
3. Enter that DB shell, for example `make sqlite`.
4. Practice `SELECT`, `WHERE`, `ORDER BY`, `GROUP BY`, and `JOIN`.
5. Edit the matching `lesson1.sql` file or create `lesson2.sql`.
6. Re-run the file with `make run-sqlite`, `make run-mysql`, or `make run-postgres`.
7. Reset data when needed with `make reset-sqlite`, `make reset-mysql`, or `make reset-postgres`.

## 10. Troubleshooting

If container is not running:

```bash
docker compose ps
docker compose up -d --wait
```

If you want a completely fresh start:

```bash
docker compose down -v
docker compose up -d --wait
```

If port conflicts happen:

- MySQL uses host port `3307`
- PostgreSQL uses host port `5433`

You can change these in `docker-compose.yml`.

## 11. Files In This Folder

- `docker-compose.yml` -> defines all 3 environments
- `Makefile` -> shortcuts for common commands
- `guide.md` -> this guide
- `docs/longlist.csv` -> CSV data file used for import practice
- `sql/init/lesson1.sql` -> starter MySQL practice script
- `sql/import_longlist.sql` -> imports `docs/longlist.csv` into MySQL
- `postgres/init/lesson1.sql` -> starter Postgres practice script
- `postgres/import_longlist.sql` -> imports `docs/longlist.csv` into Postgres
- `sqlite/data/lesson1.sql` -> starter SQLite practice script
- `sqlite/data/import_longlist.sql` -> imports `docs/longlist.csv` into SQLite
- `sqlite/data/practice.db` -> SQLite database file created after you run SQLite commands
