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
    connection.query("SELECT id, product_name, department_name, price FROM products;", function (err, res) {
        if (err) throw error;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].price + ".");
        }
        // connection.end();
    });
    runProducts();
}


function runProducts() {
    inquirer.prompt({
            name: "action1",
            type: "input",
            message: "What the ID of the product you would like to buy?\n\n",

        }

        // {
        //     name: "action2",
        //     type: "input",
        //     message: "How many units of the product you would like to buy?\n\n",
        // }
    ).then(asnwer => {
        connection.query("SELECT id, product_name, price FROM products WHERE id=?", {
           id: asnwer.action1
        }, (err, res) => {
            if (err) throw err;
            // console.log(asnwer.action1);
            console.log(res);

        })

    });



}
