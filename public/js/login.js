const loginFormHandler = async (event) => {
  event.preventDefault();
  // grab email and password
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  // verify email and password are valid
  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    // default to homepage
    if (response.ok) {
      document.location.replace('/');
    }
    // give alert that loggin failed 
    else {
      alert('Failed to log in.');
    }
  }
};

// event listener on login form
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
