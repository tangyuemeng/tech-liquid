<template>
    <section class="flex w-full md:h-screen h-[600px] items-center justify-center">
        <video autoplay muted loop playsinline class="w-full h-full object-cover border-none">
            <source
                src="https://firebasestorage.googleapis.com/v0/b/tl-studio-2a05d.firebasestorage.app/o/background_video%2Foutput.mp4?alt=media&token=452d0df7-077d-4e0e-94b0-eeec41bddbe9"
                type="video/mp4">
        </video>
        <img class="w-[70%] fixed" ref="logo" src="../../assets/img/logo.svg"></img>
        <img class="w-[70%] absolute opacity-0" ref="slogan" src="../../assets/img/slogan.svg"></img>
    </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
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
