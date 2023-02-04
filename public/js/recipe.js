const recipeHandler = async (event) => {
    event.preventDefault();
    // extract id from html
    var id = event.target.parentNode.id;
    // process only if card is selected
    if (id)
    {
        // build query parameters
        var queryParams = `?id=${id}`
        // reroute to a page with query parameters
        document.location.replace('/recipe' + queryParams);
    }
  };
  
  // event listener on login form
  document
    .querySelector('.recipe-overview')
    .addEventListener('click', recipeHandler);