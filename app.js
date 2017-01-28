var express = require("express");
var handler = require("./userHandler")

var app = express();

app.use(express.bodyParser());

app.get("/", function(req, res) {
  res.send("well that worked fine");
});

app.get("/users", function(req, res) {
  var users = handler.onlyTheUsers();
  res.json(users);
});

app.get("/users/:id", function (req, res) {
	var id = req.params.id;
	var color = req.query.color;

	res.send("Yes? You asked for customer '" + id +
		"' and passed the color = '" + color + "'");
});

app.post("/users", function(req, res) {
  console.log(req.body);
  var name = req.body.user.name;
  var email = req.body.user.email;

  res.send("You sent name = '" + name +
    "' and email='" + email + "'");
});

app.listen(3000);
