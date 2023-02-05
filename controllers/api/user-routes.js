const router = require('express').Router();
const {User, Recipe} = require('../../models');

router.post('/', async (req, res) => {
    // attempt to create user in our users DB
    try {
      // makes a query to create user
      const dbUserData = await User.create({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        experience: req.body.experience,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      // if exception didnt happen, it saves the session and logs in 
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.userId = dbUserData.user_id
  
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
      req.session.userId = dbUserData.user_id

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

// Delete recipe
router.delete('/:id', async (req, res) => {
  
  try {
    const recipeData = await Recipe.destroy({
      where: {
        recipe_id: req.params.id,
      },
    });

    if (!recipeData) {
      res.status(404).json({ message: 'No library card found with that id!' });
      return;
    }

    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;