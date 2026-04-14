
1. Version: `psql --version`
2. Connect to PostgreSQL: `sudo -u postgres psql`
3. Quit PostgreSQL: `\q`
4. Check if PostgreSQL is running: `sudo systemctl status postgresql`
5. Start PostgreSQL: `sudo systemctl start postgresql`


<!-- Create Table -->
CREATE TABLE Customers (
    CustomerID INTEGER PRIMARY KEY,
    CustomerName TEXT,
    ContactName TEXT,
    Address TEXT,
    City TEXT,
    PostalCode TEXT,
    Country TEXT
);

<!-- Copy Customers From CSV File -->
COPY customers(customerid, customername, contactname, address, city, postalcode, country)
FROM '/home/olorunshogo/Projects/mastering-backend/postgresql/customers.csv'
DELIMITER ','
CSV HEADER;


<!-- Products Table -->
CREATE TABLE products (
    productid INT PRIMARY KEY,
    productname VARCHAR(255),
    supplierid INT,
    categoryid INT,
    unit VARCHAR(100),
    price DECIMAL(10,2)
);

<!-- Import CSV -->
\copy products(productid, productname, supplierid, categoryid, unit, price)
FROM '/home/olorunshogo/Projects/mastering-backend/postgresql/products.csv'
DELIMITER ','
CSV HEADER;