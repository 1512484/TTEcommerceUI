<template>
    <div class="post-carousel-component" ref="postCarouselRef">
        <agile class="thumbnails" ref="thumbnails" :options="options">
            <div class="slide" v-for="(item, index) in blogImageList" :key="index">
                <Post3 :item="item" />
            </div>

            <template slot="prevButton">
                <img src="@/assets/images/icon/chevron-left.svg" />
            </template>
            <template slot="nextButton">
                <img src="@/assets/images/icon/chevron-right.svg" />
            </template>
        </agile>
    </div>
</template>

<script>
import Post3 from "@/components/post/Post3.vue";
import { blogImageList } from "@/static/data.js";

export default {
    components: { Post3 },
    data() {
        return {
            slideToShow: 1,
            blogImageList
        }
    },
    computed: {
        options() {
            return {
				autoplay: false,
				dots: false,
				navButtons: true,
				slidesToShow: this.slideToShow,
                infinite: this.infinite
            };
        },
        slideNumber() {
            return 4;
        },
        infinite() {
            return this.slideNumber > this.slideToShow;
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/post/post-carousel.scss";
</style>