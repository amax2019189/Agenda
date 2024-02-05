const nombre = document.querySelector('.nombre')
const apellido = document.querySelector('.apellido')
const telefono = document.querySelector('.telefono')
const btnAgregarTarea = document.querySelector('.btn-agregar-contacto')

const db = window.localStorage

btnAgregarTarea.onclick = () => {
    let contacto = {
        id: Math.random(1,100),
        nombre: nombre.value,
        apellido: apellido.value,
        telefono: telefono.value,
    }
    
    guardarContacto(db, contacto)
}
cargarContactos(claves)