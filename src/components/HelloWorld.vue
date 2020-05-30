<template>
  <div class="hello">
   <h1 class="text-3xl text-teal-500 mt-8 flex items-center font-semibold ">Tailwind.CSS + <span class="vue font-bold mx-2"> Vue.JS</span> = ❤️</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vue{
   color: #42b983;
}
</style>
