// Require in dependencies, invoke express
const express = require('express');
const path = require('path');
const router = express.Router();
const app = express();
const port = process.env.PORT || 3000;
const dotenv = require('dotenv').config();
const cookieParser = require("cookie-parser");

// Require in routers
const taskRouter = require('./routes/task.js');
const userRouter = require('./routes/users.js');

// parse incoming requests; incl. cookies 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// /dist/ folder path
const DIST_DIR = path.join(__dirname, '../dist');

// to serve the bundle.js in dist when in production
app.use(express.static(DIST_DIR));

// Send GET requests to '/' to index.html
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

// routes requests to '/task/ to taskRouter
app.use('/api/tasks', taskRouter);
// routes requests to '/rewards/ to rewardsRouter
app.use('/api/users', userRouter);


// Catch all route handler
app.use('*', (req, res) => {
  res.sendStatus(418)
})

// Global Error Handler
app.use((err, req, res, next) => {
  const defaultError = {
    log: 'Express error handler caught an unknown middleware error',
    status: 500,
    message: { err: 'Internal Service Error' },
  };

  const errorObj = { ...defaultError, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// listening to either process.env.PORT || 3000
app.listen(port, function () {
  console.log('App listening on port: ' + port);
});
