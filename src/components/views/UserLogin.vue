<template>
  <div>
    <h1>Titulo de login</h1>
    <form>
      <label> Usuario o contrasena</label>
      <input type="text" v-model="user">
      <label > inserte la conrasena</label>
      <input type="password" v-model="password">
      <button @click="veryfylogin">enviar</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'UserLogin',
  data () {
    return {
      user: null,
      password: null
    }
  },
  methods: {
    veryfylogin: function () {
      // var logindata = {'User': this.user, 'Password': this.password}
      var myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      var raw = JSON.stringify({
        'user': this.user,
        'password': this.password
      })

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw
      }

      fetch('https://localhost:7253/api/innerlogin', requestOptions)
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.log('error camniar el errror', error))
    }
  }
}
</script>
<style scoped>
div {
  width: 60%;
  max-width: 300px;
  height: auto;
  margin: auto;
  background: rgb(198, 202, 176);
  margin-top: 200px;
  padding: 20px;
  border-radius: 10px;
}
form {
  text-align: left;
  background: rgb(196, 196, 230);
  border: rgb(52, 54, 52);
  border-radius: 8px;
  color: white;
  width: auto;
  margin: auto;
  padding: 20px;
  display: grid;
}
button {
  display: block;
  margin: 25px;
  border-radius: 9px;
  background: white;
  box-shadow: 2px 2px 30px 5px rgb(200, 207, 211);
  border: solid rgb(121, 122, 114) 1px;
}
button:hover {
  box-shadow: 2px 2px 30px 5px rgb(132, 217, 164);
  background: rgb(155, 255, 194);
  border-color:  rgb(79, 244, 142);
}

</style>
