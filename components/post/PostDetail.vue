<template>
    <div class="post-detail-component">
        <div class="relative image mb-6">
            <img :src="image" class="absolute-full" />
        </div>
        <h1>Consectetuer adipiscing</h1>
        <h4>Consectetuer adipiscing</h4>
        <h5>Consectetuer adipiscing Consectetuer adipiscing</h5>

        <p>Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Consectetuer adipiscing elit, sed diam  ut laoreet dolore magna aliquam erat volutpat. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
        <p>Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Consectetuer adipiscing elit, sed diam  ut laoreet dolore magna aliquam erat volutpat. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
        
        <div class="relative image">
            <img :src="image1" class="absolute-full" />
        </div>
        <figcaption>Consectetuer adipiscing elit, sed diam nonummy</figcaption>

        <h5>Consectetuer adipiscing</h5>
        <p>Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Consectetuer adipiscing elit, sed diam  ut laoreet dolore magna aliquam erat volutpat. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
        <p>Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Consectetuer adipiscing elit, sed diam  ut laoreet dolore magna aliquam erat volutpat. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
    </div>
</template>

<script>
import { images } from "@/static/data.js";

export default {
    data() {
        return {
            image: images[Math.round(Math.random() * images.length)],
            image1: images[Math.round(Math.random() * images.length)],
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/post/post-detail.scss";
</style>