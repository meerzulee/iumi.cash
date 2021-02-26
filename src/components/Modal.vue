  
<template>
  <Transition name="fadeM">
    <div
      v-if="showing"
      class="fixed inset-0 w-full h-screen z-50 flex items-center justify-center bg-smoke-800"
      @click.self="close"
    >
      <div class="relative max-h-screen w-full max-w-3xl bg-white shadow-lg rounded-lg p-8 flex">
        <button
          aria-label="close"
          class="absolute top-0 focus:outline-none right-0 text-5xl text-gray-500 -mt-2 mx-4"
          @click.prevent="close"
        >×</button>
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>
<script>
export default {
  props: {
    showing: {
      required: true,
      type: Boolean
    }
  },
  watch: {
    showing(value) {
      if (value) {
        return document.querySelector("body").classList.add("overflow-hidden");
      }
      document.querySelector("body").classList.remove("overflow-hidden");
    }
  },
  methods: {
    close() {
      this.$emit("close");
    }
  },
  mounted: function() {
    document.addEventListener("keydown", e => {
      if (e.keyCode == 27) {
        this.close();
      }
    });
  }
};
</script>

<style>
.fadeM-enter-active,
.fadeM-leave-active {
  transition: all 0.3s;
}
.fadeM-enter,
.fadeM-leave-to {
  opacity: 0;
}
</style>