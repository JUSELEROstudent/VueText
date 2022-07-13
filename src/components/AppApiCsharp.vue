<template>
  <div class="marco">
    <div>
      <input v-model="nombre" v-if="edit" ><button v-if="edit" @click="guardar(nombre,apellido)">Guardar</button>
      <span v-if="!edit" @input="guardar">{{ objectperson.summary }}
      <button class="btn btn-danger" >eliminar</button>
    </span>
    </div>
    <div>
      <input v-model="apellido" v-if="edit" ><button v-if="edit" @click="editar(apellido)">Cancelar</button>
      <span v-if="!edit">{{objectperson.temperatureC}}
      <button class="btn btn-warning" @click="editar(objectperson.summary,objectperson.temperatureC)">editar</button>
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
    editar (sumario, temperature) {
      this.nombre = sumario
      this.apellido = temperature
      this.edit = !this.edit
    },
    guardar (lastname, nombre) {
      this.$emit('updateup', (lastname, nombre))
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
