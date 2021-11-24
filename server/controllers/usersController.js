const express = require('express');
const db = require('../db');
const pool = require('../db');

const usersController = {};

usersController.addUser = async (req, res, next) => {
  try {
    const { firstname, lastname, username, password } = req.body;

    const SQLquery = `INSERT INTO users (firstname, lastname, username, password) VALUES ('${firstname}', '${lastname}', '${username}', '${password}')`;
    const results = await db.query(SQLquery);
    return next();
  } catch (err) {
    return next({
      log: `rewardsController.addReward: ERROR: ${err}`,
      message: { err: 'Error occurred in usersController.addUser. Check server logs for more details.' }
    })
  };
}

// usersController.getAllUsers = async (req, res, next) => {
//   try {
//     const results = await db.query('SELECT * from rewards');
//     res.locals.rewardsList = results.rows;
//     return next();
//   } catch (err) {
//     return next({
//       log: `rewardsController.getAllRewards: ERROR: ${err}`,
//       message: { err: 'Error occurred in rewardsController.getAllRewards. Check server logs for more details.' }
//     })
//   };
// };

// usersController.deleteReward = async (req, res, next) => {
//   try {
//     const { id } = req.body;

//     const SQLquery = `DELETE FROM rewards WHERE rewards_id='${id}'`;
//     const results = await db.query(SQLquery);
//     return next();
//   } catch (err) {
//     return next({
//       log: `rewardsController.deleteReward: ERROR: ${err}`,
//       message: { err: 'Error occurred in rewardsController.deleteReward. Check server logs for more details.' }
//     })
//   };
// };

module.exports = usersController;