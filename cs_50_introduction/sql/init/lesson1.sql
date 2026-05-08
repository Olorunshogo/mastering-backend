DROP TABLE IF EXISTS enrollments;
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS students;

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  age INT NOT NULL,
  city VARCHAR(80) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE courses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  department VARCHAR(50) NOT NULL
);

CREATE TABLE enrollments (
  student_id INT NOT NULL,
  course_id INT NOT NULL,
  grade VARCHAR(2),
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

SELECT s.first_name, s.last_name, c.title, e.grade
FROM students AS s
JOIN enrollments AS e ON e.student_id = s.id
JOIN courses AS c ON c.id = e.course_id
ORDER BY s.last_name, c.title;
