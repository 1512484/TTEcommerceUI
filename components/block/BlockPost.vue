<template>
    <div class="container block-post-component">
        <block :style="{ paddingTop: 0 }">
            <div class="mb-7">
                <h3 class="text-4xl font-extrabold text-center mb-0 block-title">Blog</h3>
            </div>
            <list class="hidden-xs-and-down">
                <Post3 v-for="(item, index) in blogImageList" :key="index" :item="item" />
            </list>
            <post-carousel class="hidden-xs-and-up" />
        </block>
    </div>
</template>

<script>
import List from "@/components/list/List.vue";
import Post3 from "@/components/post/Post3.vue";
import PostCarousel from "@/components/post/PostCarousel.vue";
import { blogImageList } from "@/static/data.js";

export default {
    components: { List, Post3, PostCarousel },
    data() {
        return {
            blogImageList
        }
    }
}
</script>