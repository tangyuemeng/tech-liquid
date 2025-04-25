<template>

    <div class="flex flex-col w-full items-center justify-center">
        <h2 class="text-white mt-32 text-4xl md:text-4xl font-bold text-center my-4 p-2">Empowering Business with Elegant IT Solutions</h2>
        <p class="text-white text-base md:text-3xl text-center mb-2">{{ t('home.subTitle-1') }}</p>
        <p class="text-white text-base md:text-3xl text-center  mb-[50px]">{{ t('home.subTitle-2') }}</p>
        <router-link to="/contact">
            <button
                class="text-black bg-white text-base font-bold px-4 py-2 rounded-full mb-[50px] hover:bg-white hover:text-black border-black border-1">
                {{ t('contactUs') }}
            </button>
        </router-link>
    </div>

    <div class="w-full border-t border-black bg-black text-white text-sm px-[50px] py-8">
        <div class="mx-auto flex flex-col gap-6">
            <div class="flex flex-col items-start md:flex-row md:gap-[70px] text-center md:text-left text-gray-700">
                <b class="text-[14px] text-white mb-4 md:mb-0 max-md:mx-auto">BUZZ Group Inc.</b>
                <div class="md:w-[500px] w-full flex flex-col items-start gap-1 text-[#909090] mb-4">
                    <p class="max-md:mx-auto">Address : 東京都港区赤坂2-13-20 ツムギビル</p>
                    <p class="max-md:mx-auto">Phone : 03-6300-4004</p>
                    <p class="max-md:mx-auto">E-mail : info@buzz-st.com</p>
                </div>

                <b class="text-[14px] text-white mb-4 md:mb-0 max-md:mx-auto">TECH LIQUID Inc.</b>
                <div class="md:w-[500px] w-full flex flex-col items-start gap-1 text-[#909090]">
                    <p class="max-md:mx-auto">Address : 東京都新宿区北新宿1-1-20 プリオール三信ビルB1</p>
                    <p class="max-md:mx-auto">Phone : 070-3179-0613</p>
                    <p class="max-md:mx-auto">E-mail : info@tl-entertainment.co</p>
                </div>
            </div>

            <div class="flex flex-col md:flex-row justify-between items-center gap-7 md:gap-4 md:mt-[40px]">
                <div class="flex flex-col md:flex-row items-center gap-4"><span>ⓒ 2024 TECH LIQUID Inc. All Rights
                        Reserved.</span>
                    <div class="flex gap-4">
                        <router-link to="/terms-of-service" class="hover:underline">Terms of Use</router-link>
                        <router-link to="/privacy-policy" class="hover:underline">Privacy Policy</router-link>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>