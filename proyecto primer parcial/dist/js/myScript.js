
const cambiarMesa = (mesa_id) => {
    var hoy = new Date();
    var horas = hoy.getHours();
    var minutos = hoy.getMinutes();

    let mesa = document.getElementById("mesa" + mesa_id);
    let total = document.getElementById("total" + mesa_id);
    let horaInicio = document.getElementById("horaInicio" + mesa_id);
    let horaFin = document.getElementById("horaFin" + mesa_id);

    if (mesa.src.match("../assets/img/billarOff")) {
        mesa.src = "../dist/assets/img/billarOn.png"; //Cambiar inmagen 


        if (parseInt(minutos) < 10) //formato para mostrar la hora 
            horaInicio.innerHTML = horas + ":0" + minutos;
        else
            horaInicio.innerHTML = horas + ":" + minutos;

        horaFin.innerHTML = "";
        total.innerHTML = "";

    }
    else {
        if (mesa.src.match("../dist/assets/img/billarOn.png")) {
            mesa.src = "../dist/assets/img/billarOff.png"; //Cambiar inmagen 
            if (parseInt(minutos) < 10) //formato para mostrar la hora 
                horaFin.innerHTML = horas + ":0" + minutos;
            else
                horaFin.innerHTML = horas + ":" + minutos;
    
            precioFinal(mesa_id);
        }
    }
}

const precioFinal = (mesa_id) => {
    var hoy = new Date();
    var horas = hoy.getHours();
    var minutos = hoy.getMinutes();
    var costoXMin = parseFloat(50 / 60); //50 por hora; 50/60 precio por minuto

    let total = document.getElementById("total" + mesa_id);
    let horaInicio = document.getElementById("horaInicio" + mesa_id);

    //Proceso para el precio al final
    var horaIni = horaInicio.innerHTML.split(":");
    var minUsados = 0;
    if (parseInt(horas) > parseInt(horaIni[0])) {
        minUsados = parseInt(minutos) + (60 - horaIni[1]);
    } else {
        minUsados = parseInt(minutos) - parseInt(horaIni[1]); //Minutos utilizados
    }
    var costoTotal = parseFloat(minUsados) * parseFloat(costoXMin); //Costo total es igual a los minutos utilizados por el costo por minuto
    total.innerHTML = "$ " + Math.round(costoTotal);
    
}

CONST = actualizarTotal = () => {
    CONST = actualizar = () => {
        
        for(var i = 1; i <=6; i++){
            let mesa = document.getElementById("mesa" + i);
            if(mesa.src.match("../assets/img/billarOn.png"))
                precioFinal(i);
        }
        
    }
    
    return setInterval(actualizar,1000);
}

const HORA = () => {
    // Constante que almacena el id del elemento donde
    // se va a mostrar el reloj

    const ID_ELEMENT = document.getElementById("reloj");

    // Función que añade un cero a la izquierda
    // a la hora, minutos y segundos cuando el
    // valor de estos es inferior a 10 
    const CERO = n => n = n < 10 ? "0" + n : n;
    let hora, minutos, segundos, meridiano;

    // Funcion que retorna el Reloj
    const RELOJ = () => {
        const DATE = new Date();
        hora = DATE.getHours();
        minutos = DATE.getMinutes();
        segundos = DATE.getSeconds();

        // Determinar el meridiano
        meridiano = hora < 12 ? "am" : "pm";

        // Dar formato de 12 horas ya que por defecto el formato es de 24 horas
        hora = hora == 0 ? 12 : hora || hora > 12 ? hora -= 12 : hora;

        return (
            ID_ELEMENT.textContent =
            `${CERO(hora)}:${CERO(minutos)}:${CERO(segundos)} ${meridiano}`
        );
    }

    // Llama a la función RELOJ cada segundo
    // para que se vaya actualizando la hora
    return setInterval(RELOJ, 1000);
}

// Llama a la funcion HORA cuando el DOM se haya cargado
document.addEventListener("DOMContentLoaded", HORA);
document.addEventListener("DOMContentLoaded", actualizarTotal() );