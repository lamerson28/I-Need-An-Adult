const express = require('express');
const db = require('../db');
const pool = require('../db');

const usersController = {};

usersController.addUser = async (req, res, next) => {
  try {
    const { email, username, password } = req.body;

    const SQLquery = `INSERT INTO users (email, username, password) VALUES ('${email}', '${username}', '${password}');`;
    const results = await db.query(SQLquery);
    return next();
  } catch (err) {
    res.json('Email already exists');
    return next({
      log: `rewardsController.addReward: ERROR: ${err}`,
      message: { err: 'Error occurred in usersController.addUser. Check server logs for more details.' }
    })
  };
}

usersController.getUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    
    const SQLquery = `SELECT password FROM public.users WHERE email = '${email}';`; 
    const results = await db.query(SQLquery);

    //check if the password from the body equals the one from the db
    //then in the router redirect them to the home page and display that users tasks
    res.locals.email = email;
    res.locals.password = results.rows;
    // console.log('RES LOCALS', res.locals.password[0].password);
    // console.log(req.body.password);
    return next();
  } catch (err) {
    return next({
      log: `rewardsController.getAllRewards: ERROR: ${err}`,
      message: { err: 'Error occurred in rewardsController.getAllRewards. Check server logs for more details.' }
    })
  };
};

module.exports = usersController;