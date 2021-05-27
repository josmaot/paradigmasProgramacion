nFocos=0;
valortemp = 29;
valorLuz = 700;
luz = document.getElementById("luz"); 
temp = document.getElementById("temp"); 
focos= document.getElementById("focos"); 

//creamos una referencia a la base de datos para enviar el valor de la pagina en que nos encontramos
//dbluz = firebase.database().ref("home/sensores").child("sensorLuz");
dbluz = firebase.database().ref("luz");

dbTemp = firebase.database().ref("Temp");
dbFoco1 = firebase.database().ref("Led1");
dbFoco2 = firebase.database().ref("Led2");
dbFoco3 = firebase.database().ref("Led3");
dbFoco4 = firebase.database().ref("Led4");
// llamamos los valores cadavez que un cambio  existe en la base de datos

dbluz.on('value', function(snap){
  luz.innerText = snap.val() // enviar los valores a html
  valorluz = snap.val(); // usar los valores en la funcion
  console.log(luz)
  
});

dbTemp.on('value', function(snap){
  temp.innerText =  snap.val()
  valortemp = snap.val();
  console.log(temp)
  
});

dbFoco1.on('value', function(snap){
    if(snap.val()==1){
        nFocos += 1;
    }
    else if(snap.value==0){
        nFocos -= 1;
    }
    focos.innerText = nFocos;
    
    
  });

  dbFoco2.on('value', function(snap){
    if(snap.value==1){
        nFocos += 1;
    }
    else if(snap.value==0){
        nFocos -= 1;
    }
    focos.innerText = nFocos;
    
    
  });

  dbFoco3.on('value', function(snap){
    if(snap.value==1){
        nFocos += 1;
    }
    else if(snap.value==0){
        nFocos -= 1;
    }
    focos.innerText = nFocos;
    
    
  });
  dbFoco4.on('value', function(snap){
    if(snap.value==1){
        nFocos += 1;
    }
    else if(snap.value==0){
        nFocos -= 1;
    }
    focos.innerText = nFocos;
    
    
  });

