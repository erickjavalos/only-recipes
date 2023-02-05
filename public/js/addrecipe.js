const addrecipeFormHandler = async (event) => {
    event.preventDefault();
    console.log('submitted')
  
    // // grab all values in form
    const recipeName = document.querySelector('#recipe-name').value;
    const description= document.querySelector('#recipe-description').value.trim();
    const ingredients = document.querySelector('#recipe-ingredients').value.trim();
    const servings = document.querySelector('#recipe-servings').value.trim();
    const preptime = document.querySelector('#recipe-preptime').value.trim();
    const cooktime = document.querySelector('#recipe-cooktime').value.trim();
    const totaltime = document.querySelector('#recipe-totaltime').value.trim();
    const instructions = document.querySelector('#recipe-instructions').value.trim();
    const allergens = document.querySelector('#recipe-allergens').value.trim();
    const difficulty = document.querySelector('#recipe-difficulty').value.trim();
    const images = document.querySelector('#recipe-image').value.trim();
  
    // check if all ten values were defined
    if (recipeName && images && description && ingredients && servings && preptime && cooktime && totaltime && instructions && allergens && difficulty) 
    {
      // submit post request to the backend to upload to our DB
      const response = await fetch('/api/users/addrecipe', {
        method: 'POST',
        body: JSON.stringify({ recipeName, description, ingredients, images, servings, preptime, cooktime, totaltime, instructions, allergens, difficulty}),
        headers: { 'Content-Type': 'application/json' },
      });
      // console.log(response);
  
      // signed up was successful and by default signs user in!
      // if (response.ok) {
      //   // navigate to profile page
      //   document.location.replace('/');
      // } 
      // else {
      //   // give alert that the sign up failed
      //   alert('Failed to add Recipe. Make sure to fill all fields');
      // }
    }
    // give a alert to user that information entered was incorrect
    else
    {
      alert("Missing information when adding a new recipe!")
    }
  };
  
  // event listener on sign up button submit
  document
    .querySelector('.addrecipe-form')
    .addEventListener('submit', addrecipeFormHandler);