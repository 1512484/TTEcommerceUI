<template>
    <div class="banner-component" :class="{'middle-banner': middleBanner}">
        <agile :options="bannerCarouselOptions" ref="carouselRef" :class="bannerClass" v-if="carouselList?.length > 1">
            <div v-for="(item, index) in carouselList" :key="index" :to="item.to" 
                class="relative h-full flex-center banner-item">
                <img src="@/assets/images/middle-banner.svg" class="absolute-full" v-if="middleBanner" />
                <img src="@/assets/images/banner-image.svg" class="absolute-full" v-else />
                <div class="absolute-full container banner-text">
                    <img src="@/assets/images/banner-text.svg" class="banner-text-img" />
                    <Button type="submit" color="#E17A35">SEE MORE</Button>
                </div>
            </div>
        </agile>
        <div class="relative h-full flex-center image-container" :to="carouselList[0].to" :class="bannerClass" v-else>
            <img src="@/assets/images/middle-banner.svg" class="absolute-full" v-if="middleBanner" />
            <img src="@/assets/images/banner-image.svg" class="absolute-full" v-else />
        </div>
    </div>
</template>

<script>
import Button from "@/components/common/Button.vue";
import { images } from "@/static/data.js";

export default {
    components: { Button },
    props: {
        number: {
            type: Number,
            default: 1
        },
        dots: {
            type: Boolean,
            default: false
        },
        // height: {
        //     type: Number,
        //     default: 900
        // },
        small: {
            type: Boolean,
            default: false
        },
        middleBanner: {
            type: Boolean,
            default: false
        }
    },
    // data() {
    //     return {
    //         windowWidth: 0,
    //         headerHeight: 0
    //     }
    // },
    computed: {
        bannerCarouselOptions() {
            return {
                // autoplay: true,
                centerMode: true,
                dots: this.dots,
                navButtons: false,
                slidesToShow: 1
            }
        },
        carouselList() {
            return [...Array(this.number)].map(() => ({ 
                image: images[Math.round(Math.random() * images.length)], 
                to: "/" 
            }));
        },
        bannerClass() {
            return {
                "small": this.small
            }
        }
        // bannerStyle() {
        //     return {
        //         paddingBottom: `${this.height * 100 / 1920}%`
        //         // paddingBottom: `${this.height}px`
        //     }
        //     // let result = {};
        //     // if(this.headerHeight) {
        //     //     result.paddingBottom = `calc(100vh - ${this.headerHeight}px)`;
        //     // } else {
        //     //     result.paddingBottom = `${this.height * 100 / 1920}%`;
        //     // }
        //     // return result;
        // }
    },
    // mounted() {
    //     window.addEventListener("resize", this.setBannerHeight);
    //     this.setBannerHeight();
    // },
    // methods: {
    //     setBannerHeight() {
    //         this.windowWidth = window.innerWidth;
    //         if(this.windowWidth < 640) {
    //             let header = document.querySelector("header");
    //             if(header) {
    //                 this.headerHeight = header.clientHeight || 0;
    //             }
    //         } else {
    //             this.headerHeight = 0;
    //         }
    //     }
    // }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/banner/banner.scss";
</style>