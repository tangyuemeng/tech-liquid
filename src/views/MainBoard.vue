<template>
    <LoadingPage v-if="isLoading" />
    <Header />
    <LogoPage />
    <MobilePage />
    <WebAppPage />
    <SolutionPage />
    <Footer />
</template>

<script setup>
import LoadingPage from "../components/LoadingPage.vue"
import Header from "../components/Header.vue"
import LogoPage from "../components/parallax/LogoPage.vue";
import WebAppPage from "../components/parallax/WebAppPage.vue";
import MobilePage from "../components/parallax/MobilePage.vue";
import SolutionPage from "../components/parallax/SolutionPage.vue";
import Footer from "../components/Footer.vue";
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
    setTimeout(() => {
        isLoading.value = false
        sessionStorage.setItem('hasVisited', 'true')
    }, 3000)
})
</script>
