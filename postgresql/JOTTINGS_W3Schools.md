# Learn SQL
SQL is a standard language for storing, manipulating and retrieving data in databases.

Our SQL tutorial will teach you how to use SQL in: MySQL, SQL Server, MS Access, Oracle, PostgreSQL, and other database systems.

--- 

## Introduction to SQL

---

### What is SQL?
SQL is a standard language for accessing and manipulating databases.

+ SQL stands for Structured Query Language
+ SQL lets you access and manipulate databases
+ SQL became a standard of the American National Standards Institute (ANSI) in 1986, and of the International Organization for Standardization (ISO) in 1987

---

### What Can SQL do?
+ SQL can execute queries against a database
+ SQL can retrieve data from a database
+ SQL can insert records in a database
+ SQL can update records in a database
+ SQL can delete records from a database
+ SQL can create new databases
+ SQL can create new tables in a database
+ SQL can create stored procedures in a database
+ SQL can create views in a database
+ SQL can set permissions on tables, procedures, and views

---

### SQL is a Standard - BUT....
Although SQL is an ANSI/ISO standard, there are different versions of the SQL language.

However, to be compliant with the ANSI standard, they all support at least the major commands (such as `SELECT`, `UPDATE`, `DELETE`, `INSERT`, `WHERE`) in a similar manner.

Note: Most of the SQL database programs also have their own proprietary extensions in addition to the SQL standard!

### Using SQL in Your Web Site
To build a web site that shows data from a database, you will need:

An RDBMS database program (i.e. MS Access, SQL Server, MySQL)
To use a server-side scripting language, like PHP or ASP
To use SQL to get the data you want
To use HTML / CSS to style the page


## RDBMS
RDBMS stands for Relational Database Management System.

RDBMS is the basis for SQL, and for all modern database systems such as MS SQL Server, IBM DB2, Oracle, MySQL, and Microsoft Access.

The data in RDBMS is stored in database objects called tables. A table is a collection of related data entries and it consists of columns and rows.

Look at the "Customers" table:

Example:

```sql

1. Select data: `SELECT * FROM Customers`;
2. Select multiple columns: `SELECT CustomerName, City FROM Customers`;
3. DISTINCT: Return only distinct (unique) values - `SELECT DISTINCT Country FROM Customers`;
4. WHERE: Filter records - `SELECT * FROM Customers WHERE Country = 'Mexico'`;
5. ORDER (DESC | ASC): Sort the result-set in ascending or descending order - `SELECT * FROM Products ORDER BY Price DESC`;
6. AND: Filter records based on more than one condition - `SELECT * FROM Customers WHERE Country = 'Spain' AND CustomerName LIKE 'G%'` and `SELECT * FROM Customers WHERE Country = 'Brazil' AND City = 'Rio de Janeiro' AND CustomerID > 50;`;
7. OR: Filter records if *any* of the conditions are ture - `SELECT * FROM Customers WHERE Country = 'Germany' OR Country = 'Spain';`;
8. NOT: Filter records that do not match the The NOT operator is used in the WHERE clause to return all records that DO NOT match the specified criteria. It reverses the result of a condition from true to false and vice-versa. - `SELECT * FROM Customers WHERE NOT Country = 'Spain';`;


SELECT * FROM Customers WHERE Country = 'Spain' AND (CustomerName LIKE 'G%' OR CustomerName LIKE 'R%');


```

The columns in the "Customers" table consist of CustomerID, CustomerName, ContactName, Address, City, PostalCode and Country. A column is a vertical entity in a table.

A record, also called a row, is each individual entry that exists in a table. For example, there are 91 records in the above Customers table. A record is a horizontal entity in a table.

**Note:** The `WHERE` clause is not only used in `SELECT` statements, it is also used in `UPDATE`, DELETE, etc.




