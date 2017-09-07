<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <button @click="addOne">add One</button>
    <button @click="minusOne">minus One</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'this is banana component',
      price : 10
    }
  },
  methods:{
    addOne () {
      this.$store.commit("increment", this.price)
    },
    minusOne() {
      this.$store.commit("decrement", this.price)
    }
  }
}
</script>
