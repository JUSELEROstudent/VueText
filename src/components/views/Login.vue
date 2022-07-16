<template>
  <div>
    se crea una vista para el login
    <nuevo-formulario></nuevo-formulario>
    <form >
    <div class="mb-3">
    <label  class="form-label">Usuario</label>
    <input  class="form-control" v-model="Username">
    </div>
    <div  class="mb-3">
    <label  class="form-label">Contrasena</label>
    <input type="password" class="form-control" v-model="Contrasena">
    </div>
    </form>
    <button class="btn btn-primary" v-on:click="authsesion">enviar</button><button href="/landing">cancelar</button>
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
  },
  methods: {
    authsesion: function () {
      var userdata = {
        User: this.Username,
        Password: this.Contrasena
      }
      fetch('https://localhost:7253/api/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userdata)

      })
        .then(response => response.json())
        .then(data => console.log(data))
    }
  }
}
</script>
<style scoped>
div {
  background: rgba(129, 154, 154, 0.401);
  margin: auto;
  width: 80%;
}

</style>
