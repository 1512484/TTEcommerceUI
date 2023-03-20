<template>
    <div class="w-full comment-block-component">
        <a-form :form="form">
            <div class="flex items-end justify-between mb-3">
                <div>
                    <p class="font-bold mb-1">Comment</p>
                    <p>0 comment</p>
                </div>
    
                <!-- <div class="flex items-center gap-2">
                    <img src="@/assets/images/icon/filter-filled.svg" />
                    <p>Latest reviews</p>
                </div> -->
                <FilterSelect2 placeholder="Sort" v-model="sort" :options="sortOptions" />
            </div>
            <div class="w-full flex items-start gap-3">
                <div class="relative avatar">
                    <img :src="image" class="absolute-full" />
                </div>
                <div class="flex items-start flex-grow">
                    <Input placeholder="Comment" v-model="comment" name="comment" class="flex-grow comment-input" />
                    <Button>POST</Button>
                </div>
            </div>
        </a-form>

        <div class="comment-block-content">
            <div class="flex items-center gap-3 login">
                <p>Comment with</p>
                <img src="@/assets/images/icon/facebook.svg" class="social-icon" />
                <img src="@/assets/images/icon/google.svg" class="social-icon" />
            </div>
        </div>
    </div>
</template>

<script>
import Button from "@/components/common/Button.vue";
import Input from "@/components/common/Input.vue";
import FilterSelect2 from "@/components/common/FilterSelect2.vue";
import { images } from "@/static/data.js";

export default {
    components: { Button, Input, FilterSelect2 },
    data() {
        return {
            form: this.$form.createForm(this, { name: 'comment_rule' }),
            image: images[Math.round(Math.random() * images.length)],
            comment: "",
            sortOptions: [
                { id: 1, label: 'Latest reviews', value: 'created_at' },
                { id: 2, label: 'Oldest reviews', value: '-created_at' }
            ],
            sort: { id: 1, label: 'Latest reviews', value: 'created_at' }
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/post/comment-block.scss";
</style>