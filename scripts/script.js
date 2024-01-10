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
}