<template>
  <div class="apple">
    <p>{{$route.params.color}}</p>
    <h1>{{msg}}</h1>
    <button @click="getParam"> get param</button>
    <button @click="addOne">add One</button>
    <button @click="minusOne">minus One</button>
    <router-view></router-view><!-- 子组件只会找到他的父组件的router-view -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'this is apple component',
      price : 5
    }
  },
  methods:{
    getParam() {
      console.log(this.$route.params);
    },
    addOne () {
      //this.$store.commit("increment", this.price)
      this.$store.dispatch("increase", this.price);
    },
    minusOne() {
      this.$store.commit("decrement", this.price)
    }
  }
}
</script>

