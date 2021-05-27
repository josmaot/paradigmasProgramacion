const buyHelmet = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("Se añadió el casco al inventario.")
      //reject("Sin fondos suficientes.")
    },1000)
  })
  
  const buyGloves = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("Se añadieron los guantes al inventario.")
      //reject("Sin fondos suficientes.")
    },2000)
  })
  
  const rideBicycle = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("Paseas en la bicicleta.")
      //reject("No sabes andar en bici :/")
    },8000)
  })
  
  const strolling = () => {
    buyHelmet
    .then(msgHelmet=>{
      console.log(msgHelmet)
      return buyGloves;
    })
    .then(msgGloves=>{
      console.log(msgGloves)
      return rideBicycle;
    })
    .then(msgRide=>{
      console.log(msgRide)
    })
    .catch(error=>{
      console.log(error);
    })
    .finally(()=> console.log("Fin del paseo."))
  }
  
  strolling();