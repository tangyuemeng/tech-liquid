<template>
    <section class="flex flex-col md:flex-row w-full h-full items-center justify-center bg-black" ref="triggerEl">
        <div class="items-center justify-center w-1/2 hidden md:block">
            <div
                class="relative overflow-hidden w-[800px] h-[800px] pointer-events-none items-center justify-center">
                <Spline class="absolute -top-[140px] -left-[140px]"
                    :scene="sceneUrl" :onLoad="onLoad" />
            </div>
        </div>

        <div class="w-full md:hidden">
            <video autoplay muted loop playsinline
                class="w-full h-full object-cover border-none">
                <source
                    src="https://firebasestorage.googleapis.com/v0/b/tl-studio-2a05d.firebasestorage.app/o/background_video%2Fweb.mp4?alt=media&token=3f545070-faf6-4a5b-9332-16b9a6028859"
                    type="video/mp4">
            </video>
        </div>

        <div class="text-start w-full md:w-[30%] p-4 z-20">
            <h4 class="font-bold text-lg md:text-3xl mb-4">{{ t('websites.title') }}</h4>
            <p class="text-sm md:text-lg">{{ t('websites.subTitle-1') }}
                <br>
                {{ t('websites.subTitle-2') }}
            </p>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Application, SPEObject } from "@splinetool/runtime";
import Spline from 'spline-vue/v3';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useI18n } from 'vue-i18n'

gsap.registerPlugin(ScrollTrigger);

const { t } = useI18n()
const sceneUrl = ref("https://prod.spline.design/zL2BpB2enRMY3aav/scene.splinecode");
const triggerEl = ref(null)
const spline = ref<Application>();
const macbook = ref<SPEObject>();

const onLoad = (splineApp: Application) => {
    spline.value = splineApp;
    macbook.value = splineApp.findObjectByName("macbook");
    splineApp.setZoom(0.6)
}

const triggerAnimation = () => {
    macbook.value?.emitEvent("mouseDown");
};

onMounted(() => {
    ScrollTrigger.create({
        trigger: triggerEl.value,
        start: "top 60%",
        end: "bottom top",
        onEnter: () => triggerAnimation(),
        scrub: true,
    });
});
</script>
