function showLoginForm() {
  var loginForm = document.getElementById("login-form");
  var signupForm = document.getElementById("signup-form");
  loginForm.style.display = "block";
  signupForm.style.display = "none";
}

function showSignupForm() {
  var loginForm = document.getElementById("login-form");
  var signupForm = document.getElementById("signup-form");
  loginForm.style.display = "none";
  signupForm.style.display = "block";
}

function showAlert() {
  alert("you are successfully logged in");
}


const animals = [
  { name: "African Elephant", description: "The African Elephant is the largest land mammal, characterized by its long trunk, large ears, and tusks." },
  { name: "Tiger", description: "The Bengal Tiger is a powerful carnivorous big cat. It has a distinctive orange coat with black stripes and is known for its strength and agility." },
  { name: "Lion", description: "The lion is a large carnivorous mammal."},
  { name: "giraffe", description: "The giraffe is a tall African mammal." },
];

// Function to perform the search
function searchAnimals() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const searchResults = animals.filter(animal => {
    const name = animal.name.toLowerCase();
    const description = animal.description.toLowerCase();
    return name.includes(query) || description.includes(query);
  });

  displayResults(searchResults);
}

// Function to display the search results
function displayResults(results) {
  const resultContainer = document.getElementById("result");
  resultContainer.innerHTML = ""; // Clear previous results

  if (results.length === 0) {
    resultContainer.innerText = "No matching animals found.";
  } else {
    results.forEach(animal => {
      const resultElement = document.createElement("div");
      resultElement.classList.add("search-result");
      resultElement.innerHTML = `<h3>${animal.name}</h3><p>${animal.description}</p>`;
      resultContainer.appendChild(resultElement);
    });
  }
}
const searchForm = document.getElementById("search-form");

searchForm.addEventListener("submit", function(e){
  e.preventDefault();
  searchAnimals();

})

