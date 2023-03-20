<template>
    <a-form :form="form" class="banner-form-component">
        <div class="flex flex-wrap overflow-auto px-8">
            <label class="text-base font-extrabold block mb-2.5">Home page</label>
            <div class="grid-layout">
                <div class="w-full" v-for="(_, index) in inputData.slides" :key="index">
                    <label class="font-bold block mb-1.5">Slide {{ index + 1 }}</label>
                    <Input v-model="inputData.slides[index]" :name="`slide${index + 1}`" type="image" no-border shadow :disabled="disabled" :show-close-input-button="!!(inputData.slides?.length > 1 && disabled == false)" @remove="handleSlideRemove(index)" />
                </div>
            </div>
            <AddButton class="mb-3" @click="inputData.slides?.push(null)" :class="{'pointer-events-none': disabled}" />
            
            <div class="grid-layout mb-4">
                <div class="w-full">
                    <label class="font-bold block mb-1.5">Banner home page</label>
                    <Input v-model="inputData.homeBanner" name="homeBanner" type="image" no-border shadow :disabled="disabled" />
                </div>
            </div>
                
            <div class="grid-layout mb-4">
                <div class="w-full">
                    <label class="text-base font-extrabold block mb-2.5">Category</label>
                    <label class="font-bold block mb-1.5">Banner</label>
                    <Input v-model="inputData.categoryBanner" name="categoryBanner" type="image" no-border shadow :disabled="disabled" />
                </div>
                <div class="w-full">
                    <label class="text-base font-extrabold block mb-2.5">Product Detail</label>
                    <label class="font-bold block mb-1.5">Banner</label>
                    <Input v-model="inputData.productDetail" name="productDetail" type="image" no-border shadow :disabled="disabled" />
                </div>
            </div>

            <label class="text-base font-extrabold block mb-2.5">Search</label>
            <div class="grid-layout">
                <div class="w-full" v-for="(_, index) in inputData.search" :key="index">
                    <label class="font-bold block mb-1.5">Banner {{ index + 1 }}</label>
                    <Input v-model="inputData.search[index]" :name="`search${index + 1}`" type="image" no-border shadow :disabled="disabled" />
                </div>
            </div>
        </div>
        <div class="flex justify-end mt-4 px-8" v-if="!disabled">
            <Button class="control-btn" @click="handleSubmit">SAVE</Button>
        </div>
    </a-form>
</template>

<script>
import Input from "@/components/common/Input.vue";
import Button from "@/components/common/Button.vue";
import AddButton from "@/components/admin/common/AddButton.vue";

export default {
    components: { Input, Button, AddButton },
    props: {
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            form: this.$form.createForm(this, { name: 'banner_form_rule' }),
            inputData: {
                slides: [null, null, null],
                homeBanner: null,
                categoryBanner: null,
                productDetail: null,
                search: [null, null, null]
            }
        }
    },
    methods: {
        handleSlideRemove(index) {
            let slides = this.inputData.slides.filter((_, i) => i != index);
            this.inputData.slides = [];
            this.$nextTick(() => {
                this.inputData.slides = [...slides];
            });
        },
        handleSubmit(e) {
            e?.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log("OK");
                } else {
                    console.log('Error: ', err);
                }
            });
        }
    }
}
</script>

<style lang="scss">
.banner-form-component {
    display: flex;
    flex-direction: column;
    overflow: auto;
    .grid-layout {
        width: 100%;
        display: grid;
        column-gap: 20px;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .text-base {
        font-size: var(--text-base) !important;
    }
}
</style>