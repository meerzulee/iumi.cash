<template>
  <div id="app" class="relative">
    <div id="nav" class="w-screen fixed navbar z-50">
      <div
        class="container mx-auto flex justify-between tab-port:mx-32 phone:mx-18 items-center phone:py-6 py-8"
      >
        <div class>
          <router-link
            class="cursor-pointer"
            to="/"
            v-scroll-to="{el: '#home',
         duration: 1100,
         easing: 'ease-in-out'}"
          >
            <img
              src="https://iumi.cash/wp-content/uploads/2020/06/logo-header.png"
              class="h-16"
              alt
            />
          </router-link>
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
        </scrollactive>
        <!-- cta -->
        <!-- <div class="flex items-center phone-up:hidden pr-5">
          <a
            v-if="thePath()"
            class="cursor-pointer text-5lg font-bold text-jp-200 mt-1"
            v-scroll-to="{el: '#home',
         duration: 1100,
         easing: 'ease-in-out'}"
          >Home</a>
        </div>-->
        <a
          @click="showModal = true"
          class="mr-10 cursor-pointer phone:mr-0 bg-transparent border-jp-200 phone:leading-snug phone:py-4 rounded-full border-2 text-3xl text-jp-200 uppercase font-bold px-8 py-2 leading-relaxed flex items-center hover:border-transparent hover:text-white hover:bg-jp-200 phone:font-bold"
        >get the app</a>
      </div>
    </div>
    <Modal :showing="showModal" @close="showModal = false">
      <div class="overflow-auto max-h-screen w-full">
        <div class="flex flex-col items-center p-4 mt-4 justify-center">
          <h1 class="text-6md">Coming soon</h1>
          <img src="https://iumi.cash/wp-content/uploads/2020/06/store.png" class="mt-8" alt />
        </div>
      </div>
    </Modal>
    <router-view />
  </div>
</template>
<script>
import Modal from "./components/Modal";
// import FixedHeader from 'vue-fixed-header'
export default {
  components: {
    // FixedHeader
    Modal
  },
  data() {
    return {
      showModal: false,
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
  },
  methods: {
    // thePath() {
    //   return !(
    //     this.$route.path === "/aml-policy" ||
    //     this.$route.path === "/privacy-policy"
    //   );
    // }
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
