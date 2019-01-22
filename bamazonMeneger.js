var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    runAction();
});

function runAction() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "\n\n What action would you like to make?\n\n",
        choices: [
            'View Products for Sale',
            'View Low Inventory',
            'Add to Inventory',
            'Add New Product'
        ]

    }).then((answer) => {
        switch (answer.action) {
            case "View Products for Sale":
                viewProducts();
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
            case "exit":
                connection.end();
                break;
        }
    })
}

function viewProducts() {
    connection.query("SELECT id, product_name, department_name, price FROM products;", function (err, res) {
        if (err) throw error;
        console.log("\n______________________________________")
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].price + ".");
        }
        console.log("______________________________________")
    });

    runAction();
}

function lowInventory() {
    connection.query("SELECT id, product_name, stock_quantity FROM products;", function (err, res) {
        if (err) throw error;
        console.log("\n\nThese products are in small quantities (less than 5): \n\n");
        for (var i = 0; i < res.length; i++) {
            if (res[i].stock_quantity <= 5) {
                console.log("ID: " + res[i].id + " | " + res[i].product_name + " | " + "Quantity: " + res[i].stock_quantity);
            }
        }
    });
    runAction();
}

function addInventory() {
    connection.query("SELECT id, product_name, stock_quantity FROM products;", function (err, res) {
        console.log("______________________________________\n\n")
        for (var i = 0; i < res.length; i++) {
            console.log("ID: " + res[i].id + " | " + res[i].product_name + " | " + "Stock quantity: " + res[i].stock_quantity + ".");
        }

        inquirer.prompt([{
                name: "action1",
                type: "input",
                message: "\nWhat the id of product would you like to increase in quantity?\n\n",
            },
            {
                name: "action2",
                type: "input",
                message: "How much do you want to add?\n\n"
            }
        ]).then(answer => {
            // res.id = answer.action1;
            var amount = parseInt(answer.action2)
            res[answer.action1 - 1].stock_quantity = amount + res[answer.action1 - 1].stock_quantity;
            console.log("\nUpdated stock quantity: " + res[answer.action1 - 1].stock_quantity + ".\n");

        });
    });
}

function newProduct() {

    inquirer.prompt([{
            name: "name",
            type: "input",
            message: "\nWhat the name of the product you are going to add?"
        },

        {
            name: "department",
            type: "input",
            message: "What department of this product?",
        },

        {
            name: "price",
            type: "input",
            message: "What the price of your product?"
        },

        {
            name: "quantity",
            type: "input",
            message: "How many items would you like to add?\n"
        }
    ]).then(answer => {
        connection.query("INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('" + answer.name + "', '" + answer.department + "', '" + answer.price + "', '" + answer.quantity + "')", {
            product_name: answer.name,
            department_name: answer.department,
            price: parseInt(answer.price),
            stock_quantity: parseInt(answer.quantity)

        }, function (err, res) {
            console.log(answer.name);
        });
    });
}