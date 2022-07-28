<template>
  <div>
    <nav-bar></nav-bar>
    <li > <a href="/login">ir al login</a></li>
    <li> <a href="/store">ir al store</a></li>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'landing-view',
  components: {NavBar},
  data () {
    return {
      mensaje: 'nombre de la persona'
    }
  }
}
</script>

<style scoped>
template {
  background: gray;
  border: 1px rgba(0, 0, 0, 0.35);
}
</style>
