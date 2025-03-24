<template>
    <section class="parallax-section">
        <div class="container">
        <h2>Scroll Down</h2>
        <!-- <SplineContainer class="spline-container" :scene="sceneUrl" /> -->
    </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import SplineContainer from "../3D/SplineContainer.vue";
// const sceneUrl = ref("https://prod.spline.design/OTqrG4UzIBHhGk50/scene.splinecode");
const sceneUrl = ref("https://prod.spline.design/Oy3Q1XtUjRnF5-a6/scene.splinecode");
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
}
.spline-container {
    width: 50%;
    height: auto;
}
</style>