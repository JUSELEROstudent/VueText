<template>
  <div>
    <p>se debe mostrar los datos importantes del usuario logueado.</p>
  </div>
</template>

<script>

export default ({
  name: 'profile',
  data () {
    return {
      nome: null,
      email: null,
      age: null,
      id: null
    }
  },
  methods: {
    getprofileinfo: function () {
      fetch()
    }
  },
  mounted: function () {
    console.log('se creo la pagina profile desde la nueva LOGIN' + localStorage.getItem('stringjwt'))
  }

})
</script>
