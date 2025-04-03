document.addEventListener("DOMContentLoaded", function () { 
    const boton = document.querySelector(".button-toggle"); 
    const menu = document.querySelector(".menu"); 

    boton.addEventListener("click", function () { 
        menu.classList.toggle("open"); 
    });
});