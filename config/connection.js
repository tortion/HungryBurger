// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "dogmud.cz6nthlza5rg.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "kingsley",
  database: "burgers_db",
  port: 3306
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
