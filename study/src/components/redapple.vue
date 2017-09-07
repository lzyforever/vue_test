<template>
  <div class="apple">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'this is red apple component'
    }
  },
  methods:{
    getParam() {
      console.log(this.$route.params);
    }
  }
}
</script>

