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
VALUES ("Coffee", "Starbucks", 10.98, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pasta Sauce", "Prego", 4.58, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Original Ranch", "Hidden Valley", 5.47, 16);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Oreo Cookies", "Oreo", 3.56, 18);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Root Beer", "A&W", 5.98, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dunkin' Donuts Medium Roast Ground Coffee", "Dunkin' Donuts", 6.87, 32)

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chocolate Candy", "Hershey's", 11.83, 44);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chewing Gum", "Simply Gum", 2.83, 28);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cereal", "Cheerios", 7.36, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Peanut Butter", "Skippy", 5.18, 13);



SELECT * FROM bamazonDB;