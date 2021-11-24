const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();

// requests to '/users'

//addRewards - routes to the usersController.addReward method, the method points back here after completion and confirmation is sent back to client
router.post('/', usersController.addUser, (req, res) => {
  //bcrypt stuff
  res.status(200).json({ message: 'User added '});
  // or whatever res.locals we decide to store our data in
});


router.post('/login', usersController.getUser, (req, res) => {
  //bcrypt stuff
  console.log ('outside of if')
  if(res.locals.password[0].password === req.body.password) {
    console.log('in if statement)')
    //firgure out what needs to be sent back to the frontend, so they can fetch the necessary data
    res.status(200).json({user: res.locals.email});
  }
  else{
    res.json('Wrong password. Try again.');
  }
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