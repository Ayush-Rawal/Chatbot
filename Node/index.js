var express = require("express");
var app = express();
var students = [{ name: "Sachin", age: 24 },
    { name: "Virat", age: 48 }
]
app.get("/", function(req, res) {
    res.send("Hello");
})

app.get("/mail", function(req, res) {
    var params = req.query;
    console.log(params);
    res.send("Hello mail" + params.name);
})

app.get("/search", function(req, res) {
    var name = req.query.name;
    for (var i = 0; i < students.length; i++) {
        if (name == students[i].name) {
            res.send(students[i]);
        }
    }
})

app.listen(8888, function() {
    console.log("Server started");
})