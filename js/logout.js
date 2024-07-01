const logout = document.getElementById('logout');

const closeSession = () => {
  sessionStorage.clear();
  window.location.href = '../pages/login.html';
}

logout.addEventListener('click', closeSession);