<template>
  <div>
    <ol>
      <li>Opc 1</li>
      <li>Opc 2</li>
      <li>opc 3</li>
    </ol>
  </div>
</template>
<script>

export default {
  name: 'NavBar',
  data () {
    return {
      estate: null
    }
  }
}
</script>
<style scoped>
div {
  background: rgb(79, 87, 88);
}
ol {
  display: flex;
  list-style-type: none;
  align-items: flex-end;
}
</style>
