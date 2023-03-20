<template>
    <div class="post-recommend-block-component">
        <p class="text-lg font-extrabold mb-3">Blogs</p>
        <p class="font-bold mb-2">Search</p>
        <a-form :form="form" class="mb-7">
            <Input placeholder="Search" v-model="keyword" name="keyword" type="text" suffix-search-input />
        </a-form>
        <div class="border-b mb-4.5"></div>
        <p class="font-extrabold mb-3.5">New post</p>
        <div class="flex flex-col gap-6 mb-4.5 post-list">
            <Post2 v-for="i in 3" :key="i" />
        </div>
        <div class="border-b mb-4.5 hidden-sm-and-down"></div>
        <p class="font-extrabold mb-4.5">Consectetuer adipiscing</p>
        <div class="flex flex-wrap gap-3 mb-6 chip-list">
            <Chip size="large" v-for="i in 8" :key="i">#Loremipum</Chip>
        </div>
        <div class="border-b mb-4.5 hidden-sm-and-down"></div>
        <p class="font-extrabold mb-3.5">Recent post</p>
        <div class="flex flex-col gap-6 mb-4.5 post-list">
            <Post2 v-for="i in 3" :key="i" />
        </div>
    </div>
</template>

<script>
import Input from "@/components/common/Input.vue";
import Post2 from "@/components/post/Post2.vue";
import Chip from "@/components/common/Chip.vue";

export default {
    components: { Input, Post2, Chip },
    data() {
        return {
            form: this.$form.createForm(this, { name: 'search_rule' }),
            keyword: ""
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/post/post-recommend-block.scss";
</style>