const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const session = require("express-session");

const tasksRoutes = require("./routes/tasks_routes");
const registrationsRoutes = require("./routes/registrations_routes");
const sessionsRoutes = require("./routes/sessions_routes");
const categoriesRoutes = require("./routes/categories_routes");

const findUserMiddleware = require("./middlewares/find_user");
const authUser = require("./middlewares/auth_user");
const tasks = require("./controllers/tasks");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "pug");

app.use(
  session({
    secret: ["12iasdhasjdasdhbasjd", "123yhuasdgasdjkznxcjxzkh1y23"],
    saveUninitialized: false,
    resave: false,
  })
);

app.use(findUserMiddleware);
app.use(authUser);
app.use(tasksRoutes);
app.use(registrationsRoutes);
app.use(sessionsRoutes);
app.use(categoriesRoutes);

app.get("/", function (req, res) {
  res.render("home", { user: req.user });
});

app.listen(3000);
