<template>
    <div class="instagram-carousel-component-2" ref="instagramCarouselRef">
        <agile class="carousel" ref="carouselRef" :options="options" @after-change="handleSlideChange">
            <div class="slide" key="1">
                <Item3 />
                <Item3 />
            </div>
            <div class="slide" key="2">
                <Item3 />
            </div>
            <div class="slide" key="3">
                <Item3 />
                <Item3 />
            </div>
        </agile>
    </div>
</template>

<script>
import Item3 from "@/components/item/Item3.vue";

export default {
    components: { Item3 },
    data() {
        return {
            slideToShow: 2,
            mainWidth: 335,
            slideWidth: 144,
            currentSlide: 0,
            totalSlideWidth: 0
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
                // this.slideWidth = this.mainWidth / 2 - 28;
                this.slideWidth = (this.mainWidth - 56) / 2.215;
                this.totalSlideWidth = 20 * 2 + 16 * 3 + this.slideWidth * 4;
                this.$refs.instagramCarouselRef.style.setProperty("--slide-width", `${this.slideWidth}px`);
            }
        },
        handleSlideChange(value) {
            this.currentSlide = value.currentSlide;
            
            let newTranslate = 0;

            if(this.currentSlide == 1) {
                // newTranslate = -187;
                // newTranslate = -(this.slideWidth + 20 + 2);
                newTranslate = -(this.totalSlideWidth - this.mainWidth + this.slideWidth * 2 + 16) / 2 + this.slideWidth + 8;
            }

            if(this.currentSlide == 2) {
                // newTranslate = -375;
                // newTranslate = -(this.slideWidth * 2 + 20 * 2 + 4);
                newTranslate = -(this.totalSlideWidth - this.mainWidth);
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
    @import "@/assets/scss/components/common/instagram-carousel-2.scss";
</style>