document.getElementById('toggleMenu').addEventListener('click',function (){
    let myNav = document.getElementById('myNavbar');
    console.log(myNav.className)

    if(myNav.className === 'navbar'){
        myNav.className += " responsive"
    }else{
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
        let clon = {...contenedorImg}
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


