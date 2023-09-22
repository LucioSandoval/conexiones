function cambiarNombre(evento, ) {
    evento.preventDefault();
    let nombre = document.querySelector('.name');
    nombre.innerText = 'Lucio Sandoval';
}
function removeUsuario(element, opcion){
    let usuario = element.closest('.contenedor2-users');
    usuario.remove();
    let conexiones = document.querySelector('.numero2').innerText;
    conexiones --;
    document.querySelector('.numero2').innerText = conexiones;
    if(opcion==='aceptar'){
        let totalConexiones = document.querySelector('.numero500').innerText;
        totalConexiones++;
        document.querySelector('.numero500').innerText = totalConexiones;
    }
}