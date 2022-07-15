<template>
  <div>
    se crea una vista para el login
    <nuevo-formulario></nuevo-formulario>
    <form >
    <label >Usuario</label>
    <input v-model="Username">
    <label >Contrasena</label>
    <input v-model="Contrasena">
    </form>
    <button>enviar</button><button href="/landing">cancelar</button>
  </div>
</template>
<script>
import NuevoFormulario from '@/components/FormInsert.vue'

export default {
  name: 'login',
  components: {NuevoFormulario},
  data () {
    return {
      Username: null,
      Contrasena: null
    }
  }
}
</script>
<style scoped>
div {
  background: rgba(129, 154, 154, 0.401);
  margin: 20px;
  display: block;
}
</style>
