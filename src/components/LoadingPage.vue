<template>
  <div class="h-screen w-screen flex justify-center items-center fixed top-0 left-0 z-40">
    <div class="z-40 justify-center items-center w-full h-full flex" v-if="!animateTrigger">
      <img class="w-[50%] animate-pulse" ref="logo" src="../assets/img/logo.svg"></img>
    </div>


    <div class="bg-teal-400 fixed top-0 left-0 h-full w-1/2 z-30" :class="{ 'animate-slide-left': animateTrigger }">
    </div>
    <div class="bg-teal-400 fixed top-0 right-0 h-full w-1/2  z-30" :class="{ 'animate-slide-right': animateTrigger }">
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const animateTrigger = ref(false)

onMounted(() => {
  setTimeout(() => {
    animateTrigger.value = true
  }, 2000)
})
</script>

<style scoped>
@keyframes slide-left {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}

.animate-slide-left {
  animation: slide-left 1s ease-in-out forwards;
}


@keyframes slide-right {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(100%);
  }
}

.animate-slide-right {
  animation: slide-right 1s ease-in-out forwards;
}
</style>