const app = Vue.createApp({
  data(){
      return{
          materia: "Paradigmas de programacion",
          semestre: "Sexto semestre",
          carrera: "Ciencias de la computacion",
          productos: [{nombre: "Teclados", cantidad: 30},
                      {nombre: "Mouse", cantidad: 23},
                      {nombre: "RAMs", cantidad: 12},],
          producto:""
      }
  },
  methods:{
      agregarProducto(){
          this.productos.push({nombre:this.producto,cantidad: 0})
          this.producto = ""
      }
  },
  computed:{
      voltearTexto(){
          return this.producto.split("").reverse().join()
      },
      total(){
          // let total = 0
          // for(producto of this.producto){
          //     total = total+producto.cantidad
          // }
          // return total;

          return this.productos.reduce((contador, product) => contador+product.cantidad,0)
      }
  }
})

const vm = app.mount('#app')