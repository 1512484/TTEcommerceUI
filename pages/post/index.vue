<template>
    <div class="container post-page">
        <div class="post-content">
            <PostList class="flex-grow" />
            <PostRecommendBlock />
        </div>
        <div class="flex justify-end">
            <Pagination v-model="currentPage" :total="50" :page-size="6" />
        </div>
    </div>
</template>

<script>
import PostList from "@/components/post/PostList.vue";
import PostRecommendBlock from "@/components/post/PostRecommendBlock.vue";
import Pagination from "@/components/common/Pagination.vue";

export default {
    components: { PostList, PostRecommendBlock, Pagination },
    data() {
        return {
            currentPage: 1
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/pages/post/post.scss";
</style>