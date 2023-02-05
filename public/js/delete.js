const logout = async () => {
    console.log('deleting')
    // execute logout procedure in backend
    // const response = await fetch('/api/users/logout', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    // });
  
    // if (response.ok) {
    //   document.location.replace('/');
    // } else {
    //   alert('Failed to log out.');
    // }
  };
  
  // event listener on logout button press
  document.querySelector('#delete').addEventListener('click', logout);
  