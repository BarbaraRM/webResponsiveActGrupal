document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.getAttribute('data-page');

    // Configurar el evento click para ambos botones
    setupRedirectToLogin();
});

function setupRedirectToLogin() {
    const loginButton = document.getElementById('login-button');
    const logoutButton = document.getElementById('logout-link');

    if (loginButton) {
        loginButton.addEventListener('click', redirectToLogin);
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', redirectToLogin);
    }
}

function redirectToLogin(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del botón

    const redirectUrl = '/pages/login.html';
    window.location.href = redirectUrl;
}
