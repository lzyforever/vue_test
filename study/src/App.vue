<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <router-link :to="{path:'apple'}">to apple</router-link>
    <router-link :to="{path:'banana'}">to banana</router-link>
    <router-link :to="{path:'apple/red'}">to redapple</router-link>
      <p>{{totalPrice}}</p>
      <p></p>
      <apple></apple>
      <banana></banana>
  </div>
</template>

<script>

import Apple from './components/apple'
import Banana from './components/banana'

export default {
  name: 'app',
  components: {
    Apple,Banana
  },
  computed : {
    totalPrice () {
      //return this.$store.state.totalPrice
      //可以使用state里面的getters的getTotal里面取
      return this.$store.getters.getTotal
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
