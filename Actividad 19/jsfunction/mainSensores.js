valorluz = 300;
valortemp = 25;

//creamos una referencia a la base de datos para enviar el valor de la pagina en que nos encontramos

dbluz = firebase.database().ref("home").child("sensorLuz");
dbTemp = firebase.database().ref("home").child("sensorTemp");
dbFoco1 = firebase.database().ref("Led1");
dbFoco2 = firebase.database().ref("Led2");
dbFoco3 = firebase.database().ref("Led3");
dbFoco4 = firebase.database().ref("Led4");

// llamamos los valores cadavez que un cambio  existe en la base de datos
let cocina = document.getElementsByClassName("cocina");

function actualizaFocos(){
      let val;
    dbFoco1.on('value', function(snap){
       
            cocina.style.visibility="hidden";
        
        
        
      });
      if(flag=1)
            cocina.style.visibility="hidden";
      console.log(Aqui);
}
// number of frames per second
let framePerSecond = 50;

//call the game function 50 times every 1 Sec
let loop = setInterval(actualizaFocos,1000/framePerSecond);

