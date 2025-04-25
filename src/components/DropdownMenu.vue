<template>
    <div class="absolute top-[3rem] left-0 right-0 backdrop-blur-lg bg-opacity-30 z-20 w-screeen">
        <div class="w-full flex flex-col px-4">
            <button class="ml-auto py-2 font-bold" @click="changeLanguage"> {{ currentLanguage }}</button>
        </div>

        <ul class="flex flex-col text-lg font-bold border-t-1 border-white text-start">
            <li class="py-1 px-4">
                <router-link to="/">Home</router-link>
            </li>
            <li class="py-1 px-4">
                <router-link to="/contact">Contact</router-link>
            </li>
        </ul>

    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { locale, t } = useI18n();
const changeLanguage = () => {
    const newLang = locale.value === 'zh' ? 'ja' : 'zh';
    locale.value = newLang;
};

const currentLanguage = computed(() => {
    return locale.value === 'zh' ? '中文' : '日本語';
});
</script>