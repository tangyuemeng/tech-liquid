<template>
    <section class="parallax-section">
        <img class="logo" ref="logo" src="../../assets/img/logo.svg"></img>
        <img class="slogan" ref="slogan" src="../../assets/img/slogan.svg"></img>
        <SplineContainer class="spline-container" :scene="sceneUrl"/>
    </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplineContainer from "../3D/SplineContainer.vue";

gsap.registerPlugin(ScrollTrigger);
const sceneUrl = ref("https://prod.spline.design/AjVDHXoxdP418M7I/scene.splinecode");
const logo = ref(null);
const slogan = ref(null);

onMounted(() => {
    if (!logo.value && !slogan.value) {
        return;
    }

    gsap.to(logo.value, {
        scale: 2,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
            scroller: document.documentElement,
            start: "top top",
            end: "+=150vh",
            scrub: 1,
        },
    });

    gsap.to(slogan.value, {
        scale: 1.4,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
            scroller: document.documentElement,
            start: "100vh",
            end: "+=150vh",
            scrub: 1,
        },
    });
});
</script>

<style scoped>
.logo {
    width: 70%;
    height: auto;
    position: fixed;
}

.slogan {
    width: 70%;
    height: auto;
    position: absolute;
    opacity: 0;
}

.spline-container {
    width: 100vw;
    height: 100vh;
    opacity: 0.8;
}

</style>