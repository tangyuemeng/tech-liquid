<script setup>

</script>

<template>
  <header class="header">
    <div class="header-container">
      <!-- 左侧标题 -->
      <div class="title">AirPods Pro 2</div>

      <!-- 中间导航链接 -->
      <nav class="nav">
        <ul>
          <li v-for="(item, index) in menuItems" :key="index" :class="{ active: activeIndex === index }" @click="setActive(index)">
            {{ item }}
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
    background-color: #000; /* 黑色背景 */
    color: #fff; /* 白色文字 */
    padding: 10px 20px;
    border-bottom: 1px solid #333; /* 底部边框 */
}
</style>