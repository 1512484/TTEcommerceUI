<template>
    <div class="instagram-carousel-component" ref="instagramCarouselRef">
        <agile class="carousel" ref="carouselRef" :options="options" @after-change="handleSlideChange">
            <div class="slide" key="1">
                <Item3 :item="instagramImageList[0]" />
                <Item3 :item="instagramImageList[1]" />
            </div>
            <div class="slide" key="2">
                <Item3 :item="instagramImageList[2]" />
            </div>
            <div class="slide" key="3">
                <Item3 :item="instagramImageList[3]" />
                <Item3 :item="instagramImageList[4]" />
            </div>
        </agile>
    </div>
</template>

<script>
import Item3 from "@/components/item/Item3.vue";
import { instagramImageList } from "@/static/data.js";

export default {
    components: { Item3 },
    data() {
        return {
            slideToShow: 2,
            mainWidth: 335,
            slideWidth: 144,
            currentSlide: 0,
            instagramImageList
        }
    },
    computed: {
        options() {
            return {
				autoplay: false,
				dots: false,
				navButtons: false,
				slidesToShow: this.slideToShow,
                infinite: false
            };
        }
    },
    mounted() {
        window.addEventListener("resize", this.handleInitSize);
        this.handleInitSize();
    },
    methods: {
        handleInitSize() {
            if(this.$refs?.instagramCarouselRef) {
                this.mainWidth = this.$refs.instagramCarouselRef.clientWidth;
                this.slideWidth = this.mainWidth / 2 - 28;
                // this.slideWidth = (this.mainWidth - 56) / 2.215;
                this.$refs.instagramCarouselRef.style.setProperty("--slide-width", `${this.slideWidth}px`);
            }
        },
        handleSlideChange(value) {
            this.currentSlide = value.currentSlide;
            
            let newTranslate = 0;

            if(this.currentSlide == 1) {
                // newTranslate = -187;
                newTranslate = -(this.slideWidth + 20 + 2);
            }

            if(this.currentSlide == 2) {
                // newTranslate = -375;
                newTranslate = -(this.slideWidth * 2 + 20 * 2 + 4);
            }
            
            let slideTrack = this.$refs.carouselRef?.$el?.querySelector(".agile__track") || null;
            if(slideTrack) {
                this.changeItemTranslate(slideTrack, newTranslate);
            }
        },
        changeItemTranslate(element, newTranslate) {
            for(let i = 1; i <= 5; i++) {
                setTimeout(() => {
                    this.setTranslateAttribute(element, newTranslate);
                }, i * 100);
            }
        },
        setTranslateAttribute(element, newTranslate) {
            element.setAttribute("style", `transform: translate(${newTranslate}px) !important; transition: transform 300ms ease 0s;`);
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/common/instagram-carousel.scss";
</style>