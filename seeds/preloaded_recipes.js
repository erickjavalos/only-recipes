const {Recipe} = require('../models')



const recipes = 
[
    {
      user_id:1,
      recipes_name:"Philly Cheesesteak Sloppy Joes",
      description:"Take the best of two classic sandwiches—sloppy joes and Philly cheesesteaks—to make these cheesy, meaty, and saucy cheesesteak sloppy joes!",
      ingredients:"2 tablespoons unsalted butter,1 small white onion,chopped,1 green bell pepper,seeded and chopped,1 pound lean beef,90/10 blend,1/2 cup beef stock,1/4 cup ketchup,2 tablespoons Worcestershire sauce,1/2 teaspoon garlic powder,1/2 teaspoon kosher salt,1/2 teaspoon black pepper,12 slices provolone cheese,divided,6 brioche buns,store-bought or homemade",
      servings:"6 servings",
      preptime:"10 mins",
      cooktime:"30 mins",
      totaltime:"40 mins",
      instructions:"Step 1:Cook the vegetables:In a large skillet set over medium heat, melt the butter. Add the onions and bell peppers. Cook until soften, 6 to 7 minutes, stirring frequently. The vegetables shouldn’t brown at this point, just soften.;Step 2:Cook the beef:Add the ground beef and use a wooden spoon to break it up into small pieces as it cooks. Cook until the meat is browned,",
      images:"QmaT326dnR6Xy7hZk8XhczheUQejdxNH28n2A1qZE8KGe3",
      allergens:"Eggs",
      difficulty:"Medium",
    },
    {
      user_id:1,
      recipes_name:"Kale and Mushroom Egg Bites",
      description:"These veggie-packed and easily-reheatable kale and mushroom egg bites are the easiest way to start your day with a simple, nutritious breakfast—even if you are racing out the door without a second to spare.",
      ingredients:"2 tablespoons unsalted butter,divided,5 large leaves fresh kale,stems removed and roughly chopped,3 portobello mushroom caps,cleaned and roughly chopped1 teaspoon kosher salt,divided,9 large eggs,1/4 cup half and half,Aleppo pepper or smoked paprika,to taste (optional)",
      servings:"6 Servings",  
      preptime:"15 mins",
      cooktime:"28 mins",
      totaltime:"43 mins",
      instructions: "Step 1: Preheat the oven to 325ºF.;Step 2: Prepare the muffin tin: Microwave 1 tablespoon of the butter in a microwave-safe bowl or measuring cup until melted, 15 to 20 seconds. Using a brush or paper towel, thoroughly coat each well in a 12-well muffin or cupcake tin generously with the melted butter.;Step 3:Process the filling: Chopped kale until chopped into small pieces. Transfer to a bowl and repeat with portobello mushrooms.;Step 4: Cook the filling: Place a large skillet over medium heat and add 1 tablespoon butter. When the butter is foamy, add the chopped mushrooms and 1/4 teaspoon of salt. Sauté for 4 to 5 minutes, stirring frequently, or until all liquid from the mushrooms has been released (the mushrooms will reduce in volume significantly).Add the kale and another 1/4 teaspoon salt to the skillet and sauté until wilted and tender, 4 to 5 minutes more. Remove the skillet from the heat and allow the vegetables to cool slightly.;Step 5: Prepare the egg mixture: Using a blender, blend the eggs, half and half, and 1/2 teaspoon salt until the mixture is frothy and completely homogenous, 10 to 15 seconds. Alternatively, whisk together thoroughly in a bowl.;Step 6: Fill the wells: Divide the cooled kale and portobello mushroom mixture among the 12 buttered wells of the muffin tin, then carefully fill each well no more than 3/4 full with the egg mixture. Use a small spoon or butter knife to combine the ingredients in each well, then finish with a sprinkle of smoked paprika or Aleppo pepper on top of each well, if desired.;Step 7: Bake the egg bites: Bake the egg bites, rotating the muffin tin halfway through to ensure even baking, 16 to 19 minutes. When finished, the egg bites will be puffed and barely set in the middle, but not at all hard. Test for doneness occasionally by poking the center of each egg bite—perfectly cooked egg bites will be bouncy and just set, as they will continue to set up as they cool.;Step 8: Serve or store the egg bites: Remove the cooked egg bites from the oven and run a butter knife around the edge of each well to release any stuck-on bits. Let cool slightly, then remove to a plate. Serve warm, or allow to cool to room temperature and store in an airtight container in the refrigerator for up to 5 days.",
      images:"QmQV3CxGDKjHgoxej2svCfm11qCGEMb3y2wZQVPAFbYUBy",
      allergens:"Eggs, Milk",
      difficulty:"Easy",
    },
    {
      user_id:1,
      recipes_name:"Sheet Pan Buttermilk Pancakes",
      description:"This sheet pan pancake recipe is the solution to breakfasts that are special yet stress-free. Bake a giant buttermilk pancake on a sheet pan and cut it into squares for serving. Freezes great for quick school day brekkies!",
      ingredients:"8 tablespoons (1 stick) unsalted butter,melted and cooled,divided,2 1/2 cup (313g) all-purpose flour,1 tablespoon baking powder,1 teaspoon baking soda,1/2 teaspoon salt,1/2 cup brown sugar,2 cups buttermilk,2 large eggs,1 teaspoon vanilla extract,1 teaspoon finely grated lemon zest,1 cup blueberries,divided,1 cup raspberries,divided",
      servings:"12 serving",
      preptime:"10 mins",
      cooktime:" 20 mins",
      totaltime:"30 mins",
      instructions:"Step 1:Preheat oven to 425°F:Place a rack in the upper third of the oven. Preheat the oven to 425°F.;Step 2:Grease the baking sheet: Pour 2 tablespoons of the melted butter on a 15x10.5-inch sheet pan. Using a pastry brush, brush the butter on the bottom of the baking sheet and up the sides.;Step 3:Sift the dry ingredients: Sift the flour, baking powder, baking soda, and salt into a medium bowl.;Step 4: Combine the wet ingredients: In a large bowl, combine the buttermilk, eggs, vanilla, lemon zest, and sugar. Whisk vigorously until combined.;Step 5: Fold the dry ingredients into the wet: Pour 1/3 of the dry ingredients into the wet ingredients. Fold together using a silicone spatula. Repeat until all the dry ingredients are combined with the wet. Continue to fold until there are no streaks of flour. Mix until there is no dry flour on the bottom of the bowl. Fold in 4 tablespoons of the melted butter. Lumps are fine. Your batter should look like loose ricotta.;Step 6: Fold in half of the fruit: Fold in half of the blueberries and raspberries into the pancake batter.;Step 7: Pour the batter into the pan: Pour the batter into the buttered pan. Using a silicone spatula, spread the batter around so it covers the bottom of the baking sheet completely and is even on top.;Step 8: Sprinkle the remaining fruit on top: Sprinkle the remaining blueberries and raspberries on top of the batter.;Step 9: Bake the pancake: Bake the pancake for 15 minutes. Insert toothpick in the middle of the pancake. If it is free from wet batter, it's done. If not, bake for 5 minutes longer. The top of your pancake should be lightly toasted.;Step 10: Brush the remaining butter on the pancake: Right after it comes out of the oven, brush the remaining 2 tablespoons of butter on the pancake.;Step 11: Cut and serve: Allow the pancake to cool slightly, approximately 3 minutes. Cut into squares and serve with warm maple syrup.;Step 12: Storage: Once cooked, you can leave sheet pan pancakes at room temperature for up to 2 hours. Put leftover slices in a zip-top bag or another airtight container and refrigerate for 2-3 days.",
      images:"QmWCoykaLLxXp9RRB9vj4Kg2mLb7yenHQoj2JWXBWqXgw1",
      allergens:"Eggs, Milk",
      difficulty:"Easy",
    },
    {
      user_id:1,
      recipes_name:"Peanut Butter and Chocolate Chip Pancakes",
      description:"These fluffy peanut butter pancakes with chocolate chips are my daughter’s favorite and soon-to-be yours too!",
      ingredients:"2 cups (260g)  all-purpose flour,2 teaspoons baking powder,1/4 teaspoon salt,2 large eggs,2 cups whole milk,3/4 cup smooth peanut butter,2 tablespoons melted butter,plus more for cooking pancakes,4 teaspoons honey,1 cup milk chocolate chips",
      servings:"6 servings",
      preptime:"5 mins",
      cooktime:"10 mins",
      totaltime:"15 mins",
      instructions:"Step 1: Combine the dry ingredients: In a medium bowl, add the flour, baking powder, and salt. Whisk to combine. Set it aside..;Step 2:Combine wet ingredients: In a large bowl, beat the eggs until the whites and yolks are combine. Then, add milk, peanut butter, melted butter, and honey. Stir well to incorporate.;Step 3:Combine batter and add chocolate chips: Add the dry ingredients into the wet ingredients and mix until just incorporated. Stir in the chocolate chips.;Step 4: Cook the pancakes: In a large skillet or griddle set to medium heat, add about 1/2 tablespoon butter. Pour a heaping tablespoon of batter in at a time, making silver dollar-sized pancakes. Leave plenty of space in between each pancake. Cook for 2 to 3 minutes, then flip. They are ready to flip when small bubbles appear on top and the edges start to brown. Cook the other side for 2 to 3 minutes. Add more butter to the skillet as needed.;Step 5: Serve: Serve the pancakes immediately—syrup is optional for these sweet pancakes! Cool leftovers and refrigerate in an airtight container for a day or two. You can reheat them briefly in a toaster oven or let them warm to room temperature and eat them that way.",
      images:"QmScTtkHSdS1WYzNJFLZrNxVvuvUnPZqiBCNXucCmpPQev",
      allergens:"Eggs, Milk, Nuts",
      difficulty:"Easy",
    },
    {
      user_id:1,
      recipes_name:"The Ultimate Quesadilla",
      description:"Here's how to make classic Mexican and Tex-Mex cheese quesadillas! Just toasted tortillas with melted cheese, griddled with our special technique. Make it yours with your favorite add-ins and toppings.",
      ingredients:"Large flour tortillas,Grated cheese such as mild or sharp cheddar,or Monterey Jack,Olive oil or butter,Sliced mushrooms,Green onions,Black olives,sliced,Fresh tomatoes,diced,Chicken pieces,Avocado,Lettuce,Apple cider vinegar,Kosher salt",
      servings:"1 serving",
      preptime:"5 mins",
      cooktime:"7 mins",
      totaltime:"12 mins",
      instructions:"Step 1:Heat the tortillas until air pockets form: Heat a large skillet (cast iron works great) on medium high heat. Add a small amount of oil (about 1/2 teaspoon) and spread it around the bottom of the pan with a spatula (you could use butter as well). Take one large flour tortilla and place it in the pan. Flip the tortilla over a few times, 10 seconds between flips. Air pockets should begin to form within the tortilla.;Step 2: Add the cheese and other ingredients: When pockets of air begin to form, take a handful of grated cheese, sprinkle over the top of the tortilla, making sure that the cheese does not land on the pan itself. Add whatever additional ingredients you choose - green onion, sliced mushrooms, olives, tomatoes, etc. If you would like your quesadilla to be a chicken quesadilla, add some diced cooked chicken. Take care not to layer on the ingredients too thickly - this is a quesadilla, not a quiche!;Step 3: Lower the heat and cover pan: Reduce the heat to low and cover the pan. The pan should be hot enough by now to have plenty of residual heat to melt the cheese and brown the tortilla. If the quesadilla begins to smoke too much, remove from the heat. After a minute, check to see if the cheese is melted. If not, return the cover and keep checking every minute until the cheese is melted.;Step 4:Fold the tortilla over: When the cheese is sufficiently melted, use a spatula to lift up one side of the quesadilla and flip over the other side, as if you were making an omelette. The tortilla should by now be browned slightly. If it is not browned, turn the heat up to high and flip the quesadilla over every 10 seconds or so until it gets browned.;Step 5: Remove quesadilla from pan and cut into wedges: To make the lettuce to accompany the quesadilla, thinly slice some iceberg lettuce. Sprinkle some cider vinegar on it and some salt. Serve with the lettuce, salsa, sour cream, and guacamole.",
      images: "QmXLfpRTzzzonnZtxikAZrnSM752Yna9RaAm88FsdqEHXm",
      allergens:"Milk",
      difficulty:"Easy",
    },
    {
      user_id:1,
      recipes_name:"Microwave Baked Potato",
      description:"It is hard to improve on the baked potato except for one factor: time. This microwave baked potato recipe takes a fraction of the time and is just as delicious.",
      ingredients:"1 large (10 to 12-ounce) russet potato,1 teaspoon olive oil,tablespoon butter,1/4 cup shredded cheddar cheese,1 tablespoon sour cream,1 teaspoon minced chives,Salt and pepper,to taste",
      servings: "1 serving",
      preptime:"3 mins",
      cooktime:"10 mins",
      totaltime:"13 mins",
      instructions:"Step 1:Prepare the potato:If you would like a crispy skin on your baked potato, preheat the oven to 450°F, Scrub the potato well. Dry it off and poke it a few times on all sides with a fork.;Step 2: Microwave the potato:Place the potato on a microwave-safe plate and microwave it for 8 to 12 minutes, flipping it once halfway through. For a medium-large potato cooked in a 1,000-watt microwave, the cook time will be about 10 minutes. Your potato will be steaming hot when it is done. Press on it a bit with your thumb and it should give easily to pressure. You should be able to pierce it through the center with a fork or paring knife with little resistance. If it feels firm at all, place it back in the microwave for 1-2 minutes longer.;Step 3: Crisp the skin (optional): If you would like a crispy, salty skin on your potato (my favorite), coat the microwaved potato on all sides with olive oil and sprinkle with salt. Bake until the skin is cracking and crispy, about 10 minutes.;Step 4:Serve the potato: Slice down the length of the hot potato halfway through to expose the interior. Top with your choice of toppings while hot, such as butter, cheese, sour cream, and/or chives. Season with salt and pepper to taste. Store leftovers in an airtight container in the fridge for up to 3 days. You can reheat in the microwave, but I prefer to reheat the potatoes in a 400°F oven for 10 minutes so they get crispy on the outside.",
      images:"Qma6eBzeb2tDHhtrM9Fc73tuKvZyS4AGL6sJXLrbSYfn8y",
      allergens:"Milk",
      difficulty:"Easy",
    }

]
// const seedsrecipes = ()=> Recipe.bulkCreate(recipes)
const seedsrecipes = ()=> Recipe.create(recipes[0])
module.exports = seedsrecipes


//https://www.simplyrecipes.com/