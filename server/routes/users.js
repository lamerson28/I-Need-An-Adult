const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const bcrypt = require('bcrypt');

// requests to '/users'

//addRewards - routes to the usersController.addReward method, the method points back here after completion and confirmation is sent back to client
router.post('/', usersController.addUser,(req, res) => {
  //bcrypt stuff
  const token = jwt.sign({ user: res.locals.email }, secret);
  console.log(token);
  res.cookie("access_token", token, {
    httpOnly: true,
  })
  .status(200)
  .json({ message: "Signed up successfully"});

  // res.status(200).json({ message: 'User added ' });
  // or whatever res.locals we decide to store our data in
});


router.post('/login', usersController.getUser, (req, res) => {
  //bcrypt stuff
  // console.log('inside post')
  console.log(res.locals.password[0].password);
  const comparePass = bcrypt.compareSync(req.body.password, res.locals.password[0].password)
  // console.log(compare)
  if (comparePass) {
    // console.log('INSIDE IF')
    const token = jwt.sign({ user: res.locals.email }, secret);
    res.cookie("access_token", token, {
      httpOnly: true,
    })
    .status(200)
    .json({ message: "Logged in successfully"});
  }
  else {
    res.json('Wrong password. Try again.');
  }
});

//When logout logic: delete the cookie

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