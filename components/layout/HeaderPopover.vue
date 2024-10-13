<template>
    <div class="header-popover-component">
        <div class="container popover-content">
            <div class="flex gap-3">
                <div class="text-left list-column" v-for="i in 4" :key="i">
                    <p class="text-base font-extrabold mb-3">Lorem ipsum dolor</p>
                    <p class="mb-3" v-for="j in 5" :key="j" @click="$emit('select')">Consectetuer</p>
                </div>
                <div class="flex justify-end flex-grow">
                    <div class="relative banner">
                        <img src="@/assets/images/middle-banner-2.svg" class="absolute-full" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- <script>
import { images } from "@/static/data.js";

export default {
    data() {
        return {
            image: images[Math.floor(Math.random() * images.length)]
        }
    }
}
</script> -->

<style lang="scss">
    @import "@/assets/scss/components/layout/header-popover.scss";
</style>