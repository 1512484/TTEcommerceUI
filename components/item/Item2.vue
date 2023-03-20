<template>
    <NuxtLink class="item-2-component" to="/">
        <div class="relative thumbnail">
            <img :src="item" class="absolute-full" />
        </div>
        <div class="text-center pt-3">
            <p class="text-base font-extrabold text-truncate mb-1">Lorem ipsum dolor </p>
            <p class="text-truncate-2 mb-1 description">Consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
            <p class="text-base font-bold">$200.00</p>
        </div>
    </NuxtLink>
</template>

<script>
import { images } from "@/static/data.js";
export default {
    props: {
        item: {
            type: String | null
        }
    },
    data() {
        let image = images[Math.round(Math.random() * images.length)];
        return {
            image
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/item/item-2.scss";
</style>