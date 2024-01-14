"use strict";



function previewImage() {
    const fileInput = document.querySelector('#formImage');
    const preview = document.querySelector('.user-foto');
    preview.innerHTML = '';

    let files = fileInput.files;

    if (files.length > 0) {
        let image = document.createElement('img');
        image.src = URL.createObjectURL(files[0]);
        image.classList.add("foto");
        preview.appendChild(image);

        let username = "current_user";
        let userImageKey = username + "image";
        localStorage.setItem(userImageKey, image.src);

        alert('Фотография добавлена успешно и сохранена для пользователя!');
    }
};

const singlup = document.querySelector('#signupForm');
if (singlup) {
    singlup.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.querySelector('#email').value;
        const login = document.querySelector('#Login').value;
        const password = document.querySelector('#password').value;

        let username = "current_user";

        let formData = {
            email: email,
            login: login,
            password: password,
            username: username 
        };

        let storedData = JSON.parse(localStorage.getItem('formDataArray')) || [];
        storedData.push(formData);
        localStorage.setItem('formDataArray', JSON.stringify(storedData));
        console.log(storedData);
    });
};


const singlin = document.querySelector('#signinForm');

if (singlin) {
    singlin.addEventListener('submit', function (event) {
        event.preventDefault();

        const login = document.querySelector('#Loginin').value;
        const password = document.querySelector('#passwordin').value;
        let storedLoginData = JSON.parse(localStorage.getItem('formDataArray')) || [];
        let user = storedLoginData.find(function (data) {
            return data.login === login && data.password === password;
        });

        if (user) {
            sessionStorage.setItem('formDataArray', JSON.stringify(user));

            let newPageURL = 'http://127.0.0.1:5501/index.html';
            window.open(newPageURL);
        } else {
            alert('Невірний логін або пароль');
        }
    });
};


document.addEventListener('DOMContentLoaded', function () {
    let currentUser = JSON.parse(sessionStorage.getItem('formDataArray'));

    if (currentUser) {
        const login = document.querySelector("#name");
        const email = document.querySelector("#email");
        login.innerHTML = `${currentUser.login}`;
        email.innerHTML = `${currentUser.email}`;

        let username = currentUser.username;
        let userImageKey = username + "image";
        let savedImage = localStorage.getItem(userImageKey);

        // if (savedImage) {
        //     const preview = document.querySelector('#user-foto');
        //     let image = document.createElement('img');
        //     image.src = savedImage;
        //     image.classList.add("foto");
        //     preview.appendChild(image);
        // } else {
        //     console.log('У вас немає фото');
        // }
    }
});

const exitBtn = document.querySelector(".exit");
const dropMenu = document.querySelector(".drop__menu");

if (exitBtn) {   
    exitBtn.addEventListener("click", () => {
        dropMenu.style.display = "block";
    });    
};

dropMenu.addEventListener("click", () => {
    dropMenu.style.display = "none";
});





    

