DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);


INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("UF Blue Game Jersey", "Jersey", 100.00, 100);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("UF Orange Game Jersey", "Jersey", 100.00, 100);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("UF Coaches Polo", "Shirts", 59.99, 100);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Florida Fitted Wool Cap Blue", "Hats", 22.50, 100);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Florida Jumpman Cap Orange", "Hats", 32.00, 100);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("UF Crewneck Sweatshirt", "Sweatshirts", 34.00, 100);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("UF 20 oz. Pub Glass", "Home Decor", 9.95, 100);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("UF Mini Pennant Magnet", "Home Decor", 4.95, 100);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("UF Otterbox Black Commuter case", "School Accessories", 69.95, 100);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("UF Diploma Frame", "Diploma Frames", 165.00, 100);

