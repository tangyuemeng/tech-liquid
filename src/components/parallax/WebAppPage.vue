<template>
    <section class="parallax-section">
        <div class="content">
            <h4>ホームページ制作</h4>
            <p>iOS、Android、Web、すべてのプラットフォームで同期開発。洗練されたUI/UXで、ユーザーの期待を超える体験を提供します。
                <br>
                さらに、LINEやWeChatのミニアプリも開発可能。ユーザーのニーズを完全に満たすソリューションを提供します。
            </p>
        </div>
        <SplineContainer :scene="sceneUrl" :onLoad="onLoad" class="spline-container" />
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Application, SPEObject } from "@splinetool/runtime";
import SplineContainer from "../3D/SplineContainer.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sceneUrl = ref("https://prod.spline.design/zL2BpB2enRMY3aav/scene.splinecode");
const spline = ref<Application>();
const macbook = ref<SPEObject>();

const onLoad = (splineApp: Application) => {
    spline.value = splineApp;
    macbook.value = splineApp.findObjectByName("macbook");
}

const triggerAnimation = () => {
    macbook.value?.emitEvent("mouseDown");
};

onMounted(() => {
    ScrollTrigger.create({
        trigger: ".content",
        start: "top 80%",
        end: "bottom top",
        onEnter: () => triggerAnimation(),
        scrub: true,
    });
});
</script>

<style scoped>
.spline-container {
    position: absolute;
    left: 5%;
    height: 100%;
}

.content {
    position: absolute;
    max-width: 40%;
    padding: 20px;
    box-sizing: border-box;
    right: 5%;
    display: grid;
    text-align: start;
}
</style>