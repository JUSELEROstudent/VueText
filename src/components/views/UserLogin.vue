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
      var logindata = {user: this.user, password: this.password}
      fetch('https://localhost:7253/api/login', {
        mode: 'no-cors',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        data: JSON.stringify(logindata)
      })
    }
  }
}
</script>
<style scoped>
div {
  width: 60%;
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
  width: 80%;
  margin: auto;
  padding: 20px;
  display: block;
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
