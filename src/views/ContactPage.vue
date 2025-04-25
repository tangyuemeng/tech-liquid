<template>
    <div class="bg-black text-white">
        <Header />
        <div class="md:text-8xl font-bold text-center px-4 pt-10 text-5xl mt-[4.5rem]">CONTACT US</div>
        <div class="md:text-3xl font-bold text-center px-4 pb-10 text-xl mt-4">{{ t('contactUs') }}</div>

        <div class="w-full py-4 px-2 items-center flex flex-col md:flex-row md:px-10">
            <div class="w-full font-bold text-3xl items-center text-center justify-center md:w-1/2 mt-4">{{
                t('questions') }}</div>
            <div class="w-full md:w-1/2">
                <form class="py-4 px-2 items-center justify-center flex flex-col my-8"
                    action="https://formspree.io/f/xblgzley" method="POST">
                    <!-- Name -->
                    <div class="mb-4 w-full">
                        <input type="text" name="name" required placeholder="Name"
                            class="w-full p-2 border focus:outline-teal-400" />
                    </div>

                    <!-- Email -->
                    <div class="mb-4 w-full">
                        <input type="email" name="email" required placeholder="Email"
                            class="w-full p-2 border focus:outline-teal-400" />
                    </div>

                    <!-- Message -->
                    <div class="mb-4 w-full">
                        <textarea name="message" required rows="4" placeholder="Content"
                            class="w-full p-2 border focus:outline-teal-400"></textarea>
                    </div>

                    <!-- Submit Button -->
                    <button type="submit" class="px-20 py-2 rounded-full bg-white text-black font-bold">
                        Send
                    </button>
                </form>

            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue";
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>