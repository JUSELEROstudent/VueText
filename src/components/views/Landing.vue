<template>
  <div>
    <nav-bar></nav-bar>
    Bienvenido da click para seguir al login
    <a href="/login">ACA</a>
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
