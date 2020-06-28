var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var cors = require("cors");
var ObjectID = mongodb.ObjectID;

var app = express();
app.use(bodyParser.json());
app.use(cors());
// console.log(process.env);

var mclient = mongodb.MongoClient("mongodb://jim:hardpassword1@ds139334.mlab.com:39334/heroku_glcps0qt", {useUnifiedTopology: true});
var dbName = "heroku_glcps0qt";

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;
// "mongodb+srv://scoreboard:U0ecgZGgNXcPRQSc@cluster0-zlyky.mongodb.net/test?retryWrites=true&w=majority"
//bxsg6wmNFW@KsUp
// Connect to the database before starting the application server.
mclient.connect(function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = client.db(dbName); //, {useUnifiedTopology: true}
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// ROSTERS API ROUTES BELOW

function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
}

/* /api/rosters
*   GET: finds all rosters
*   POST: create a new roster
*/

app.get("/api/rosters", function(req, res) {
  db.collection("rosters").find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get rosters.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.get("/api/players", function(req, res) {
  db.collection("players").find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get players.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/api/players", function(req, res) {
  var newContact = req.body;
  newContact.createDate = new Date();

  if (!req.body.name || !req.body.number) {
    handleError(res, "Invalid user input", "Must provide a name and number.", 400);
  } else {
    db.collection("players").insertOne(newContact, function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to add player.");
      } else {
        res.status(201).json(doc.ops[0]);
      }
    });
  }
});

app.post("/api/rosters", function(req, res) {
  var newContact = req.body;
  newContact.createDate = new Date();

  if (!req.body.name) {
    handleError(res, "Invalid user input", "Must provide a team name.", 400);
  } else {
    db.collection("rosters").insertOne(newContact, function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to add roster.");
      } else {
        res.status(201).json(doc.ops[0]);
      }
    });
  }
});