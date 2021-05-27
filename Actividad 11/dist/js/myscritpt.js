const toDo = (activity, duration, callback) => {
    setTimeout(()=>{
      callback(activity)
    }, duration)
  }
  toDo("Levantarse",5000,(activity)=>{
    console.log(`Realizando a tarea ${activity}`)
    toDo("Tender cama",3000,(activity)=>{
      console.log(`Realizando a tarea ${activity}`)
      toDo("Bañarse",3000,(activity)=>{
        console.log(`Realizando a tarea ${activity}`)
        toDo("Tomar clase de paradigmas",5000,(activity)=>{
          console.log(`Realizando a tarea ${activity}`)
          toDo("Desayunar",8000,(activity)=>{
            console.log(`Realizando a tarea ${activity}`)
            toDo("Jugar videojuegos",10000,(activity)=>{
              console.log(`Realizando a tarea ${activity}`)
            })
          })
        })
      })
    })
  })