<template>
    <div class="item-image-carousel-component" ref="itemImageCarouselRef">
        <agile class="main" ref="main" :options="options1" :as-nav-for="asNavFor1" @after-change="handleSlideChange">
            <div class="slide" v-for="(slide, index) in slideList" :key="index" :class="`slide--${index}`">
                <img :src="slide.image" class="absolute-full" />
            </div>
        </agile>
        <agile class="thumbnails" ref="thumbnails" :options="options2" :as-nav-for="asNavFor2">
            <div class="slide" v-for="(slide, index) in slideList" :key="index" :class="`slide--${index}`" @click="$refs.thumbnails.goTo(index)">
                <img :src="slide.image" />
            </div>
        </agile>
    </div>
</template>

<script>
import { productImageList } from "@/static/data.js";

export default {
    props: {
        slideToShow: {
            type: Number,
            default: 3
        },
        noDot: {
            type: Boolean,
            deafult: false
        },
        autoplay: {
            type: Boolean,
            default: false
        },
        // items: {
        //     type: Array,
        //     default: () => ([...Array(7)].map((_, index) => ({ 
        //         id: index + 1,
        //         image: productImageList[Math.round(Math.random() * productImageList.length)]
        //     })))
        // }
    },
    data() {
        return {
            asNavFor1: [],
			asNavFor2: [],
            mainWidth: 400,
            slideWidth: 123,
            currentSlide: 0,
            items: productImageList.map((image, index) => ({ image, id: index  }))
        }
    },
    computed: {
        options1() {
            return {
				dots: false,
				fade: true,
				navButtons: false
			};
        },
        options2() {
            return {
				autoplay: this.autoplay,
				dots: !this.noDot,
				navButtons: false,
				slidesToShow: this.slideToShow,
                infinite: this.infinite
            };
        },
        slideList() {
            return this.items?.length ? this.items : [];
        },
        slideNumber() {
            return this.slideList?.length || 0;
        },
        infinite() {
            return this.slideNumber > this.slideToShow;
        },
    },
    mounted () {
        window.addEventListener("resize", this.setSlideWidth);
		this.asNavFor1.push(this.$refs.thumbnails);
		this.asNavFor2.push(this.$refs.main);
        this.setSlideWidth();
	},
    methods: {
        async setSlideWidth() {
            if(this.$refs?.itemImageCarouselRef) {
                this.mainWidth = this.$refs.itemImageCarouselRef.clientWidth;
                this.slideWidth = (this.mainWidth - 15 * (this.slideToShow - 1)) / this.slideToShow;
                this.$refs.itemImageCarouselRef.style.setProperty("--slide-width", `${this.slideWidth}px`);
            }
        },
        handleSlideChange(value) {
            // let bias = "increase";
            // if(this.currentSlide > value.currentSlide) {
            //     bias = "decrease";
            // }
            this.currentSlide = value.currentSlide;
            
            let newTranslate = -(this.slideWidth + 15) * (this.slideNumber + this.currentSlide);

            if(this.infinite == false) {
                newTranslate = -this.currentSlide * (this.slideWidth + 15);
                if(this.slideNumber < this.slideToShow) {
                    newTranslate = 0;
                } else if(this.slideNumber - this.currentSlide < this.slideToShow) {
                    newTranslate = -(this.slideNumber - this.slideToShow) * (this.slideWidth + 15);
                }
            }
            
            let slideTrack = this.$refs.thumbnails?.$el?.querySelector(".agile__track") || null;
            if(slideTrack) {
                this.changeItemTranslate(slideTrack, newTranslate);
            }
        },
        changeItemTranslate(element, newTranslate) {
            // setTimeout(() => {
            //     this.setTranslateAttribute(element, newTranslate);
            //     if(this.currentSlide == 0 && bias == "decrease" || this.currentSlide == this.slideNumber - 1 && bias == "increase") {
            //         setTimeout(() => {
            //             this.setTranslateAttribute(element, newTranslate);
            //         }, 400);
            //     }
            // }, 100);
            for(let i = 1; i <= 5; i++) {
                setTimeout(() => {
                    this.setTranslateAttribute(element, newTranslate);
                }, i * 100);
            }
        },
        setTranslateAttribute(element, newTranslate) {
            element.setAttribute("style", `transform: translate(${newTranslate}px) !important; transition: transform 300ms ease 0s;`);
        }
    },
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/item/item-image-carousel.scss";
</style>