<template>
  <div>
    <ol v-if="state" class="BarList">
      <li v-for="option in ListBar" :key="option.id" :listData="option" >
      {{option.id}} ===== {{option.nombre}}
      </li>
    </ol>
    <ol v-if="!state" class="HorizBar">
      <li v-for="option in ListBar" :key="option.id" :listData="option" >
      {{option.id}} ===== {{option.nombre}}
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
  list-style: none;
}
.HorizBar li {
  display: inline;
  flex-wrap: wrap;
}
.BarList li{
  flex-direction: inherit;
  background: green;
  width: 80%;
}
</style>
