const express = require('express')
const app = express()
const port = 3000
const config = {
	host: 'db',
	user: 'root',
	password: 'root',
	database: 'nodedb'
};

const mysql = require('mysql2')
const connection = mysql.createConnection(config)

const createTable = 'CREATE TABLE IF NOT EXISTS people(id int not null primary key auto_increment, name varchar(255))';
connection.query(createTable);

const sql = `INSERT INTO people(name) values('Gustavo')`
connection.query(sql)

app.get('/', (req, res) => {
	const listNames = 'SELECT * FROM people';

	connection.query(listNames, (err, results) => {
		let response = '<h1>Full Cycle Rocks!</h1>';
		results.forEach(row => {
			response += `<li>${row.id} - ${row.name}</li>`;
		});
		response += '</ul>';
		res.send(response);
	});
});

app.listen(port, () => {
	console.log('Rodando na porta ' + port)
})
