<template>
  <div>
    <table>
      <tr v-for="info in apifetch" :key="info" ><td>{{ info.summary }}</td><td>{{ info.temperatureC }}</td></tr>
    </table>
    <span>deve mostrar la informacion de fetch</span>
  </div>
</template>

<script>
export default {
  name: 'api-test',
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
