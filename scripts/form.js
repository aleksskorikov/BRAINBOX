


document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
   
    const email = document.querySelector('#email').value;
    const login = document.querySelector('#Login').value;
    const password = document.querySelector('#password').value;
    let formData = {
        email: email,
        login: login,
        password: password
    };

    let storedData = JSON.parse(localStorage.getItem('formDataArray')) || [];
    storedData.push(formData);
    localStorage.setItem('formDataArray', JSON.stringify(storedData));
    console.log(storedData);
});