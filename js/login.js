const loginForm = document.getElementById("login-form");

const createSession = (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  sessionStorage.setItem("username", username);
  sessionStorage.setItem("phone", phone);
  sessionStorage.setItem("address", address);
  sessionStorage.setItem("email", email);
  sessionStorage.setItem("password", password);
  window.location.href = "../pages/dashboard.html";
};

loginForm.addEventListener("submit", createSession);
