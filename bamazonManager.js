var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "yourRootPassword",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  start();
});

function start() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "Would you like to add more UF products?",
      choices: [
        "View UF products for sale",
        "View Low Inventory",
        "Add to Inventory",
        "Add New Product"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
          case "View UF products for sale":
          listProducts();
          break;

          case "View Low Inventory":
          lowInventory();
          break;

          case "Add to Inventory":
          addInventory();
          break;

          case "Add New Product":
          newProduct();
          break;
      }
    });
}

function listProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    for (i = 0; res.length > i; i++) {
      console.log(
        "\nProduct ID: " +
          res[i].id +
          "\nDepartment: " +
          res[i].department_name +
          "\nPrice: " +
          res[i].price +
          "\nQuantity: " +
          res[i].quantity +
          "\n"
      );
    }
    start();
  });
}

function lowInventory() {
  connection.query("SELECT * FROM products WHERE quantity < '5'", function(err,res) {
    if (err) throw err;
    for (i = 0; res.length > i; i++) {
      console.log(
        "\nProduct ID: " +
          res[i].id +
          "\nDepartment: " +
          res[i].department_name +
          "\nPrice: " +
          res[i].price +
          "\nInventory: " +
          res[i].quantity +
          "\n"
      );
    }
    start();
  });
}

function addInventory() {
    inquirer
        .prompt([{
            type: "input",
            message: "What product UF ID?",
            name: "id"
        }, {
            type: "input",
            message: "Add how UF many units?",
            name: "add"
        }])
        .then(function (answer) {
            connection.query("UPDATE products SET ? WHERE ?", function (err, res) {
                [
                    {
                        quantity: answer.add
                    },
                    {
                        id: answer.id
                    }
                ],
                    function (err, res) {
                    }
            });
            console.log("Inventory Updated\n");
            console.log("===========================================\n");
        });
  
};


function newProduct() {
    console.log("Adding a new product...\n");
    inquirer
        .prompt([{
            type: "input",
            message: "What UF product name?",
            name: "name"
        }, {
            type: "input",
            message: "What UF product department?",
            name: "dept"
        }, {
            type: "input",
            message: "What sale price?",
            name: "price"
        }, {
            type: "input",
            message: "How many inventory units?",
            name: "quantity"
        }])
        .then(function (answer) {
            var query = connection.query("INSERT INTO products SET ?", {
                product_name: answer.name,
                department_name: answer.department,
                price: answer.price,
                quantity: answer.quantity
            },
                function (err, res) {
                    console.log(answer.name + " inserted!\n");
                });
        });
    
};
