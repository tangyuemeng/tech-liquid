<template>
    <section class="flex flex-col md:flex-row w-full h-full items-center justify-center bg-black" ref="triggerEl">
        <div class="items-center justify-center w-1/2 hidden md:block">
            <div class="relative overflow-hidden w-[800px] h-[800px] pointer-events-none items-center justify-center">
                <Spline class="scale-100 absolute -top-[100px] -left-[140px]" :scene="sceneUrl"
                    style="width: 1080px; height: 1080px;" />
            </div>
        </div>

        <div class="w-full md:hidden">
            <video autoplay muted loop playsinline
                class="w-full h-full object-cover border-none">
                <source
                    src="https://firebasestorage.googleapis.com/v0/b/tl-studio-2a05d.firebasestorage.app/o/background_video%2Fsolutions.mp4?alt=media&token=a0b83e6d-040c-4065-8124-cb5feb29750b"
                    type="video/mp4">
            </video>
        </div>

        <div class="text-start w-full md:w-[30%] p-4 z-20">
            <h4 class="font-bold text-lg md:text-3xl mb-4">{{ t('solutions.title') }}</h4>
            <p class="text-sm md:text-lg">{{ t('solutions.subTitle-1') }}
                <br>
                {{ t('solutions.subTitle-2') }}
            </p>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import Spline from 'spline-vue/v3';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const sceneUrl = ref("https://prod.spline.design/H5Y5xz1yr14oG1Vl/scene.splinecode");
</script>