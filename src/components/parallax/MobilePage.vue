<template>
    <section class="parallax-section">

            <SplineContainer :scene="sceneUrl" :onLoad="onLoad" class="spline-container" />
            <div class="content">
                <h4>スマートフォンアプリ開発</h4>
                <p>スマートフォン、タブレット向けのアプリ開発を通じて、お客様のニーズにぴったりのソフトウェアを提供します。
                    <br>
                    既存のシステムをタブレットやスマートフォンで活用したい方、またLINE、WeChat、小程序の開発も対応可能です。お気軽にご相談ください！
                </p>
            </div>
    
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Application, SPEObject } from "@splinetool/runtime";
import SplineContainer from "../3D/SplineContainer.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sceneUrl = ref("https://prod.spline.design/Oy3Q1XtUjRnF5-a6/scene.splinecode");
const spline = ref<Application>();
const iPhone1 = ref<SPEObject>();
const iPhone2 = ref<SPEObject>();

const onLoad = (splineApp: Application) => {
  spline.value = splineApp;
  iPhone1.value = splineApp.findObjectByName("iPhone1");
  iPhone2.value = splineApp.findObjectByName("iPhone2");
}

const triggerAnimation = () => {
  iPhone1.value?.emitEvent("mouseDown");
  iPhone2.value?.emitEvent("mouseDown");
};

onMounted(() => {
    ScrollTrigger.create({
    trigger: ".content",
    start: "top 80%", 
    end: "bottom top", 
    onEnter: () => triggerAnimation(), 
    onLeave: () => console.log("离开了目标区域"), 
    scrub: true, 
  });
});
</script>

<style scoped>
.container {
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    padding: 0 10% 10% 0;
}

.spline-container {
    position: absolute;
    left: -30%;
}

.content {
    position: absolute;
    max-width: 30%; 
    padding: 20px;
    left: 60%;
    box-sizing: border-box; 
}
</style>