// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
var hbs = require("express-handlebars");
// Requiring passport as we've configured it
const passport = require("./config/passport");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
// View Engine setup
app.set("views", path.join(__dirname, "views"));
app.engine("hbs", hbs({ extname: "hbs",defaultLayout: "main", layoutsDir: __dirname + "/views/layouts/" })); 
app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: true }));// should it be like this or should we make it false
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({force:false}).then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

