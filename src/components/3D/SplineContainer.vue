<template>
    <div class="spline-container">
        <Spline :scene="scene" :onLoad="onLoad" style="width: 150%;"/>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import Spline from 'spline-vue/v3';

const props = defineProps({
    scene: {
        type: String,
        required: true
    },
    onLoad: Function
});
</script>

<style scoped>
.spline-container {
    overflow: hidden;
    z-index: -1;
}
</style>