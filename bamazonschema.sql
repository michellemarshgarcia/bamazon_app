DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
 	id INT NOT NULL AUTO_INCREMENT,
 	ProductName VARCHAR(100) NOT NULL,
 	DepartmentName VARCHAR(100) NOT NULL,
	Price DECIMAL(10,2) default 0,
 	Quantity INT default 0,
 	PRIMARY KEY(id)
 );

INSERT INTO products(ProductName, DepartmentName, Price, Quantity) VALUES ('Blue Dress', 'Clothing', 199.99, 1);
INSERT INTO products(ProductName, DepartmentName, Price, Quantity) VALUES ('The Parable of the Sower', 'Books', 15.99, 4);
INSERT INTO products(ProductName, DepartmentName, Price, Quantity) VALUES ('Blender', 'Household', 99, 2);
INSERT INTO products(ProductName, DepartmentName, Price, Quantity) VALUES ('Black Heels', 'Shoes', 99.99, 2);

CREATE TABLE departments (
	DepartmentId INT NOT NULL AUTO_INCREMENT,	
	DepartmentName VARCHAR(100) NOT NULL,
	OverheadCost DECIMAL(10,2) NOT NULL,
	TotalSales DECIMAL(10,2),	
	PRIMARY KEY(DepartmentId)
);

INSERT INTO departments(DepartmentName, OverheadCost) VALUES('Clothing', 100);
INSERT INTO departments(DepartmentName, OverheadCost) VALUES('Books', 100);
INSERT INTO departments(DepartmentName, OverheadCost) VALUES('Household', 100);
INSERT INTO departments(DepartmentName, OverheadCost) VALUES('Shoes', 100);