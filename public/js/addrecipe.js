const addrecipeFormHandler = async (event) => {
    event.preventDefault();
  
    // // grab all values in form
    const recipeName = document.querySelector('#recipes-name').value.trim();
    const description= document.querySelector('#description').value.trim();
    const ingredients = document.querySelector('#ingredients').value.trim();
    const servings = document.querySelector('#servings').value.trim();
    const preptime = document.querySelector('#preptime').value.trim();
    const cooktime = document.querySelector('#cooktime').value.trim();
    const totaltime = document.querySelector('#totaltime').value.trim();
    const instructions = document.querySelector('#instructions').value.trim();
    const allergens = document.querySelector('#allergens').value.trim();
    const difficulty = document.querySelector('#difficulty').value.trim();
  
    // check if all ten values were defined
    if (recipeName && description && ingredients && servings && preptime && cooktime && totaltime && instructions && allergens && difficulty) 
    {
      // submit post request to the backend to upload to our DB
      const response = await fetch('/api/user/addrecipe', {
        method: 'POST',
        body: JSON.stringify({ recipeName, description, ingredients, servings, preptime, cooktime, totaltime, instructions, allergens, difficulty}),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response);
  
      // signed up was successful and by default signs user in!
      if (response.ok) {
        // navigate to profile page
        document.location.replace('/');
      } 
      else {
        // give alert that the sign up failed
        alert('Failed to add Recipe. Make sure to fill all fields');
      }
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