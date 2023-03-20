<template>
    <NuxtLink class="post-3-component" to="/">
        <div class="relative thumbnail">
            <img :src="item" class="absolute-full" />
        </div>
        <div class="text-center pt-3">
            <p class="text-base font-extrabold text-truncate mb-1">Lorem ipsum dolor </p>
            <p class="text-truncate-2 mb-2 description">Consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
            <p class="italic">See more</p>
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
    @import "@/assets/scss/components/post/post-3.scss";
</style>