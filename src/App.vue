<template>
<div id="app">
  <app-header></app-header>
  <app-Bar></app-Bar>
  <router-view></router-view>
  <app-card></app-card>
  <app-footer></app-footer>
  <div class="cartscontainer">
  <App-Csharp v-for="statetemp in apifetch" :key="statetemp.date" :objectperson="statetemp"></App-Csharp>
  </div>
</div>
</template>

<script>
import AppCard from '@/components/AppCardPerson'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import AppBar from '@/components/MenuBar'
import AppCardBo from '@/components/BoardCard'
import AppCsharp from '@/components/AppApiCsharp'

export default {
  name: 'App',
  components: { AppFooter, AppHeader, AppCard, AppBar, AppCardBo, AppCsharp },
  data () {
    return {
      apifetch: []
    }
  },
  created () {
  // Simple GET request using fetch
    fetch('https://localhost:7085/WeatherForecast')
      .then(response => response.json())
      .then((data) => { this.apifetch = data })
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
}
.cartscontainer {
  margin: auto;
  display: flex;
  flex-wrap: wrap ;
  width: 90%;
  }
</style>
