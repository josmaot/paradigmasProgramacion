const buyHelmet = () =>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("Se añadió el casco al inventario.")
      //reject("Sin fondos suficientes.")
    },1000)
  })
}

const buyGloves = () =>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("Se añadieron los guantes al inventario.")
      //reject("Sin fondos suficientes.")
    },2000)
  })
}

const rideBicycle = () =>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("Tomas un paseo en bicicleta.")
      //reject("No sabes andar en bici :/.")
    },8000)
  })
}

const strolling = async () => {
  const helmet= await buyHelmet();
  const gloves = await buyGloves();
  const stroll = await rideBicycle();
  return ([helmet,gloves,stroll]);
}

strolling().then(res=> console.log(res));