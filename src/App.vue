<template>
<div id="app">
  <app-header></app-header>
  <app-Bar></app-Bar>
  <router-view></router-view>
  <app-card></app-card>
  <app-footer></app-footer>
</div>
</template>

<script>
import AppCard from '@/components/AppCardPerson'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import AppBar from '@/components/MenuBar'

export default {
  name: 'App',
  components: {AppFooter, AppHeader, AppCard, AppBar}
}
</script>

<style>
#app {
  box-sizing: border-box;
  color: #37474f;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
