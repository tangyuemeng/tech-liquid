<template>
    <div ref="scrollContainer">
        <section class="parallax-section">
            <h1 ref="title" class="title">TechLiquid</h1>
            <div class="spline-container" ref="title1">
                <iframe src='https://my.spline.design/boxeshover-0744dc4e37c7d2236eeeabb0455baf01/' frameborder='0' width='100%' height='100%'></iframe>
                <div class="overlay"></div>
            </div>
        </section>

        <!-- 添加足够的内容高度，确保滚动生效 -->
        <section class="content">
            <h2>Scroll Down</h2>
            <p>这里是滚动测试内容2...</p>
        </section>

        <section class="content">
            <h2>Scroll Down</h2>
            <p>这里是滚动测试内容2...</p>
        </section>

        <section class="content">
            <p>这里是滚动测试内容3...</p>
        </section>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scrollContainer = ref(null);
const title = ref(null);
const title1 = ref(null);

onMounted(() => {
    // 🚀 2. 确保 GSAP 只在 DOM 渲染后初始化
    if (!title.value) {
        console.error("🚨 `h1` 元素未正确加载");
        return;
    }

    gsap.to(title.value, {
        scale: 2,
        opacity: 0,
        scrollTrigger: {
            trigger: title.value,
            start: "-300vh",
            end: "200vh",
            scrub: true,
        },
    });

    gsap.to(title1.value, {
        opacity: 0,
        scrollTrigger: {
            trigger: title1.value,
            start: "0vh",
            end: "200vh",
            scrub: true,
        },
    });
});
</script>

<style scoped>
/* 视差背景 */
.parallax-section {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    max-width: 100vw;
    overflow-x: hidden;
}

/* 额外内容区域，确保足够的滚动距离 */
.content {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    max-width: 100vw;
}

.title {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 8rem;
    font-weight: bold;
}

.spline-container {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
</style>