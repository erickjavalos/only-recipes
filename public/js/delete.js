const deleteId = async () => {
    console.log('deleting')
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    console.log(id);
    // execute logout procedure in backend
    const response = await fetch('/api/users/' + id, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out.');
    }
  };
  
  // event listener on logout button press
  document.querySelector('#delete').addEventListener('click', deleteId);
  