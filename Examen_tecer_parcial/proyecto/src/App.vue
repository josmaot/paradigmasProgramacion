<template>
  <div>
    
    <h3>Registro de Leds</h3>
    <form @submit.prevent="estatusEditar ? actualizar() : crearLed()">
      <div>
        <input type="text" v-model="lugar" placeholder="Lugar">
      </div>
      <br>
      <div>
        <select name="selectTipo" v-model="tipo">
          <option value="0" selected >Luz calida</option>
          <option value="1" >Luz Fria</option>
        </select>
      </div>
      <br>
      <div>
        <select name="selectStatus" v-model="status">
          <option value="0" selected >Apagado</option>
          <option value="1" >Encendido</option>
        </select>
      </div>
      <br>
      <div>
        
        <button class="btn btn-primary js-scroll-trigger" type="submit">{{estatusEditar ? "Actualizar" : "Agregar"}}</button>
      </div>
      <div>
        <button class="btn btn-primary js-scroll-trigger"  v-if="estatusEditar" @click="cancelaEdicion()">Cancelar</button>
      </div>
    </form>
    <br>
    
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Lugar</th>
          <th>Tipo</th>
          <th>Status</th>
          <th>Boton Eliminar</th>
          <th>Boton Editar</th>
        </tr>
      </thead>
      
      <tr v-for="led in leds" :key="led.lugar">
        <td>{{led.lugar}}</td>
        <td>{{led.tipo  == 0 ? "foco calido": "foco frio"}} </td>
        <td>{{led.status  == 0 ? "Apagado" : "Encendido"}}</td>
        <td><button class="btn btn-primary js-scroll-trigger" @click="borrarLed(led)">Eliminar</button></td>
        <td><button class="btn btn-primary js-scroll-trigger" @click="seleccionar(led)">Editar</button></td>
      </tr>
    </table>
  </div>
</template>

<script>

import {db} from './firebase'
export default {
  name: 'App',
  data(){
    return {
      leds:[],
      id: "",
      lugar: "",
      tipo: "",
      status: "",
      cargando: false,
      estatusEditar: false,
    }
  },
  created(){
    this.listarLeds();
  },
  methods:{
    async listarLeds(){
      this.cargando = true;
      const data = await db.collection("leds").get();
      this.leds = data.docs.map(doc => ({
        id: doc.id, ...doc.data()
      }))
      this.cargando = false;
      console.log(this.leds)
    },
    async crearLed(){
      await db.collection('leds').add({
        lugar: this.lugar,
        tipo: this.tipo,
        status: this.status,
      })
      this.lugar = "";
      this.tipo = "";
      this.status = "";
      this.listarLeds();
    },
    async borrarLed(led){
      if (confirm(`¿Estás seguro que desear eliminar el foco de: ${led.lugar}?`)){
        await db.collection('leds').doc(led.id).delete();
        this.listarLeds();
      }
    },
    seleccionar(led){
      this.estatusEditar = true;
      this.id = led.id;
      this.lugar = led.lugar;
      this.tipo = led.tipo;
      this.status = led.status;
    },
    async actualizar(){
      await db.collection('leds').doc(this.id).set({
        lugar: this.lugar,
        tipo: this.tipo,
        status: this.status
      })
      this.estatusEditar = false;
      this.id = ""
      this.lugar = ""
      this.tipo = ""
      this.status = ""
      this.listarLeds();
    },
    cancelaEdicion(){
      this.estatusEditar = false;
      this.id = ""
      this.lugar = ""
      this.tipo = ""
      this.status = ""
    }
  },
}
</script>