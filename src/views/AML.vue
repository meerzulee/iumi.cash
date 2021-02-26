<template>
  <div class="h-screen pt-28 overflow-hidden privacy">
    <div class="container mx-auto mt-1 flex flex-col items-center h-full">
      <h1 class="text-5lg text-jp-200 font-bold mt-20">AML Statement</h1>
      <img src="https://iumi.cash/wp-content/uploads/2020/06/logo.png" alt class="w-72 mt-14" />
      <p class="text-4xl mt-10 mb-8">iumiCash Limited</p>
      <div class="flex-1 h-full w-full overflow-y-scroll overflow-x-auto tab-port:px-12">
        <p class="text-4xl text-center whitespace-pre-line pr-8 tab-port:pr-0" v-html="wp"></p>
      </div>
      <router-link
        to="/"
        class="text-4xl rounded-full py-6 px-24 bg-gradient text-white leading-none pb-7 mt-12 mb-36"
      >Back</router-link>
    </div>
  </div>
</template>
<script>
const axios = require("axios");

export default {
  created() {
    axios.get("https://iumi.cash/wp-json/markers/v1/post").then(response => {
      response.data.forEach(element => {
        if (element.post_name === "aml-statement") {
          this.wp = element.post_content;
        }
      });
    });
  },
  data() {
    return {
      wp: ``
    };
  }
};
</script>
