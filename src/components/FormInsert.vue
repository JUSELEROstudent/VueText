<template>
<div>
  <form v-if="testing">
  <label >Nombre</label>
  <input v-model="KundeName">
  <label >Inserte Email</label>
  <input v-model="KundeEmail">
  <label >Inserte Edad</label>
  <input v-model="KundeCel">
  <label >Password</label>
  <input v-model="KundePassword" type="text">
  </form>
  <button v-if="testing" v-on:click="changemode">cancelar</button>
  <button class="btn btn-success" v-if="testing" v-on:click="postdata">Guardar</button>
  <button v-if="!testing" v-on:click="changemode">Crear nuevo usuario</button>
</div>
</template>
<script>

export default {
  name: 'form-newuser',
  data () {
    return {
      testing: false,
      KundeName: null,
      KundeEmail: null,
      KundeCel: null,
      KundePassword: null
    }
  },
  methods: {
    changemode: function () {
      this.testing = !this.testing
      this.KundeName = null
      this.KundeEmail = null
      this.KundeCel = null
      this.KundePassword = null
    },
    postdata: function () {
      var data = {
        'Name': this.KundeName,
        'Email': this.KundeEmail,
        'Age': this.KundeCel,
        'Password': this.KundePassword
      }
      console.log(data)
      fetch('https://localhost:7253/api/apidapper', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

      })
        .then(response => response.json())
        .then(data => console.log(data))
    }
  }
}
</script>
<style scoped>
form {
  display: inline-block;
  width: 200px;
  text-align: left;
}
</style>
