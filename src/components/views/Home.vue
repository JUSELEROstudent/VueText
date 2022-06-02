<template>
<div>
    <h3> otros temas</h3>
        <div>
            <span> neue vue target </span>
            <input
                type="text"
                placeholder="anhadir una nueva"
                v-model="boardName"
                @keyup.enter="add()"/>
        </div>
</div>
</template>

<script>
export default {
  name: 'home-view',
  data () {
    return {
      boardName: '',
      boards: [
        {id: 1, name: 'tareas'},
        {id: 2, name: 'otra lista nueva'}
      ]
    }
  }
}
</script>
