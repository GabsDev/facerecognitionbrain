const express = require("express");
let TasksController = require("../controllers/tasks");

let router = express.Router();

router
  .route("/tasks")
  .get((req, res) => {
    res.send("Hola Mundo");
  })
  .post(TasksController.create);

module.exports = router;
