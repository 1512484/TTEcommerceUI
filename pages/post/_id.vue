<template>
    <div class="container post-detail-page">
        <div class="post-detail-content">
            <div class="flex-grow">
                <PostDetail class="mb-8" />
                <CommentBlock />
            </div>
            <PostRecommendBlock />
        </div>
    </div>
</template>

<script>
import PostDetail from "@/components/post/PostDetail.vue";
import CommentBlock from "@/components/post/CommentBlock.vue";
import PostRecommendBlock from "@/components/post/PostRecommendBlock.vue";

export default {
    components: { PostDetail, CommentBlock, PostRecommendBlock }
}
</script>

<style lang="scss">
    @import "@/assets/scss/pages/post/post-detail.scss";
</style>