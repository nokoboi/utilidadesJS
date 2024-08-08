document.getElementById('toggleMenu').addEventListener('click', function () {
    let myNav = document.getElementById('myNavbar');
    console.log(myNav.className)

    if (myNav.className === 'navbar') {
        myNav.className += " responsive"
    } else {
        myNav.className = 'navbar'
    }
})

// Accedemos a las imagenes con querySelectorAll, esto lo que hace es crear un array
const imagenesPequenas = document.querySelectorAll('.imgPequena img');
// console.log(imagenesPequenas)

// Accedemos al contenedor de imágenes
const contenedorImg = document.getElementById('contenedorImg');

// Agrega un event listener a cada imagen pequeña
imagenesPequenas.forEach((imagen) => {
    imagen.addEventListener('click', function (event) {
        event.preventDefault(); // Previene la acción por defecto del enlace

        // Clona la imagen para poder moverla sin eliminarla del original, clonenode hace una copia exacta
        let clon = { ...contenedorImg }
        console.log(clon)
        const imagenClonada = imagen.cloneNode(true);
        console.log(imagenClonada)

        imagenClonada.style.width = '100%';
        imagenClonada.style.height = '100%';

        // Reemplazamos el contenido del contenedor
        contenedorImg.innerHTML = '';

        // Movemos la imagen clonada al contenedor
        contenedorImg.appendChild(imagenClonada);
    });
});


// MODAL
const modal = document.getElementById('imageModal');
const modalImg = document.querySelector('.modal-image'); // Devuelve uno solo
const thumbnails = document.querySelectorAll('.thumbnail'); // Devuelve un array con todo lo que cumpla con esa clase, aunque fuese uno
const closeBtn = document.querySelector('.close');

// Bucle para las miniaturas (thumbnails)
thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
        modal.style.display = 'block'; // Mostramos el modal
        modalImg.src = thumb.getAttribute('data-full');
        modalImg.alt = thumb.alt;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Cerramos el modal
})

// Si hacemos click con el modal abierto en cualquier parte de la pantalla, que se cierre
window.onclick = (event) => {
    if (event.target.classList.contains('modal-content')) {
        modal.style.display = 'none'; // Cerramos el modal
    }
}

