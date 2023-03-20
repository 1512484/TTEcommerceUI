<template>
    <List class="post-list-component">
        <Post v-for="i in 8" :key="i" />
    </List>
</template>

<script>
import Post from "@/components/post/Post.vue";
import List from "@/components/list/List.vue";

export default {
    components: { Post, List },
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/post/post-list.scss";
</style>