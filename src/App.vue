<template>
<div id="app">
  <router-view></router-view>
</div>
</template>

<script>
import AppCard from '@/components/AppCardPerson'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import AppBar from '@/components/MenuBar'
import AppCardBo from '@/components/BoardCard'
import AppCsharp from '@/components/AppApiCsharp'
import FormInsert from '@/components/FormInsert'

export default {
  name: 'App',
  components: { AppFooter, AppHeader, AppCard, AppBar, AppCardBo, AppCsharp, FormInsert },
  data () {
    return {
      apifetch: []
    }
  },
  /* created () {
  // Simple GET request using fetch
    fetch('https://localhost:7253/WeatherForecast')
      .then(response => response.json())
      .then((data) => { this.apifetch = data })
  }, */
  methods: {
    guardarcambio: function (lastname, nombre) {
      console.log('llegamos')
      this.apifetch.summary[nombre] = lastname
    }
  }
}
</script>

<style scoped>
#app {
  color: #37474f;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 80%;
  margin: auto;
}
.cartscontainer {
  margin: auto;
  display: flex;
  flex-wrap: wrap ;
  width: 90%;
  }
</style>
