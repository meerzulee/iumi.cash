<template>
  <div id="app" class="relative">
    <div id="nav" class="w-screen fixed navbar z-50">
      <div class="container mx-auto flex justify-between py-4">
        <div>
          <img src="./assets/images/logo-header.png" alt />
        </div>
        <!-- linkss -->
        <div class="flex items-center">
          <!-- <router-link to="/">Home</router-link>| -->
          <a href="#home" class="nav-links">Home</a>
          <a href="#features" class="nav-links">Features</a>
          <a href="#pricing" class="nav-links">Pricing</a>
          <a href="#faqs" class="nav-links">FAQs</a>
          <a href="#contacts" class="nav-links">Contacts</a>
          <!-- <router-link to="/">About</router-link> -->
        </div>
        <!-- cta -->

        <a
          href="#"
          class="mr-10 bg-transparent border-jacksons_purple-200 rounded-full border-2 text-lg uppercase text-jacksons_purple-200 font-semibold px-5 py-1 flex items-center hover:border-transparent hover:text-white hover:bg-jacksons_purple-200"
        >
          <span>get the app</span>
        </a>
      </div>
    </div>

    <router-view />
  </div>
</template>
<script>
// import FixedHeader from 'vue-fixed-header'
export default {
  components: {
    // FixedHeader
  }
};
</script>
<style>
#nav.vue-fixed-header--isFixed {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
}
</style>
