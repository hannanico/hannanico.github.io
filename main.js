const express = require("express");
const myApp = express();
const { check, validationResult } = require("express-validator");
const { default: mongoose } = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/PortfolioWeb");
myApp.use(express.urlencoded({ extended: false }));

myApp.use("/public", express.static(__dirname + "/public"));

myApp.use("/scripts", express.static(__dirname + "/scripts"));

myApp.set("view engine", "ejs");

myApp.get("/", (req, res) => {
  //   console.log("Fucking finally its working");
  res.render("main");
});

const ContactInformation = mongoose.model("ContactInformation", {
  Name: String,
  Email: String,
  Subject: String,
  Message: String,
});

myApp.post(
  "/",
  [
    check("name", "Name cannot be empty").not().isEmpty(),
    check("email", "Email cannot be empty").not().isEmpty(),
    check("subject", "Subject cannot be empty").not().isEmpty(),
    check("message", "Message cannot be empty").not().isEmpty(),
  ],

  function (req, res) {
    const errors = validationResult(req);
    console.log(req.body);
    if (!errors.isEmpty()) {
      res.render("main", {
        errors: errors.array(),
      });
    } else {
      var Name = req.body.name;
      var Email = req.body.email;
      var Subject = req.body.subject;
      var Message = req.body.message;

      var newContactInformation = new ContactInformation({
        Name: Name,
        Email: Email,
        Subject: Subject,
        Message: Message,
      });

      newContactInformation.save().then(() => console.log("New numbers saved"));

      res.render("main");
    }
  }
);

myApp.listen(7777);
