<template>
    <section class="flex w-full md:h-screen h-[600px] items-center justify-center">
        <div class="w-full h-full overflow-hidden fixed top-0 left-0 -z-10 relative">
            <div class="relative overflow-hidden h-full w-full pointer-events-none items-center justify-center">
                <Spline class="absolute -top-[340px] -left-[900px] md:top-0 md:-left-[400px]"
                    :scene="sceneUrl" :onLoad="onLoad" style="width: 2880px; height: 1920px;" />
            </div>
        </div>
        <img class="w-[70%] fixed" ref="logo" src="../../assets/img/logo.svg"></img>
        <img class="w-[70%] absolute opacity-0" ref="slogan" src="../../assets/img/slogan.svg"></img>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Spline from 'spline-vue/v3';
import type { Application } from "@splinetool/runtime";

gsap.registerPlugin(ScrollTrigger);
const sceneUrl = ref("https://prod.spline.design/AjVDHXoxdP418M7I/scene.splinecode");
const logo = ref(null);
const slogan = ref(null);
const spline = ref<Application>();

const onLoad = (splineApp: Application) => {
    spline.value = splineApp;
    splineApp.setZoom(0.6)
}

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
canvas {
    max-height: 100vh !important;
    overflow: hidden;
    object-fit: cover;
}
</style>
