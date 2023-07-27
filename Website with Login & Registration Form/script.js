const employerLoginBtn = document.querySelector("#employer-login");
const employeeLoginBtn = document.querySelector("#employee-login");
const home = document.querySelector(".home");
const formContainer = document.querySelector(".form_container");
const formCloseBtn = document.querySelector(".form_close");
const signupBtn = document.querySelector("#signup");
const loginBtn = document.querySelector("#login");
const pwShowHide = document.querySelectorAll(".pw_hide");

// Function to show the employer login form
function showEmployerLoginForm() {
  home.classList.add("show");
}

// Function to show the employee login form
function showEmployeeLoginForm() {
  home.classList.add("show");
}

// Function to hide the login form
function hideLoginForm() {
  home.classList.remove("show");
}

// Function to toggle password visibility
function togglePasswordVisibility(icon) {
  let getPwInput = icon.parentElement.querySelector("input");
  if (getPwInput.type === "password") {
    getPwInput.type = "text";
    icon.classList.replace("uil-eye-slash", "uil-eye");
  } else {
    getPwInput.type = "password";
    icon.classList.replace("uil-eye", "uil-eye-slash");
  }
}

employerLoginBtn.addEventListener("click", showEmployerLoginForm);
employeeLoginBtn.addEventListener("click", showEmployeeLoginForm);
formCloseBtn.addEventListener("click", hideLoginForm);

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => togglePasswordVisibility(icon));
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});
