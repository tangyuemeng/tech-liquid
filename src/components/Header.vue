<template>
  <header
    class="sticky top-0 z-30 max-w-[980px] mx-auto border-b border-[var(--divider-color)] transition-[width] duration-300 ease-out hidden md:flex"
    ref="header">
    <div class="absolute inset-0 w-full h-full backdrop-blur-[20px] backdrop-saturate-[180%]"></div>
    <div class="flex flex-row justify-between items-center z-20 w-full py-2 px-8">
      <router-link to="/"><img class="opacity-92 h-[42px]" src="../assets/img/logo.svg"></img></router-link>
      <ul class="flex text-sm z-30">
        <li class="ml-6"><router-link to="/">Home</router-link></li>
        <li class="ml-6"><router-link to="/contact">Contact</router-link></li>
        <li class="ml-6" @click="changeLanguage"><router-link>{{ currentLanguage }}</router-link></li>
      </ul>
    </div>
  </header>
  <!-- 移动端 header -->
  <header
    class="sticky top-0 z-10 md:hidden w-full border-b border-[var(--divider-color)] py-2 pl-4 flex flex-row justify-between items-center">
    <div class="absolute inset-0 w-full h-full backdrop-blur-[20px] backdrop-saturate-[180%]"></div>
    <img class="opacity-92 h-[30px]" src="../assets/img/logo.svg"></img>
    <button class="h-[42px] w-[42px]" @click="toggleMenu">
      <img :src="menuImage" class="h-[30px] w-[30px] transform duration-300 ease-in-out scale-x-[-1]" alt="Menu Icon" />
    </button>

    <DropdownMenu v-if="isMenuOpen"
      class="transition-transform transform duration-1000 ease-in-out translate-y-2 opacity-0"
      :class="{ 'translate-y-0 opacity-100': isMenuOpen }" />
  </header>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DropdownMenu from "./DropdownMenu.vue";
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const header = ref(null);
const isMenuOpen = ref(false);
const menuImage = ref('/menu.svg');
const { locale, t } = useI18n();
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  menuImage.value = menuImage.value === '/menu.svg' ? '/x.svg' : '/menu.svg';
};

const changeLanguage = () => {
  const newLang = locale.value === 'zh' ? 'ja' : 'zh';
  locale.value = newLang;
};

const currentLanguage = computed(() => {
  return locale.value === 'zh' ? '中文' : '日本語';
});

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  if (!header.value) {
    return;
  }

  gsap.to(header.value, {
    maxWidth: "100vw",
    minWidth: "980px",
    backgroundColor: "rgba(255, 255, 255, 0.09)",
    ease: "power2.out",
    scrollTrigger: {
      scroller: document.documentElement,
      start: "top top",
      end: "+=60vh",
      scrub: 1,
    },
  });
});
</script>
