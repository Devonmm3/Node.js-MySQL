CREATE DATABASE Bamazon;
USE Bamazon;
CREATE TABLE Products (ProductID int AUTO_INCREMENT, ProductName varchar(50) NOT NULL, DepartmentName varchar(50) NOT NULL, Price varchar(50) NOT NULL, PRIMARY KEY(ProductID) );
describe Products;
SELECT * FROM Products;
INSERT INTO Products (ProductID, ProductName, DepartmentName, Price, StockQuantity) VALUES (1, "Crockpot", "Home-Kitchenware", 85.89, 202);
INSERT INTO Products (ProductID, ProductName, DepartmentName, Price, StockQuantity) VALUES (2, "Children's Bike", "Toys, Games and sports", 99.99, 74);
INSERT INTO Products (ProductID, ProductName, DepartmentName, Price, StockQuantity) VALUES (3, "Christmas Candle", "Holiday Decorations", 15.49, 444);
INSERT INTO Products (ProductID, ProductName, DepartmentName, Price, StockQuantity) VALUES (4, "Lion's Mane", "Vitamens and Health", 39.99, 376);
INSERT INTO Products (ProductID, ProductName, DepartmentName, Price, StockQuantity) VALUES (5, "Temperpedic Pillow", "Home and Bedroom", 79.39, 2000);
INSERT INTO Products (ProductID, ProductName, DepartmentName, Price, StockQuantity) VALUES (6, "Cards Against Humanity", "Toys, Games and sports", 14.59, 550);
INSERT INTO Products (ProductID, ProductName, DepartmentName, Price, StockQuantity) VALUES (7, "Record Player", "Electronics", 79.99, 47);
INSERT INTO Products (ProductID, ProductName, DepartmentName, Price, StockQuantity) VALUES (8, "Wheelbarrow", "Home and Garden", 45.69, 300);
INSERT INTO Products (ProductID, ProductName, DepartmentName, Price, StockQuantity) VALUES (9, "Ice cream maker", "Home-Kitchenware", 36.77, 430);
INSERT INTO Products (ProductID, ProductName, DepartmentName, Price, StockQuantity) VALUES (10, "Harry Potter and the Half-blood Prince", "Books", 29.99, 98);

SELECT * FROM Products; 

ALTER TABLE Products ADD StockQuantity int(4) NOT NULL default '0';
