<template>
    <div class="promotion-page">
        <!-- <banner small /> -->
        <div class="container">
            <h2 class="text-center text-4xl font-extrabold my-7 page-title">Promotions</h2>
            <div class="promotion-list mb-10">
                <div class="promotion-item" v-for="(image, index) in promotions" :key="index">
                    <div class="relative thumbnail">
                        <img :src="image" class="absolute-full" />
                    </div>
                    <p class="text-base font-extrabold mt-5 mb-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                    <p class="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus totam doloremque beatae itaque eius debitis tempore eaque provident alias? Consequuntur, facilis.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from "@/components/banner/Banner.vue";
import { images } from "@/static/data.js";

export default {
    components: {
        Banner
    },
    data() {
        return {
            promotions: Array.from({ length: 10 }, () => images[Math.floor(Math.random() * images.length)]),
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/pages/promotion.scss";
</style>