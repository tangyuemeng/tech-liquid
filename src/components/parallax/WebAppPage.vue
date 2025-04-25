<template>
    <section class="flex flex-col md:flex-row w-full h-full items-center justify-center bg-black" ref="triggerEl">
        <div class="items-center justify-center w-full md:w-1/2">
            <div class="relative overflow-hidden md:w-[800px] md:h-[800px] h-[100vw] w-full pointer-events-none items-center justify-center">
                <Spline class="md:ml-[200px] md:mt-[200px] md:scale-120 scale-50 absolute -top-[340px] -left-[340px]"
                    :scene="sceneUrl" :onLoad="onLoad"  />
            </div>
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

