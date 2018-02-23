var inquirer = require('inquirer');
var mysql = require('mysql');

var amountOwed;
var currentDepartment;

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',

    database: 'bamazonschema'
}

    function placeOrder() {

            newOrder();
        }
        else{
			amountOwed = res[0].Price * answer.selectQuantity;
			currentDepartment = res[0].DepartmentName;
            console.log('Thank you for your order');
			console.log('Total $' + res[0].Price * answer.selectQuantity);
			console.log('Total $' + amountOwed);
            console.log('');
            connection.query('UPDATE products SET ? Where ?', [{
                Quantity: res[0].Quantity - answer.selectQuantity
            },{
                id: answer.selectId
            }], function(err, res){});
			logSaleToDepartment();
            newOrder();
        }
    })
function newOrder(){
    })
};

connection.query('SELECT * FROM products', function(err, res){
 		if (err) throw err;
		console.log('Items in Store');
 
 		for(i=0;i<res.length;i++){
			console.log('Item ID:' + res[i].id + ' Product Name: ' + res[i].ProductName + ' Price: ' + '$' + res[i].Price)
			console.log('Item ID:' + res[i].id + ' Product Name: ' + res[i].ProductName + ' Price: ' + '$' + res[i].Price + '(Quantity left: ' + res[i].StockQuantity + ')')
 		}
		console.log('')
 		placeOrder();
 		})
function placeOrder(){
 		if(answer.selectQuantity > res[0].StockQuantity){
 			console.log('Insufficient Quantity');
 			console.log('This order has been cancelled');
			console.log('');
 			newOrder();
 		}
 		else{
function newOrder(){
 			placeOrder();
 		}
 		else{
			console.log('Thank you for shopping at Bamazon!');
 			connection.end();
 		}
 	})
 };
