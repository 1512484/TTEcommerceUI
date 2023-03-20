<template>
    <modal ref="reviewModalRef" title="Review" hide-desktop-title class="two-column-modal review-modal">
        <div class="flex two-column-detail-content review-content">
            <div class="left-content">
                <ItemImageCarousel class="image-carousel" />
            </div>
            <div class="right-content">
                <h2 class="text-4xl font-extrabold mb-0 heading-title">Write your review</h2>
                <p class="py-3">Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                <div class="border mb-7"></div>
                <div class="flex items-center mb-5">
                    <p class="text-base font-bold mr-4">Quality</p>
                    <Rate v-model="rating" />
                </div>

                <a-form :form="form">
                    <p class="text-base font-bold mb-2">Name</p>
                    <Input placeholder="Name" v-model="name" name="name" type="text" />

                    <p class="text-base font-bold mb-2">Phone</p>
                    <Input placeholder="Phone" v-model="phone" name="phone" type="number" />

                    <p class="text-base font-bold mb-2">Title for your review</p>
                    <Input placeholder="Title" v-model="title" name="title" type="text" />

                    <p class="text-base font-bold mb-2">Your review</p>
                    <Input placeholder="Review" v-model="content" name="content" type="text" />

                    <div class="flex justify-end pt-1.5 pb-3 btn-container">
                        <Button class="control-btn">SEND</Button>
                    </div>
                </a-form>
            </div>
        </div>
    </modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import ItemImageCarousel from "@/components/item/ItemImageCarousel.vue";
import Input from "@/components/common/Input.vue";
import Button from "@/components/common/Button.vue";
import Rate from "@/components/common/Rate.vue";

export default {
    components: { Modal, ItemImageCarousel, Input, Button, Rate },
    data() {
        return {
            form: this.$form.createForm(this, { name: 'dynamic_rule' }),
            name: "",
            phone: "",
            title: "",
            content: "",
            rating: 0
        }
    },
    methods: {
        open() {
            this.$refs.reviewModalRef.open();
        },
        close() {
            this.$refs.reviewModalRef.close();
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/modal/review-modal.scss";
</style>