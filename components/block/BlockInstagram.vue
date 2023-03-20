<template>
    <div class="container block-instagram-component">
        <block>
            <div class="mb-7">
                <h3 class="text-4xl font-extrabold text-center mb-0 block-title">#instagram</h3>
                <p class="text-center mt-4 block-description">
                    Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </p>
            </div>
            <list2 class="hidden-sm-and-down">
                <Item3 v-for="(item, index) in instagramImageList" :key="index" :item="item" />
            </list2>
            <instagram-carousel class="hidden-sm-and-up" />
        </block>
    </div>
</template>

<script>
import List2 from "@/components/list/List2.vue";
import Item3 from "@/components/item/Item3.vue";
import InstagramCarousel from "@/components/common/InstagramCarousel.vue";
import { instagramImageList } from "@/static/data.js";

export default {
    components: { List2, Item3, InstagramCarousel },
    data() {
        return {
            instagramImageList
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/block/block-instagram.scss";
</style>