<template>
    <NuxtLink class="item-3-component" to="/">
        <div class="relative-square thumbnail">
            <img :src="item" class="absolute-full" />
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