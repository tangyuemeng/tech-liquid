<template>
    <div class="main">
        <LogoPage v-if="isReady"/>
        <MobilePage v-if="isReady"/>
        <!-- <WebAppPage /> -->

    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import LogoPage from "./LogoPage.vue";
import WebAppPage from "./WebAppPage.vue";
import MobilePage from "./MobilePage.vue";

const isReady = ref(false);

onMounted(() => {
  isReady.value = true; 
});
</script>
