<template>
  <div>
    <p>se debe mostrar los datos importantes del usuario logueado.</p>
    <ul>
      <li>{{name}}</li>
      <li>{{email}}</li>
      <li>{{age}}</li>
      <li>{{id}}</li>

    </ul>
  </div>
</template>

<script>

export default ({
  name: 'profile',
  data () {
    return {
      Userclass: [],
      name: null,
      email: null,
      age: null,
      id: null
    }
  },
  methods: {
    getprofileinfo: function (dataProfile) {
      console.log(dataProfile)
      this.id = dataProfile[0]['userId']
      this.name = dataProfile[0]['name']
      this.email = dataProfile[0]['email']
      this.age = dataProfile[0]['age']
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

    fetch('https://localhost:7253/api/innerlogin', requestOptions)
      .then(response => response.json())
      .then(data => this.getprofileinfo(data))
      .catch(error => console.log('error', error))
  }

})
</script>
