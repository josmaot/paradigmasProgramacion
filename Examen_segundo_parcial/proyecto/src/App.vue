<template>
  <div>
    
    <h3>Registro de libros</h3>
    <form @submit.prevent="estatusEditar ? actualizar() : crearLibro()">
      <div>
        <input type="text" v-model="titulo" placeholder="Título">
      </div>
      <br>
      <div>
        <input type="text" v-model="autor" placeholder="Autor">
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
          <th>Título</th>
          <th>Autor</th>
          <th>Boton Eliminar</th>
          <th>Boton Editar</th>
        </tr>
      </thead>
      <tr v-for="libro in libros" :key="libro.titulo">
        <td>{{libro.titulo}}</td>
        <td>{{libro.autor}}</td>
        <td><button class="btn btn-primary js-scroll-trigger" @click="borrarLibro(libro)">Eliminar</button></td>
        <td><button class="btn btn-primary js-scroll-trigger" @click="seleccionar(libro)">Editar</button></td>
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
      libros:[],
      id: "",
      titulo: "",
      autor: "",
      cargando: false,
      estatusEditar: false,
    }
  },
  created(){
    this.listarLibros();
  },
  methods:{
    async listarLibros(){
      this.cargando = true;
      const data = await db.collection("proyecto2").get();
      this.libros = data.docs.map(doc => ({
        id: doc.id, ...doc.data()
      }))
      this.cargando = false;
      console.log(this.libros)
    },
    async crearLibro(){
      await db.collection('proyecto2').add({
        titulo: this.titulo,
        autor: this.autor,
      })
      this.titulo = "";
      this.autor = "";
      this.listarLibros();
    },
    async borrarLibro(libro){
      if (confirm(`¿Estás seguro que desear eliminar el libro ${libro.titulo}?`)){
        await db.collection('proyecto2').doc(libro.id).delete();
        this.listarLibros();
      }
    },
    seleccionar(libro){
      this.estatusEditar = true;
      this.id = libro.id;
      this.titulo = libro.titulo;
      this.autor = libro.autor;
    },
    async actualizar(){
      await db.collection('proyecto2').doc(this.id).set({
        titulo: this.titulo,
        autor: this.autor
      })
      this.estatusEditar = false;
      this.id = ""
      this.titulo = ""
      this.autor = ""
      this.listarLibros();
    },
    cancelaEdicion(){
      this.estatusEditar = false;
      this.id = ""
      this.titulo = ""
      this.autor = ""
    }
  },
}
</script>