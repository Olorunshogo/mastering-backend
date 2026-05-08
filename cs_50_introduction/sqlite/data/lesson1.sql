DROP TABLE IF EXISTS enrollments;
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS students;

CREATE TABLE students (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  age INTEGER NOT NULL,
  city TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE courses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  department TEXT NOT NULL
);

CREATE TABLE enrollments (
  student_id INTEGER NOT NULL,
  course_id INTEGER NOT NULL,
  grade TEXT,
  PRIMARY KEY (student_id, course_id),
  FOREIGN KEY (student_id) REFERENCES students(id),
  FOREIGN KEY (course_id) REFERENCES courses(id)
);

INSERT INTO students (first_name, last_name, age, city)
VALUES
  ('Ada', 'Lovelace', 20, 'London'),
  ('Grace', 'Hopper', 22, 'New York'),
  ('Katherine', 'Johnson', 21, 'White Sulphur Springs'),
  ('Alan', 'Turing', 23, 'Manchester');

INSERT INTO courses (title, department)
VALUES
  ('Introduction to SQL', 'Computer Science'),
  ('Data Modeling', 'Computer Science'),
  ('Statistics Basics', 'Mathematics');

INSERT INTO enrollments (student_id, course_id, grade)
VALUES
  (1, 1, 'A'),
  (1, 2, 'A'),
  (2, 1, 'A'),
  (3, 3, 'B'),
  (4, 1, 'A');

.headers on
.mode column

SELECT s.first_name, s.last_name, c.title, e.grade
FROM students AS s
JOIN enrollments AS e ON e.student_id = s.id
JOIN courses AS c ON c.id = e.course_id
ORDER BY s.last_name, c.title;
