<template>
  <div id="app" class="relative">
    <div id="nav" class="w-screen fixed navbar z-50">
      <div
        class="container mx-auto flex justify-between tab-port:mx-32 phone:mx-18 items-center phone:py-6 py-8"
      >
        <div class>
          <a
            class="cursor-pointer"
            v-scroll-to="{el: '#home',
         duration: 1100,
         easing: 'ease-in-out'}"
          >
            <img
              src="https://iumi.cash/wp-content/uploads/2020/06/logo-header.png"
              class="h-16"
              alt
            />
          </a>
        </div>
        <!-- linkss -->
        <scrollactive
          active-class="text-jp-100"
          :duration="1100"
          bezier-easing-value=".5,0,.35,1"
          class="flex items-center phone:hidden"
        >
          <!-- <router-link to="/">Home</router-link>| -->
          <a
            v-for="(item, index) in navs"
            :key="index"
            class="nav-links scrollactive-item"
            :href="item.link"
          >{{item.title}}</a>
          <!-- <a
            v-for="(item, index) in navs"
            :key="index"
            class="nav-links scrollactive-item"
          
            :class="{ 'text-jp-100': item.isActive}"
            v-scroll-to="{el: item.link,
         duration: 1100,
         easing: 'ease-in-out'}"
          >{{item.title}}</a>-->
          <!-- <a
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
          >Contacts</a>-->
          <!-- <router-link to="/">About</router-link> -->
        </scrollactive>
        <!-- cta -->
        <div class="flex items-center phone-up:hidden">
          <a
            class="cursor-pointer text-5lg font-bold text-jp-200 mt-1"
            v-scroll-to="{el: '#home',
         duration: 1100,
         easing: 'ease-in-out'}"
          >Home</a>
        </div>
        <a
          href="#"
          class="mr-10 phone:mr-0 bg-transparent border-jp-200 phone:leading-snug phone:py-4 rounded-full border-2 text-3xl text-jp-200 uppercase font-bold px-8 py-2 leading-relaxed flex items-center hover:border-transparent hover:text-white hover:bg-jp-200 phone:font-bold"
        >get the app</a>
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
  },
  data() {
    return {
      navs: [
        {
          title: "Home",
          link: "#home",
          isActive: false
        },
        {
          title: "Features",
          link: "#features",
          isActive: false
        },
        {
          title: "Pricing",
          link: "#pricing",
          isActive: false
        },
        {
          title: "FAQs",
          link: "#faqs",
          isActive: false
        },
        {
          title: "Contacts",
          link: "#contacts",
          isActive: false
        }
      ]
    };
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
