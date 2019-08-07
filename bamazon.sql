CREATE DATABASE bamazon;
USE bamazon;

DROP TABLE IF EXISTS products;

CREATE TABLE products (PRIMARY KEY(itemID), itemID INTEGER(5) AUTO_INCREMENT NOT NULL, product_name VARCHAR(50), department_name VARCHAR(100), item_cost FLOAT(10),stock_quantity INTEGER(5));

INSERT INTO products (product_name, department_name, item_cost, stock_quantity)
VALUES ('Zig-Zag Rolling Papers', 'Smoking Accessories', 3.99, 200);

INSERT INTO products (product_name, department_name, item_cost, stock_quantity)
VALUES ('Anchorman, DVD', 'Entertainment', 19.99, 50);

INSERT INTO products (product_name, department_name, item_cost, stock_quantity)
VALUES ('Call of Duty Black Ops IIII, Xbox One', 'Entertainment', 84.99, 17);

INSERT INTO products (product_name, department_name, item_cost, stock_quantity)
VALUES ('Jameson Irish Whiskey', 'Alcoholic Beverages', 34.99, 40);

INSERT INTO products (product_name, department_name, item_cost, stock_quantity)
VALUES ('Book Of Mormon', 'Books/Fiction', 14.99, 30);

INSERT INTO products (product_name, department_name, item_cost, stock_quantity)
VALUES ('5.5 lb Frozen Stir Friy Vegetables', 'Grocery & Gourmet Food', 19.95, 120);

INSERT INTO products (product_name, department_name, item_cost, stock_quantity)
VALUES ('Pre Cooked Bacon, 3 lb', 'Grocery & Gourmet Food', 16.95, 150);

INSERT INTO products (product_name, department_name, item_cost, stock_quantity)
VALUES ('Phase 10 Twist, Limeited Edition', 'Toys and Games', 39.95, 90);

INSERT INTO products (product_name, department_name, item_cost, stock_quantity)
VALUES ('Full Send Beer Pong Set', 'Toys and Games', 186.32, 60);

INSERT INTO products (product_name, department_name, item_cost, stock_quantity)
VALUES ('KRK V8 Studio Monitors', 'Entertainment' , 432.97, 18);

select * from products ; 