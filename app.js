const express = require("express"),
   bodyParser = require("body-parser");
          app = express();


app.use(express.static('public'))
app.set("view engine", "ejs");


// Home Page
app.get("/", (req, res) => res.render("index"));

//About Page
app.get("/about", (req,res) => res.render("about"));

// Resume Page
app.get("/resume", (req, res) => res.render("resume"));

//Blog 
app.get("/books", (req, res) => res.render("books"));

//Portfolio Page
app.get("/portfolio", (req, res) => res.render("portfolio"));

//Contact Page
app.get("/contactme", (req, res) => res.render("contactMe"));


//Starting up Server
app.listen(3000, () => {console.log("server has started!")}); 
