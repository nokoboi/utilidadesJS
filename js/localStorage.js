const saludoTxt = document.getElementById('saludo');
const nameInputContainer = document.getElementById('name-input-container');
const nameInput = document.getElementById('name-input');
const submitButton = document.getElementById('submit-name');
const fecha = new Date();
console.log(fecha.getHours())


function guardarNombre() {
    const name = nameInput.value.trim();
    if (name.length > 1) {
        localStorage.setItem('nombreUsuario', name)
        mostrarNombre(name);
    }
}

function mostrarNombre(name) {    
    if(fecha.getHours() > 6 && fecha.getHours()<12){
        saludoTxt.textContent = `Buenos días, ${name}`;
    }else if(fecha.getHours() >=12 && fecha.getHours()<=21){
        saludoTxt.textContent = `Buenas tardes, ${name}`;
    }else{
        saludoTxt.textContent = `Buenas noches, ${name}`;
    }

    nameInputContainer.style.display = 'none';
}

submitButton.addEventListener('click', guardarNombre);
nameInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        guardarNombre();
    }
})

// comprobar si ya hay un nombre guardado
// si hay un nombre guardado lo muestro
const nombreGuardado = localStorage.getItem('nombreUsuario');
if(nombreGuardado){
    mostrarNombre(nombreGuardado)
}


