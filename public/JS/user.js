if (document.getElementById('registerForm')) {
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const userReg = {
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        };
        console.log("Register attempt:", userReg);
    });
}

if (document.getElementById('loginForm')) {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const userLogin = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        };
        console.log("Login attempt:", userLogin);
    });
}
