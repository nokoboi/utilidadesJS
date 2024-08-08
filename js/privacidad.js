const modal = document.getElementById('formModal');
const closeBtn = document.querySelector('.cerrarModal');
let checbox = document.getElementById('idCheck');
let pCheckbox = document.getElementById('privacidadCheckbox');
const errorBoton = document.getElementById('errorButton')
const btnEnvio = document.getElementById('btnEnviar')

const overlay = document.getElementById('modalOverlay');

console.log(checbox.checked)

pCheckbox.addEventListener('click', () => {
    modal.style.display = 'block'
})

btnEnvio.addEventListener('click',()=>{
    if(checbox.checked){
        console.log('Aceptada la politica')
        errorBoton.textContent = ''
    }else{
        errorBoton.textContent = 'Por favor acepta la politica de privacidad'
    }
})


closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Cerramos el modal
})
