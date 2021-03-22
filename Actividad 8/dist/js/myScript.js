const bienvenida = (nombre,sexo) => {
    
    const nom = document.getElementById(nombre).value;
    const sex = document.getElementById(sexo).value;
    const mensaje = `${sex==1 ? 'Bienvenido' : 'Bienvenida'} ${nom}.`
    document.getElementById("mostrarMensaje").value = mensaje;
}
