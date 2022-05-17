<template>
    <header>
        <span class="tittle">new web from  vue to Sebastian leon </span>
        <router-link class="btn-header" to="/">go to other viewx</router-link>
    </header>
</template>
<script>
export default {name: 'app-header'}
</script>

<style scoped>
header {
    box-sizing: border-box;
    color: #37474f;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
header .tittle{
        align-self: center;
        color: #2c3e50;
        font-size: 1.2rem;
        font-weight: bold;
        margin-right: 1rem;
    }
.btn-header{
        background-color: #455a64;
        border: none;
        border-radius: 3px;
        box-shadow: 0 0 0 0.5px red, 0 2px 5px 0  red, 0 1px 2px 0 red ;
        color: white;
        cursor: pointer;
        text-decoration: noen;
        padding: 0.5rem;
        margin: 0 0.5rem;
    }
</style>
