<template>
  <div id="app" class="relative">
    <div id="nav" class="w-screen fixed navbar z-50">
      <div class="container mx-auto flex justify-between py-4">
        <div class="pointer">
          <a
            class="cursor-pointer"
            v-scroll-to="{el: '#home',
         duration: 1100,
         easing: 'ease-in-out'}"
          >
            <img src="./assets/images/logo-header.png" alt />
          </a>
        </div>
        <!-- linkss -->
        <div class="flex items-center">
          <!-- <router-link to="/">Home</router-link>| -->
          <a
            class="nav-links"
            v-scroll-to="{el: '#home',
         duration: 1100,
         easing: 'ease-in-out'}"
          >Home</a>
          <a
            class="nav-links"
            v-scroll-to="{el: '#features',
         duration: 1100,
         easing: 'ease-in-out'}"
          >Features</a>
          <a
            class="nav-links"
            v-scroll-to="{el: '#pricing',
         duration: 1100,
         easing: 'ease-in-out'}"
          >Pricing</a>
          <a
            class="nav-links"
            v-scroll-to="{el: '#faqs',
         duration: 1100,
         easing: 'ease-in-out'}"
          >FAQs</a>
          <a
            class="nav-links"
            v-scroll-to="{el: '#contacts',
         duration: 1100,
         easing: 'ease-in-out'}"
          >Contacts</a>
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
