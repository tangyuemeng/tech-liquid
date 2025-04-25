<template>
    <section class="flex flex-col md:flex-row w-full h-full items-center justify-center bg-black" ref="triggerEl">
        <div class="items-center justify-center w-full md:w-1/2">
            <div
                class="relative overflow-hidden md:w-[800px] md:h-[800px] h-[100vw] w-full pointer-events-none items-center justify-center">
                <Spline class="md:ml-[100px] md:mt-[200px] md:scale-100 scale-50 absolute -top-[340px] -left-[340px]"
                    :scene="sceneUrl" :onLoad="onLoad" style="width: 1080px; height: 1080px;" />
            </div>
        </div>

        <div class="text-start w-full md:w-[30%] p-4 z-20">
            <h4 class="font-bold text-lg md:text-3xl mb-4">{{ t('applications.title') }}</h4>
            <p class="text-sm md:text-lg">{{ t('applications.subTitle-1') }}
                <br>
                {{ t('applications.subTitle-2') }}
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
const sceneUrl = ref("https://prod.spline.design/Oy3Q1XtUjRnF5-a6/scene.splinecode");
const triggerEl = ref(null)
const spline = ref<Application>();
const iPhone1 = ref<SPEObject>();
const iPhone2 = ref<SPEObject>();

const onLoad = (splineApp: Application) => {
    spline.value = splineApp;
    iPhone1.value = splineApp.findObjectByName("iPhone1");
    iPhone2.value = splineApp.findObjectByName("iPhone2");
    splineApp.setZoom(0.8)
}

const triggerAnimation = () => {
    iPhone1.value?.emitEvent("mouseDown");
    iPhone2.value?.emitEvent("mouseDown");
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
<!-- 
https://prod.spline.design/H5Y5xz1yr14oG1Vl/scene.splinecode -->