<template>
    <div class="relative w-full flex gap-3 list-item-component">
        <div class="relative thumbnail hidden-md-and-up">
            <img :src="image" class="absolute-full" />
            <NuxtLink class="absolute-full" to="/item/1" />
        </div>
        <NuxtLink class="absolute-full" to="/item/1" />
        <img src="@/assets/images/icon/clear.svg" class="clear-icon hidden-md-and-up" />
        <div class="flex gap-3 left-content">
            <div class="column">
                <div class="relative thumbnail mr-3 hidden-md-and-down">
                    <img :src="image" class="absolute-full" />
                    <NuxtLink class="absolute-full" to="/item/1" />
                </div>
                <div>
                    <p class="font-bold mb-0.5 item-title">Flower T-Shirt</p>
                    <p class="text-xs item-subtitle">Dark Gray</p>
                </div>
            </div>
            <div class="column">
                <div class="flex items-center flex-wrap gap-x-3 gap-y-1">
                    <p class="hidden-md-and-up attribute-title">Size</p>
                    <TypeSelect placeholder="Size" v-model="size" :options="sizes" />
                </div>
            </div>
            <div class="column">
                <div class="flex items-center flex-wrap gap-x-3 gap-y-1">
                    <p class="hidden-md-and-up attribute-title">Quantity</p>
                    <QuantityInput v-model="quantity" :max="50" />
                </div>
            </div>
            <div class="column">
                <div class="w-full flex items-center flex-wrap justify-between gap-x-3 gap-y-1">
                    <p class="hidden-md-and-up attribute-title">Total Price</p>
                    <p>$215.000</p>
                    <img src="@/assets/images/icon/clear.svg" class="clear-icon hidden-md-and-down" />
                </div>
            </div>
        </div>
        <div class="flex items-center right-content" v-if="showAddToCart">
            <Button size="medium" :dark="false">Add to cart</Button>
        </div>
    </div>
</template>

<script>
import TypeSelect from "@/components/common/TypeSelect.vue";
import QuantityInput from "@/components/common/QuantityInput.vue";
import Button from "@/components/common/Button.vue";
import { images } from "@/static/data.js";

export default {
    components: { TypeSelect, QuantityInput, Button },
    props: {
        showAddToCart: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            sizes: [
                { id: 1, label: "S", value: 1 },
                { id: 2, label: "M", value: 2 },
                { id: 3, label: "L", value: 3 },
                { id: 4, label: "XL", value: 4 },
                { id: 5, label: "XXL", value: 5 },
                { id: 6, label: "XXXL", value: 6 },
            ],
            size: null,
            quantity: 1,
            image: images[Math.round(Math.random() * images.length)]
        }
    }
}
</script>