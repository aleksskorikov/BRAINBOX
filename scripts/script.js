"use strict";

// фото


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
}
};



const singlup = document.querySelector('#signupForm');
if (singlup) {
    singlup.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const email = document.querySelector('#email').value;
    const login = document.querySelector('#Login').value;
        const password = document.querySelector('#password').value;
        const image = document.querySelector(".user-foto");
    let formData = {
        email: email,
        login: login,
        password: password,
        img: image
    };

    let storedData = JSON.parse(localStorage.getItem('formDataArray')) || [];
    storedData.push(formData);
    localStorage.setItem('formDataArray', JSON.stringify(storedData));
    console.log(storedData);
})
};


// const singlin = document.querySelector('#signinForm');
// if (singlin) {
//     singlin.addEventListener('submit', function (event) {
//     event.preventDefault();

//     const login = document.querySelector('#Loginin').value;
//     const password = document.querySelector('#passwordin').value;
//     let storedLoginData = JSON.parse(localStorage.getItem('formDataArray')) || [];
//     let isMatch = storedLoginData.some(function (data) {
//         return data.login === login && data.password === password;
//     });

//         if (isMatch) {
//         localStorage.setItem('formDataArray', JSON.stringify(isMatch));
//         let newPageURL = 'http://127.0.0.1:5501/index.html';
//         window.open(newPageURL, '_blank');
//             // console.log(login);
//     } else {
//         alert('Invalid login or password. Please try again.'); 
//     }
// })
// };

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
            localStorage.setItem('formDataArray', JSON.stringify(user));

            let newPageURL = 'http://127.0.0.1:5501/index.html';
            window.open(newPageURL);
        } else {
            alert('Invalid login or password. Please try again.');
        }
    });
};

document.addEventListener('DOMContentLoaded', function () {
    let currentUser = JSON.parse(localStorage.getItem('formDataArray'));

    if (currentUser) {
        const login = document.querySelector("#name");
        const email = document.querySelector("#email");
        login.innerHTML = `${currentUser.login}`;
        email.innerHTML = `${currentUser.email}`;
        console.log('User Name:', currentUser.login);
        console.log('User Email:', currentUser.email);
    } else {
        console.log('User not authenticated.');
    }
});



