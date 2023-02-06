const { User, Recipe } = require('../models');

const router = require('express').Router();
// const { Gallery, Painting } = require('../models');

router.get('/', async (req, res) => {
  console.log(req.session)
  if (req.session.loggedIn && req.session.userId){

    try{
      const dbUserData = await User.findByPk(req.session.userId, {
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
              'images',
              'instructions',
              'difficulty',
            ],
          },
        ],
      });

      const userRecipe = dbUserData.get({ plain: true });
      res.render('homepage',{
        loggedIn: req.session.loggedIn,
        userId: req.session.userId,
        recipes: userRecipe.recipes,
        firstName: userRecipe.first_name,
        lastName: userRecipe.first_name,
        experience: userRecipe.experience,
        
      })
      
    }catch (err) {
      console.log(err);
      res.status(500).json(err);
    }

  }
  else {

    res.render('homepage',{
      loggedIn: req.session.loggedIn
    })
  }
})

// render login page data
router.get('/login', async (req, res) => {
  res.render('login')
})

// render signup data
router.get('/signup', async (req, res) => {
  res.render('signup')
})

// render add recipe data
router.get('/addrecipe', async (req, res) => {
  res.render('addrecipe')
})

// render single recipe page
router.get('/recipe', async (req,res) => {
  if (req.session.loggedIn)
  {
    // get id from query
    let id = req.query.id;
    // query recipe db by id
    try {
      const recipeData = await Recipe.findOne({
        where: {
          recipe_id: id
        }
      })
      const recipe = recipeData.get({ plain: true });

      res.render('recipe', {
        loggedIn: req.session.loggedIn,
        recipeName: recipe.recipes_name,
        images: recipe.images,
        content: [
          {
            title: "Ingredients",
            data: recipe.ingredients,
            id: "ingredients"
          },
          {
            title: "Allergens",
            data: recipe.allergens,
            id: "allergens"
          },
          {
            title: "Servings",
            data: recipe.servings,
            id: "servings"
          },
          {
            title: "Prep Time",
            data: recipe.preptime,
            id: "prep-time"
          },
          {
            title: "Cook Time",
            data: recipe.cooktime,
            id: "cook-time"
          },
          {
            title: "Total Time",
            data: recipe.totaltime,
            id: "total-time"
          },
          {
            title: "Difficulty",
            data: recipe.difficulty,
            id: "difficulty"
          },
          {
            title: "Instructions",
            data: recipe.instructions,
            id: "instructions"
          },
        ]
      })
    }
    catch(err)
    {
      // default to plain-text. send()
      res.type('txt').send('Error querying db');
    }
  }
  else 
  {
    // redirect to homepage
    res.redirect('/');
  }
})


// TODO remove route later
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
    res.status(200).json(userRecipe)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



module.exports = router;
