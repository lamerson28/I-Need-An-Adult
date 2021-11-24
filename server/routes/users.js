const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();

// requests to '/users'

//addRewards - routes to the usersController.addReward method, the method points back here after completion and confirmation is sent back to client
router.post('/', usersController.addUser, (req, res, next) => {
//   // pass request to usersController.getTask, which will return an array of all task objects in DB
  res.status(200).json({ message: 'User added '});
  // or whatever res.locals we decide to store our data in
});

//getRewards - routes to the usersController.getAllRewards method, the returned response from the method is jsonified and sent to the client
// router.get('/', usersController.getAllRewards, (req, res, next) => {
//   res.status(200).json(res.locals.rewardsList)
// });

//deleteRewards - routes to the usersController.deleteReward method, the method points back here after completion and confirmation is sent back to client
// router.delete('/', usersController.deleteReward, (req, res, next) => {
//   res.status(200).json({ message: 'Reward Deleted' });
// })

//exports the router object
module.exports = router;