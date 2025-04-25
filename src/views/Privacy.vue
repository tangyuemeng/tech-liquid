<template>
    <Header />
    <div class="bg-black text-white text-start flex flex-col items-center justify-center">
        <div class="md:text-8xl font-bold text-center px-4 pt-10 text-5xl mt-[4.5rem]">PRIVACY POLICY</div>
        <div class="md:text-3xl font-bold text-center px-4 pb-10 text-xl mt-4">{{ t('PrivacyPolicy') }}</div>

        <div class="w-full px-4 py-2 text-base font-bold space-y-4 md:w-3/5">
            <p>TECH LIQUID（以下「当社」といいます。）は、以下のとおり個人情報保護方針を定め、
                個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。</p>

            <h2 class="text-xl font-bold mt-8">個人情報の取得</h2>
            <p>当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、
                セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。</p>

            <h2 class="text-xl font-bold mt-8">利用目的</h2>
            <p>お客さまからお預かりした個人情報は、弊社からのご連絡やご質問に対する回答に利用いたします。</p>

            <h2 class="text-xl font-bold mt-8">個人情報の第三者提供</h2>
            <p>当社は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。</p>
            <ul class="list-disc list-inside">
                <li>お客さまの同意がある場合</li>
                <li>お客さまが希望されるサービスを行なうために弊社が業務を委託する業者に対して開示する場合</li>
                <li>法令に基づき開示することが必要である場合</li>
            </ul>

            <h2 class="text-xl font-bold mt-8">法令、規範の遵守と見直し</h2>
            <p>当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。</p>

            <h2 class="text-xl font-bold mt-8">お問い合わせ先</h2>
            <p>当社の個人情報の取扱に関するお問い合せは下記までご連絡ください。</p>
            <router-link to="/contact" class="text-teal-400">
                <p>お問い合わせフォーム</p>
            </router-link>

            <p class="mt-8">最終更新日：2024年9月9日</p>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue";
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>