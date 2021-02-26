<template >
  <div class="flex icon-scroll items-center cursor-pointer">
    <div v-if="dark" class="cursor-pointer icon mr-2">
      <div class="mouse flex justify-center">
        <div class="wheel"></div>
      </div>
    </div>
    <div v-else class="cursor-pointer icon mr-2">
      <div class="mousew mouse flex justify-center">
        <div class="wheel wheelw"></div>
      </div>
    </div>
    <p
      class="text-4xl text-jacksons_purple-200 phone:mt-1"
      :class="[dark ? '' : 'phone:text-white']"
    >Scroll down for more</p>
  </div>
</template>
<script>
export default {
  props: {
    dark: Boolean
  }
};
</script>
<style scoped >
.icon-scroll {
  position: absolute;
  bottom: 10%;
  left: 50%;
  width: auto;
  height: 3rem;
  transform: translateX(-50%);
  z-index: 99999;
}

.icon-scroll .mouse {
  height: 2em;
  width: 1.2em;
  border: 1px solid #323790;
  border-radius: 2em;
}

.icon-scroll .wheel {
  position: relative;
  display: block;
  height: 0.35em;
  width: 0.2em;
  margin: 0.19em auto 0.1875em auto;
  background: #323790;
  animation: mouse-wheel 1.2s ease infinite;
  border-radius: 25px;
}
/* @screen phone {
  .icon-scroll .mouse {
    height: 1.5em;
    width: 1em;
  }
  .icon-scroll .mousew {
    border: 1px solid #fff;
  }
  .icon-scroll .wheel {
    height: 0.2em;
    width: 0.17em;
    padding-left: 0.1em;
  }
  .icon-scroll .wheelw {
    background: #fff;
  }
} */

@keyframes mouse-wheel {
  0% {
    opacity: 1;
    transform: translateY(0.1em);
  }

  100% {
    opacity: 0;
    transform: translateY(0.575em);
  }
}

@keyframes mouse-scroll {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>