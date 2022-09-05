// List of objects with user information
const users = [
    { id: 0, name: "Trude", age: 77 },
    { id: 1, name: "Simen", age: 85 },
    { id: 2, name: "Lars", age: 99 },
    { id: 3, name: "Ali", age: 34 },
    { id: 4, name: "Finn", age: 60 },
    { id: 5, name: "Kåre", age: 70 },
    { id: 6, name: "Hanne", age: 20 },
    { id: 7, name: "Åse", age: 21 },
    { id: 8, name: "Anne", age: 6 },
    { id: 9, name: "Amanda", age: 31 },
    { id: 10, name: "Morgan", age: 87 }
  ];
  
  // ul element that will contain the users
  const userUl = document.getElementById("users");
  
  const createTableUI = (users) => {
    userUl.innerHTML = null;
    userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
    for (const user of users) {
      userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
    }
  };
  
  // TODO: Hent HTML #id med getElementById
  // TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene. Du kan bruke users importert over for å hente en liste med 10 brukere
  // TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
  // TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
  // TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
  // TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)

  const nameInputElement = document.getElementById("name"); // The user name input field
  const ageInputElement = document.getElementById("age"); // The users age input field
  const filterButton = document.getElementById("filter"); // The filter button 

// Defines the function for finding one user by name
const nameSearchHandler = (e) => {
    const searchTerm = e.target.value; // Gets the input from the input element
    if (searchTerm) {
        const result = users.find(user => user.name === searchTerm); // The find method looks for a name that matches the input
        if (result) {
            createTableUI([result]); // Sends the matching name as paramenter
        }
        else {
            // Writes out this p-tagg if no match is found
            userUl.innerHTML = `<p id="error-msg">Ingen person med navnet ${searchTerm} finnes.</p>`;
        }
    }
    else {
        createTableUI(users); // If no input the whole list is re-rendered on the page
    }
}

// Defines the function for filtering age
const ageFilterHandler = () => {
    const filterAge = Number(ageInputElement.value); // Gets the value from input and converts it to number
    if (filterAge && !isNaN(filterAge)) { // Checks if the value is there and if its a number
        const newAgeArray = users.filter(user => user.age > filterAge); // Filter method that returns a list of users that passes the if test
        if (filterAge && newAgeArray.length > 0) { // Checks if the value is there and if there are any users that passed the if test
            createTableUI(newAgeArray); // Sends the new array as paramenter to the function
        }
        else{
            // Writes out this p-tagg if there are no people above the sett age 
            userUl.innerHTML = `<p id="error-msg">Ingen personer med alder over ${filterAge} år.</p>`;
        }  
    }
    else{
        createTableUI(users); // If no input the whole list is re-rendered on the page
    }
}

// Defines the main function
const main = () => {
    createTableUI(users); // Calls the createTableUI and sends the users array as a paramenter
};
  
main(); // Main function that is called when the script runs after the page loads

nameInputElement.addEventListener("keyup", nameSearchHandler); // Gives the user name input field a eventlistener 
filterButton.addEventListener("click", ageFilterHandler); // Gives the filter button a eventlistener 