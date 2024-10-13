<template>
    <Modal ref="searchModalRef" title="Search" hide-desktop-title class="search-modal-component">
        <div class="flex flex-col overflow-auto search-modal-content">
            <h2 class="text-4xl font-extrabold hidden-sm-and-down pl-1 mb-4.5">Search</h2>
            <a-form :form="form" class="pr-6 pl-1 mb-6">
                <Input placeholder="Search..." v-model="keyword" name="search" type="text" prefix-search-input />
            </a-form>
            <div class="overflow-auto pr-6 pl-1 pt-1 scroll-content">
                <div class="flex flex-wrap gap-3 mb-4.5 chip-group">
                    <Chip size="large" v-for="i in 5" :key="i">#Loremipum</Chip>
                </div>
                <p class="font-bold mb-3">You may also like</p>
                <div class="banner-list">
                    <div class="relative banner" v-for="i in 3" :key="i">
                        <img :src="image" class="absolute-full" />
                    </div>
                </div>
            </div>
        </div>
    </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import Input from "@/components/common/Input.vue";
import Chip from "@/components/common/Chip.vue";
import { images } from "@/static/data.js";

export default {
    components: { Modal, Input, Chip },
    data() {
        return {
            form: this.$form.createForm(this, { name: 'search_modal_rule' }),
            image: images[Math.floor(Math.random() * images.length)],
            keyword: ""
        }
    },
    methods: {
        open() {
            this.$refs.searchModalRef.open();
        },
        close() {
            this.$refs.searchModalRef.close();
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/modal/search-modal.scss";
</style>