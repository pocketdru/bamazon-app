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
    runSearch();
});

function runSearch(){
    connection.query("SELECT id, product_name, department_name, price, stock_quantity FROM products;", function (err, res) {
        if (err) throw error;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].price + " | " + "Stock quantity: " + res[i].stock_quantity + "." );
        }
        inquirer.prompt([{
            name: "action1",
            type: "input",
            message: "\nWhat the ID of the product you would like to buy?\n\n",
        },
        {
            name: "action2",
            type: "input",
            message: "\nHow many units of the product you would like to buy?\n\n"
        }
    ]).then(asnwer => {
        connection.query("SELECT id, product_name, price, stock_quantity FROM products WHERE ?", {
        id: asnwer.action1
        }, (err, res) => {
            if (err) throw err;

            if (asnwer.action2 > res[0].stock_quantity) {
                console.log("Insufficient quantity!");
                return;
            }
            console.log("__________________________\n");
            console.log("Your order: " + res[0].product_name + " x " + asnwer.action2 + ".\n");
            res[0].stock_quantity -= asnwer.action2;
            console.log("Updated stock quantity: " + res[0].stock_quantity + ".\n");
            console.log("__________________________");


        })
        connection.end();

    });
    });
}

