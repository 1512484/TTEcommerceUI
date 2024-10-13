<template>
    <div class="py-4.5 order-item-component" :class="{'border-b': !noBorder}">
        <div class="flex flex-wrap gap-4 item-content">
            <div class="relative thumbnail">
                <img :src="image" class="absolute-full" />
            </div>
            <div class="flex-grow info">
                <div class="flex items-start order-name-status-group mb-1" v-if="showFull">
                    <div class="name-group">
                        <p class="text-base font-extrabold mb-2">Order status</p>
                        <p class="font-bold">Flower T-Shirt</p>
                    </div>
                    <div class="flex items-center gap-y-2 status-group">
                        <Chip class="ml-7 mr-5">Delivered</Chip>
                        <p class="text-xs">11/03/2022</p>
                    </div>
                </div>
                <p class="mb-1">Color: Dark Gray</p>
                <p class="mb-1">Size: S</p>
                <p class="mb-4">Quantity: x2</p>
                <p>Total: <span class="font-extrabold">$300.00</span></p>
            </div>
            <Button size="medium" :dark="false" class="info detail-btn" v-if="showFull" @click="$router.push('/order/1')">Order details</Button>
        </div>
    </div>
</template>

<script>
import Button from "@/components/common/Button.vue";
import Chip from "@/components/common/Chip.vue";
import { images } from "@/static/data.js";

export default {
    components: { Button, Chip },
    props: {
        noBorder: {
            type: Boolean,
            default: false
        },
        showFull: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            image: images[Math.floor(Math.random() * images.length)]
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/order/order-item.scss";
</style>