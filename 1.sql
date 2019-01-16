DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("coffee", "Starbucks", 10.98, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)

INSERT INTO products (product_name, department_name, price, stock_quantity)

INSERT INTO products (product_name, department_name, price, stock_quantity)
INSERT INTO products (product_name, department_name, price, stock_quantity)

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dunkin' Donuts Original Blend Medium Roast Ground Coffee", "Dunkin' Donuts", 6.87, 32)



SELECT * FROM bamazonDB;