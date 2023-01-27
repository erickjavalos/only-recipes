const router = require('express').Router();
const User = require('../../models/User');

router.post('/', async (req, res) => {
    // attempt to create user in our users DB
    try {
      // makes a query to create user
      const dbUserData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      // if exception didnt happen, it saves the session and logs in 
      req.session.save(() => {
        req.session.loggedIn = true;
        res.status(200).json(dbUserData);
      });
    } 
    // if exception occurs in query or save, it errors
    catch (err) {
        res.status(500).json(err);
    }
})

// Login 
router.post('/login', async (req, res) => {
  // query DB to verify email and password were specified
  try {
    // query by email
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    // if invalid email or doesnt exist, give an error message
    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    // check if password is good 
    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    // update session to be logged in 
    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  // delete the log in state
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;