var mysql = require("mysql");
var prompt = require("prompt");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "boosk123",
    database: "Bamazon"
});

connection.connect(function (err) {
            if (err) {
                console.log("Error connecting to Db");
                return;
            }
            console.log("Connection Established");

            var sqlFile = {
                properties: {
                    ID: {
                        message: "Enter the product ID of the product you would like to purchase.",
                        pattern: /^[0-9] [0-9]$|^[0-9]$/,
                        required: true
                    },
                    howMany: {
                        message: "Please enter the nuber of items you would like to buy.",
                        pattern: /^[0-9] [0-9]$|^[0-9] [0-9] [0-9]$/,
                        required: true
                    }
                }

            };
            var sqlFile2 = {
                properties: {
                    purchase: {
                        message: "Would you like to purchase another item today?.",
                        pattern: /(no|n|yes|y)/,
                        required: true
                    }
                }
            };

            var endApp = function () {
                return next(err);
            }

            var startApp = function () {
                connection.query("SELECT * FROM Products", function (err, results) {
                    if (err) throw err;
                    return (pullBamazonProducts(results));
                });
            }

            var pullBamazonProducts = function (products) {
                console.log("Hey there! Welcome to Bamazon where you can buy what ever you need to make your wishes come true! Listed we have the products, their costs and the current amount in stock.");
                for (var i = 0; i < products.length; i++) {
                    var resultsProduct = "\r\n" +
                        "ItemID: " + products[i].ItemID + "\r\n" +
                        "Product Description: " + products[i].ProductName + "\r\n" +
                        "Product Department: " + products[i].DepartmentName + "\r\n" +
                        "Price: $ " + products[i].Price + "\r\n" +
                        "Currently in Stock: " + products[i].StockQuantity;
                    console.log(productsResults);
                }

                shopperSelectProID();

            }

            var shopperSelectProID = function () {
                prompt.start();
                console.log("Enter the Item ID for the product you would like to buy.");

                prompt.get(sqlFile, function (err, results) {
                    if (err) {
                        console.log(err)
                    }
                    var shopperIdChoice = parseIn(result.ID);
                    var shopperQuantityChoice = parseInt(result.howMany);

                    var getInventory = function () {
                        connection.query("SELECT * FROM Products WHERE ItemID =" + shopperIdChoice, function (err, result) {
                            if (err) throw err;

                            var userAttemptsBuy = shopperQuantityChoice;
                            var productInventory = result[0].StockQuantity;
                            var itemPrice = result[0].Price;
                            var hasInStock = productInventory - userAttemptsBuy;
                            var costTotal = productsPrice * userAttemptsBuy;

                            if (userAttemptsBuy > productInventory || productInventory === 0) {
                                console.log("We do not have enough in stock to complete this order today." + "\r\n" + "\r\n");
                                shopperIdChoice();
                            } else {
                                console.log("We have " + result[0].StockQuantity + " of " + result[0].ProductName);
                                console.log("You are buying " + userAttemptsBuy + " " + result[0].ProductName + "s at $" + result[0].Price + " per item.");
                                console.log("Your total cost today is $" + costTotal);
                                connection.query("UPDATE Products SET StockQuantity = " + hasInStock + " WHERE ItemID =" + shopperIdChoice, function (err, result) {
                                    if (err) throw err;
                                    connection.query("SELECT ItemID, ProductName, DepartmentName, Price, StockQuantity FROM products WHERE ItemID =" + shopperIdChoice, function (err, result) {

                                    });

                                });
                                prompt.get(sqlFile2, function (err, result) {
                                    if (err) {
                                        console.log(err)
                                    }
                                    console.log(result);

                                    var shopperAnswer = result.purchase;
                                    if (shopperAnswer === "n" || shopperAnswer === "no") {
                                        endApp();
                                    } else {
                                        startApp();
                                    }
                                });
                            }
                        });

                    }

                });
            }

            inApp();