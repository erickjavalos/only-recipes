const { User, Recipe } = require('../models');

const router = require('express').Router();
// const { Gallery, Painting } = require('../models');

router.get('/', async (req, res) => {
  res.render('homepage',{
    loggedIn: req.session.loggedIn
  })
})

// render login page data
router.get('/login', async (req, res) => {
  res.render('login')
})

// render signup data
router.get('/signup', async (req, res) => {
  res.render('signup')
})

router.get('/user/:id', async (req, res) => {
  try {
    console.log('Hello World')
    const dbUserData = await User.findByPk(req.params.id, {
      include: [
        {
          model: Recipe,
          attributes: [
            'recipe_id',
            'recipes_name',
            'allergens',
            'servings',
            'preptime',
            'cooktime',
            'totaltime',
            'instructions',
            'difficulty',
          ],
        },
      ],
    });
    // console.log(dbUserData)
    const userRecipe = dbUserData.get({ plain: true });
    console.log(userRecipe)
    // res.render('gallery', {
    //   gallery,
    //   // We are not incrementing the 'countVisit' session variable here
    //   // but simply sending over the current 'countVisit' session variable to be rendered
    //   countVisit: req.session.countVisit,
    // });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
