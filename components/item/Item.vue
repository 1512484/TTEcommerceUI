<template>
    <div class="item-component" v-if="item">
        <div class="relative thumbnail-container">
            <NuxtLink class="relative thumbnail" :to="urlToGo">
                <img :src="item.thumbnail" class="absolute-full" />
            </NuxtLink>
            <div class="pointer-events-none tag">New</div>
            <div class="flex-center gap-7 translate-center icon-list">
                <img src="@/assets/images/icon/shopping-cart.svg" />
                <img src="@/assets/images/icon/eye.svg" @click.stop="$refs.quickViewModalRef.open()" />
                <img src="@/assets/images/icon/heart.svg" />
            </div>
        </div>
        <div class="relative pt-4">
            <p class="text-base font-extrabold text-truncate mb-1">Lorem ipsum dolor </p>
            <p class="mb-1.5">Consectetuer adipiscing elit</p>
            <NuxtLink :to="urlToGo" class="absolute-full" />
            <color-list class="mb-1.5" :color-list="colorList" />
            <p class="text-xs line-through old-price">$300.00</p>
            <p class="text-base font-bold">$200.00</p>
        </div>
        <ItemDetailModal ref="quickViewModalRef" />
    </div>
</template>

<script>
import ColorList from "@/components/item/ColorList.vue";
import ItemDetailModal from "@/components/modal/ItemDetailModal.vue";
import { images } from "@/static/data.js";

export default {
    components: { ColorList, ItemDetailModal },
    props: {
        item: {
            type: Object
        }
    },
    data() {
        let image = images[Math.round(Math.random() * images.length)];
        return {
            image
        }
    },
    computed: {
        urlToGo() {
            return "/item/1";
        },
        colorList() {
            return this.item?.colors || [];
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/item/item.scss";
</style>