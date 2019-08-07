let mysql = require('mysql');
let inquirer = require('inquirer');
let Table = require('cli-table');

let connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'password',
	database: 'bamazon'
});

connection.connect(function(err) {
	if (err) throw err;
	console.log('Connected id:' + connection.threadId);
	startBuying();
});

function printStuff(res) {
	let table = new Table({
        chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
        , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
        , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
        , 'right': '║' , 'right-mid': '╢' , 'middle': '│' },
		head: ['Item ID', 'Product Name', 'Department', 'Cost', 'Stock']
		, colWidths: [10, 45, 40, 8, 8]
	});
	for (let i = 0; i < res.length; i++) {
		table.push([res[i].itemID, res[i].product_name, res[i].department_name, res[i].item_cost, res[i].stock_quantity]);
	}
	console.log(table.toString());
};

let startBuying = function() {
	connection.query('SELECT * FROM products', function(err, res) {
		printStuff(res);
		let choiceArray = [];
		for (let i = 0; i < res.length; i++) {
			choiceArray.push(res[i].product_name);
		}
		inquirer.prompt([{
			name: 'item',
			type: 'input',
			message: 'What up, what you want to buy? (Enter the Item ID)'
		},
		{
			name: 'quantity',
			type: 'input',
            message: 'How many do you want to buy?'
            
		}]).then(function(answer) {
			console.log(answer);
			let itemID = answer.item;
			console.log(itemID);
			let chosenItem = res[itemID-1];
			console.log(chosenItem);
			let newQuantity = chosenItem.stock_quantity - answer.quantity;
			if (newQuantity >= 0) {
				connection.query('UPDATE products SET ? WHERE itemID = ?', [{ stock_quantity: newQuantity }, itemID]);
				startBuying();
            } else 
            {
				console.log('Not enough in stock to buy all that, try and buy less or come back later :)');
				startBuying();
			}
		})
	})
};