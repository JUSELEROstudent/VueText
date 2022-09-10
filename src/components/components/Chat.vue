<template>
  <div class="contenedor">
    <div class="persona" v-for="person in profile" :key="person.id">
      <div><img src="https://static.independent.co.uk/2022/03/17/10/newFile.jpg?quality=75&width=1200&auto=webp" alt="Avatar"></div>
      <div>{{person.name}}</div>
      <div class="estado" v-if="(person.userId%2)==1 ? true : false">V</div>
      <div class="estado" v-if="(person.userId%2)==0 ? true : false">X</div>
    </div>
  </div>
</template>

<script>
export default ({
  name: 'chatbody',
  data () {
    return {
      profile: null}
  },
  methods: {
    updatechat: function (datachat) {
      this.profile = datachat
    }
  },
  mounted () {
    var myHeaders = new Headers()
    myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('stringjwt'))

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    }

    fetch('https://localhost:7253/api/chatusers', requestOptions)
      .then(response => response.json())
      .then(data => this.updatechat(data))
      .then(data => console.log(data))
      .catch(error => console.log('error', error))
  }
})

</script>

<style scoped>
.contenedor{
  height: auto;
  min-width: 50px;
}
.persona img{
  width: 22px;
  display: flex;
}
.persona {
  display: flex;
}
.estado{
  width: 10px;
  height: 10px;
  border: 1px solid var(--bg-uno);
  border-radius: 2px;
  background: rgb(45, 230, 45);
}
</style>
