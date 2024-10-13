<template>
    <div class="relative post-component">
        <div class="relative thumbnail">
            <img :src="image" class="absolute-full" />
        </div>
        <div class="pt-5 post-info">
            <p class="text-base font-extrabold text-truncate mb-2">LOREM IPSUM DOLOR SIT AMET</p>
            <p class="text-xs mb-2 date-time">2022-11-09 <span class="ml-2.5">8:00am</span></p>
            <p class="text-truncate-3 mb-2">Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            <p class="text-xs font-bold italic underline">See more</p>
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
    @import "@/assets/scss/components/post/post.scss";
</style>