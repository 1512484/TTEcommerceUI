<template>
    <div class="flex two-column-detail-content item-detail-component">
        <div class="left-content">
            <ItemImageCarousel class="image-carousel" />
        </div>
        <div class="right-content">
            <h2 class="text-4xl font-extrabold mb-2 item-title">Air Jordan 1 Mid SE</h2>
            <p class="line-through mb-1 old-price">$300.00</p>
            <p class="text-2xl font-bold mb-3 price">$200.00</p>
            <p class="mb-4 detail-info">Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

            <div class="mb-4 detail-info">
                <p class="text-base font-bold mb-1.5">Color</p>
                <ColorList :color-list="colors" />
            </div>
            <div class="mb-7 detail-info">
                <p class="text-base font-bold mb-1.5">Size</p>
                <SizeList />
            </div>
            <div class="mb-7 detail-info">
                <p class="text-base font-bold mb-1.5">Quantity</p>
                <QuantityInput v-model="quantity" :max="50" />
            </div>

            <div class="flex flex-wrap items-center gap-4 pb-1 btn-group">
                <Button class="control-btn" icon="shopping-cart">ADD TO CART</Button>
                <Button class="control-btn" icon="heart" :dark="false">WISHLIST</Button>
            </div>
        </div>
    </div>
</template>

<script>
import ColorList from "@/components/item/ColorList.vue";
import SizeList from "@/components/item/SizeList.vue";
import QuantityInput from "@/components/common/QuantityInput.vue";
import Button from "@/components/common/Button.vue";
import ItemImageCarousel from "@/components/item/ItemImageCarousel.vue";

export default {
    components: { ColorList, SizeList, QuantityInput, Button, ItemImageCarousel },
    data() {
        return {
            colors: ["#BA8EB5", "#524F52"],
            quantity: 1
        }
    },
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/item/item-detail.scss";
</style>