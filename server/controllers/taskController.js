const express = require('express');
const db = require('../db.js');

const taskController = {};

// create new task in database
// information sent in the request body
taskController.addTask = async (req, res, next) => {
  try {
    // deconstruct the properties from the request body
    const { taskname, completed, rewards } = req.body;

    const SQLquery = `INSERT INTO tasks (taskname, completed, rewards, email) VALUES ('${taskname}', '${completed}', '${rewards}', '${req.user}');`;
    const results = await db.query(SQLquery);
    return next();
  } catch (err) {
    return next({
      log: `taskController.addTask: ERROR: ${err}`,
      message: {
        err: 'Error occurred in taskController.addTask. Check server logs for more details.',
      },
    });
  }
};

taskController.getAllTasks = async (req, res, next) => {
  try {
    const everyTask = await db.query(
      `SELECT * FROM tasks WHERE email = '${req.user}'`
    );
    res.locals.tasklist = everyTask.rows;
    return next();
  } catch (err) {
    return next({
      log: `taskController.getTask: ERROR: ${err}`,
      message: {
        err: 'Error occurred in taskController.getTask. Check server logs for more details.',
      },
    });
  }
};

// taskController.deleteTask = async (req, res, next) => {
//   try {
//     const { id } = req.body;

//     const SQLquery = `DELETE FROM task WHERE task_id='${id}'`;
//     const results = await db.query(SQLquery);
//     return next()
//   } catch (err) {
//     return next({
//       log: `taskController.deleteTask: ERROR: ${err}`,
//       message: { err: 'Error occurred in taskController.getTask. Check server logs for more details.' }
//     })
//   }
// };

//patch request to change completed to true;

// Stretch features
taskController.updateTask = (req, res, next) => {
  //
};

module.exports = taskController;
