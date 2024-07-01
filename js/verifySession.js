document.addEventListener("DOMContentLoaded", function () {
  const username = sessionStorage.getItem("username");
  const phone = sessionStorage.getItem("phone");
  const address = sessionStorage.getItem("address");
  const email = sessionStorage.getItem("email");
  const password = sessionStorage.getItem("password");

  if (!username || !phone || !address || !email || !password) {
    window.location.href = "../pages/login.html";
  }
  if (window.location.pathname.includes("profile")) {
    document.getElementById("profile-username").textContent = username;
    document.getElementById("profile-phone").textContent = phone;
    document.getElementById("profile-address").textContent = address;
    document.getElementById("profile-email").textContent = email;
  }
});
