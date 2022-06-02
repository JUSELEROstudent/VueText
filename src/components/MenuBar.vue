<template>
  <div>
    <ol v-if="state">
      <li v-for="option in ListBar" :key="option.id" :listData="option" >
      {{option.id}} no mostrar mas {{option.nombre}}
      </li>
    </ol>
    <ol v-if="state" class="HorizBar">
      <li v-for="option in ListBar" :key="option.id" :listData="option" >
      {{option.id}} no mostrar mas {{option.nombre}}
      </li>
    </ol>

  </div>
</template>
<script>
export default {
  name: 'app-menu',
  data () {
    return {
      state: true,
      ListBar: [
        { id: 1, nombre: 'tema1' },
        { id: 2, nombre: 'tema2' },
        { id: 3, nombre: 'tema3' }
      ]
    }
  },
  props: [ 'listData' ]
}
</script>
<style scoped>
li {
  background-color: red;
}
.HorizBar li {
  display: inline;
  flex-wrap: wrap;
}
</style>
