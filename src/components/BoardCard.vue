<template>
  <router-link
    class="board-cards"
    :to="{ name: 'board',params: { name, id}}">
  <div>
    <h1>{{ name }}</h1>
  </div>
  </router-link>
</template>
<script>
export default {
  name: 'board-card',
  props: {
    id: String,
    name: String
  }
}
</script>
