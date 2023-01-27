const signupFormHandler = async (event) => {
  event.preventDefault();

  // // grab all values in form
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  // check if all three values were defined
  if (username && email && password) 
  {
    // submit post request to the backend to upload to our DB
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    // signed up was successful and by default signs user in!
    if (response.ok) {
      // navigate to profile page
      document.location.replace('/');
    } 
    else {
      // give alert that the sign up failed
      alert('Failed to sign up. Either email exists or password is not > 6 characters');
    }
  }
  // give a alert to user that information entered was incorrect
  else
  {
    alert("Missing information when signing up!")
  }
};

// event listener on sign up button submit
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
