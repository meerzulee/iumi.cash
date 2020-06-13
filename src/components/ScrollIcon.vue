<template >
  <div class="flex icon-scroll items-center cursor-pointer">
    <div class="cursor-pointer icon mr-2">
      <div class="mouse flex justify-center">
        <div class="wheel"></div>
      </div>
    </div>
    <p class="text-xl text-jacksons_purple-200">Scroll down for more</p>
  </div>
</template>
<style scoped >
.icon-scroll {
  position: absolute;
  bottom: 10%;
  left: 50%;
  width: auto;
  height: 3.125em;
  transform: translateX(-50%);
  z-index: 99999;
}

.icon-arrows::after,
.icon-arrows::before {
  content: "";
}
.icon-arrows span,
.icon-arrows::after,
.icon-arrows::before {
  display: block;
  width: 0.315em;
  height: 0.315em;
  border-right: 1px solid #323790;
  border-bottom: 1px solid #323790;
  margin: 0 0 0.125em 0.315em;
  transform: rotate(45deg);
  animation: mouse-scroll 1s infinite;
  animation-direction: alternate;
}
.icon-arrows::before {
  margin-top: 0.315em;
  animation-delay: 0.1s;
}

.icon-scroll span {
  animation-delay: 0.2s;
}

.icon-arrows::after {
  animation-delay: 0.3s;
}

.icon-scroll .mouse {
  height: 1.375em;
  width: 0.875em;
  border: 1px solid #323790;
  border-radius: 2em;
}

.icon-scroll .wheel {
  position: relative;
  display: block;
  height: 0.19em;
  width: 0.187em;
  margin: 0.19em auto 0.1875em;
  background: #323790;
  animation: mouse-wheel 1.2s ease infinite;
  border-radius: 25px;
}

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