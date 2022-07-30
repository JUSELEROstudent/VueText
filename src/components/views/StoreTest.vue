<template>
  <div>
    <h1>aca va el nuevo stores</h1>
    <h1>{{this.$store.state.msg}}</h1>
    <input type="text" v-model="listainput">
    <button @click="cambiartexto">cambiar el texto</button>
    <div class="div">
      <label>crear nuevo valor</label>
      <input type="text" v-model="nuevovalor">
      <button @click="agregar">agregar a la lista</button>
      <table>
        <tr v-for="item in this.$store.state.estado " :key="item">nombre:<br> {{item}} </tr>
      </table>
    </div>
  </div>
</template>
<script>

export default {
  name: 'storetest',
  data () {
    return {
      listainput: null,
      nuevovalor: null
    }
  },
  methods: {
    cambiartexto () {
      this.$store.dispatch('changemsj', this.listainput)
    },
    agregar () {
      this.$store.dispatch('agregarnuevo', this.nuevovalor)
      console.log('leggo ')
    }
  }
}
</script>
<style scoped>
 div > .div {
   display:flex ;
   flex-wrap: wrap;
   flex-direction: row;
   height: auto;
   background: rgb(128, 193, 193);
 }
 div > .div > input {
   height: 30px;
 }
 div > p {
   background: rgb(245, 244, 221);
   border: gray solid 3px;
 }
 table {
   display: block;
   flex-wrap: wrap;
   flex-direction: row;
 }
 tr {
   background: rgb(84, 180, 221);
   border: solid 8px rgb(44, 63, 65);
   border-radius: 5px;
   width: 300px;
   height: auto;
   position: relative;
   animation: movimiento 3s infinite linear ;
 }
 @keyframes example3 {
  from {background-color: red;
        border: solid rgb(57, 153, 180) 8px ;
        }
  to {background-color: yellow;
      border:rgb(85, 119, 212) 8px  ;
      border-style: dashed;}
}
@keyframes movimiento {
  0% {right: 0px;
      top: 0px;}
  25% {right: 50px;
  top: 0px;}
  50% {right: 50px;
  top: -50px;}
  75% {right: 0px;
  top: -50px;}
  100% {right: 0px;
  top: 0px;}
  }
</style>
