<template>
    <div class="item-detail-page">
        <banner small />

        <div class="container item-detail-info">
            <ItemDetail />
        </div>

        <div class="container item-detail-tabs">
            <ItemDetailTabs />
        </div>

        <div class="container related-products">
            <Block>
                <h2 class="text-4xl font-extrabold text-center mb-1 block-title">Related products</h2>
                <p class="italic underline text-center cursor-pointer mb-7 see-more" @click="$router.push('/item')">All products</p>
                <ItemList :items="relatedProducts" />
            </Block>
        </div>
    </div>
</template>

<script>
import Banner from "@/components/banner/Banner.vue";
import ItemDetail from "@/components/item/ItemDetail.vue";
import ItemDetailTabs from "@/components/item/ItemDetailTabs.vue";
import Block from "@/components/block/Block.vue";
import ItemList from "@/components/item/ItemList.vue";
import { productList } from "@/static/data.js";

export default {
    components: { Banner, ItemDetail, ItemDetailTabs, Block, ItemList },
    data() {
        return {
            relatedProducts: productList.slice(0, 4)
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/pages/item/item-detail.scss";
</style>