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