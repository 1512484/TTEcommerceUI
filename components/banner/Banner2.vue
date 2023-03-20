<template>
    <div class="banner-2-component">
        <div class="main-content">
            <img :src="backgroundImg" class="absolute-full" v-if="backgroundImg" />
            <div class="absolute-full" style="background: #295E61" v-else></div>
            <div class="content-img">
                <img :src="contentImg" class="absolute-full" />
                <p class="text-meow">Lorem ipsum</p>
            </div>
            <div class="text-content">
                <p class="text-2xl font-semibold mb-1 content-subtitle">Lorem ipsum</p>
                <p class="text-4xl font-extrabold mb-3 content-title">Lorem ipsum dolor sit amet</p>
                <p class="content-article">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
            </div>
        </div>
    </div>
</template>

<script>
import contentImg from "@/assets/images/middle-banner-2.svg";

export default {
    data() {
        return {
            backgroundImg: "",
            contentImg
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/banner/banner-2.scss";
</style>