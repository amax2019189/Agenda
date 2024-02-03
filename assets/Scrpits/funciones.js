const guardarContacto = (db, contacto) =>{
    db.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = '../Pages/agenda.html'

}

const cargarContactos = (db) =>{
    let claves = Object.keys(db)
    console.log(claves)
    for(clave of claves){
        let contacto = JSON.parse(db.getItem(clave))
        console.log(contacto.id)
    }
}