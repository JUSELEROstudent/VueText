<template>
  <div class="marco">
    <div><input v-model="nombre" v-if="edit" ><span v-if="!edit">{{ objectperson.summary }} <button class="btn btn-danger" >eliminar</button></span></div>
    <div>
      <input v-model="apellido" v-if="edit" ><button v-if="edit" @click="editar(apellido)">Cancelar</button>
      <span v-if="!edit">{{objectperson.temperatureC}}
      <button class="btn btn-warning" @click="editar(objectperson.summary)">editar</button>
    </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'api-test',
  data () {
    return {
      nombre: null,
      apellido: null,
      edit: false
    }
  },
  props: ['objectperson'],
  methods: {
    editar (valor) {
      this.nombre = valor
      this.edit = !this.edit
    }
  }

}
</script>
<style scoped>
.marco {
  width: 18%;
  background: white;
  border-radius: 5px;
  border: 2px solid gray ;
  margin: 5px;
}
.marco input{
  max-width: 60px;
}
</style>
