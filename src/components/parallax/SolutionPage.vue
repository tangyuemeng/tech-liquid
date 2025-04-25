<template>
    <section class="flex flex-col md:flex-row w-full h-full items-center justify-center bg-black" ref="triggerEl">
        <div class="items-center justify-center w-full md:w-1/2">
            <div
                class="relative overflow-hidden md:w-[800px] md:h-[800px] h-[100vw] w-full pointer-events-none items-center justify-center">
                <Spline class="md:ml-[200px] md:mt-[200px] md:scale-100 scale-50 absolute -top-[340px] -left-[340px]"
                    :scene="sceneUrl" style="width: 1080px; height: 1080px;" />
            </div>
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