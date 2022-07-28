<template>
  <div>
    <h1>aca va el nuevo stores</h1>
    <h1>{{this.$store.state.msg}}</h1>
    <input type="text" v-model="listainput">
    <button @click="cambiartexto">cambiar el texto</button>
  </div>
</template>
<script>

export default {
  name: 'storetest',
  data () {
    return {
      listainput: null
    }
  },
  methods: {
    cambiartexto () {
      this.$store.dispatch('changemsj', this.listainput)
    }
  }
}
</script>
