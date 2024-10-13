<template>
    <div class="relative flex gap-3 post-2-component">
        <div class="relative thumbnail">
            <img :src="image" class="absolute-full" />
        </div>
        <div class="post-info">
            <p class="text-xs text-truncate-3 mb-2">Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            <p class="text-2xs date-time">2022-11-09 <span class="ml-2.5">8:00am</span></p>
        </div>
        <NuxtLink to="/post/1" class="absolute-full" />
    </div>
</template>

<script>
import { images } from "@/static/data.js";

export default {
    data() {
        return {
            image: images[Math.floor(Math.random() * images.length)],
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/post/post-2.scss";
</style>