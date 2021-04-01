const express = require("express");
const router = express.Router();
var taskcontroller = require('../controller/controller');

// app.route('/task')
// .get(taskcontroller.getall)
// .post(taskcontroller.save)

// app.route('/task/:taskid')
// .get(taskcontroller.getbyid)
// .put(taskcontroller.update)
// .delete(taskcontroller.delete)

function helloWorld(req, res, next) {
    console.log("Hello World");
    next();
}

router.get('/task', helloWorld, taskcontroller.getall)
        .post('/task', helloWorld, taskcontroller.save)

module.exports = router;