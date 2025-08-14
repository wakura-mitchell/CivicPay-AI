// instantiate our dependencies express, cors, mysql
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

// using cors and express to post data from client to server
app.use(cors());
app.use(express.json()); // for parsing application/json

// running the server
app.listen(3002, () => {
	console.log("Server is running on port 3002");
});

// create mysql database
const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "elicense",
});

// create a route to the user that will register a user
app.post("/register", (req, res) => {
	const sentEmail = req.body.Email;
	const sendUserName = req.body.UserName;
	const sentPassword = req.body.Password;

	// lets create sql statement that insert the user to the database table Users
	const sql =
		"INSERT INTO users ( email, username, password) VALUES (?, ?, ?)";
	const Values = [sentEmail, sendUserName, sentPassword];

	// query to execute the sql statement above
	db.query(sql, Values, (err, results) => {
		if (err) {
			res.send(err);
		} else {
			console.log("user inserted successfully");
			res.send({ message: "User added" });
		}
	});
});

// now lets log in with the credentials
app.post("/login", (req, res) => {
	const sendLoginUserName = req.body.LoginUserName;
	const sendLoginPassword = req.body.LoginPassword;

	// lets create sql statement that fetch the user from the database table Users
	const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
	const Values = [sendLoginUserName, sendLoginPassword];

	// query to execute the sql statement above
	db.query(sql, Values, (err, results) => {
		if (err) {
			res.send({ error: err });
		}

		if (results.length > 0) {
			// res.send({message: "User logged in successfully", results: results});
			res.send(results);
		} else {
			res.send({ message: " User not found" });
		}
	});
});
