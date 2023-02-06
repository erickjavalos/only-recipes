const form = document.getElementById('add-recipe-submit');

const addrecipeFormHandler = async (event) => {
    event.preventDefault();

    // document.location.replace('/');
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

    let params = new URLSearchParams(location.search);
    var id = params.get('id')

    const fileItem = document.getElementById("img");
    const formData = new FormData();  
    formData.append("file", fileItem.files[0]);

    fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
      method: "POST",
      headers: {
        "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIyMWRkYzQyNi0wYmJjLTQ2NTctYTExMi1kYzU3MGUzOTdhY2QiLCJlbWFpbCI6ImF2YWxvc2VyaWNrOTdAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImQyMTk4YWZhYTkyZGJjZjc2NjRiIiwic2NvcGVkS2V5U2VjcmV0IjoiZjEyMzUxNjA3MGIwMWE4NjM5NmU3ZGFkYTlkZWRhZmQxMzY5MzQ4M2Q2YmIzMDBlYTA3MTliZDEzMWVmOTlmOCIsImlhdCI6MTY3NTY0MTA4NX0.92R0vcUm6qttDNwnu7U0wgg1f9d-HpLgP7zRIWndE60'
      },
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        const ImgHash = data.IpfsHash;
        console.log(ImgHash);
        fetch('/api/users/addrecipe', {
          method: 'POST',
          body: JSON.stringify({ recipeName, description, ingredients, servings, preptime, cooktime, totaltime, instructions, allergens, difficulty, id, ImgHash}),
          headers: { 'Content-Type': 'application/json' },
        }).then(()=> {

          document.location.replace('/');
        });
      })
      .catch(error => {
        console.error(error);
      });
    
      };
  
  // event listener on sign up button submit
form.addEventListener('click', addrecipeFormHandler);
