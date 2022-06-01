<template>
  <div class="npm">
    <span>
      {{ internText }} NUEVO TEST
    </span>
    <ul>
    <li
    v-for="persons in chainames"
    :key="persons.id"
    :information="persons">
    {{ persons.id }}------ {{ persons.nombre }}
    </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app-card',
  data () {
    return {
      internText: 'test de void css',
      chainames: [
        {id: 1, nombre: 'Juan Leon'},
        {id: 2, nombre: 'Daniela Leon'}
      ]
    }
  },
  props: [ 'information' ]
}
</script>

<style scoped>
.npm {
  margin: auto;
  max-width: 700px;
  box-shadow: rgb(177, 85, 85) 20px;
  box-shadow: 60px -16px red;
  background-color: #123Fef;
}
span {
    color: red;
    background: green;
}
ul {
  background-color: #2fef00;
  list-style: none;
}
</style>
