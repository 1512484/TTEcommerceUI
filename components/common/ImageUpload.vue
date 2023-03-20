<template>
    <div class="flex items-center gap-7 image-upload-component">
        <div class="cursor-pointer" @click="avatar_upload_active = !avatar_upload_active">
            <a-avatar icon="user" :size="size" />
            <a-avatar src="" :size="size" v-if="false" />
        </div>
        
        <div class="flex items-center flex-wrap gap-4.5">
            <Button :dark="false" size="medium" class="upload-btn" @click="avatar_upload_active = !avatar_upload_active">Upload</Button>
            <Button :dark="false" size="medium" class="remove-btn" @click="removeImage">Remove</Button>
        </div>

        <client-only>
            <ImageCrop  @crop-success="cropSuccess" @crop-upload-success="cropUploadSuccess" @crop-upload-fail="cropUploadFail"
                langType="en" class="lato" v-model="avatar_upload_active" :width="300" :height="300" field="file" img-format="png"/>
        </client-only>
    </div>
</template>

<script>
import Button from "@/components/common/Button.vue";
import ImageCrop from 'vue-image-crop-upload';

export default {
    components: { Button, ImageCrop },
    props: {
        size: {
            type: Number | String,
            default: 104
        }
    },
    data() {
        return {
            avatar_upload_active: false
        }
    },
    methods: {
        cropSuccess(imgDataUrl, field){
            // console.log('-------- crop success --------');
            this.$emit("cropSuccess", { imgDataUrl, field });
        },
        cropUploadSuccess(jsonData, field){
            // console.log('-------- upload success --------');
            this.$emit("cropUploadSuccess", { jsonData, field });
        },
        cropUploadFail(status, field){
            console.log('-------- upload fail --------');
            console.log(status);
            console.log('field: ' + field);
            this.$emit("cropUploadFail", { status, field });
        },
        removeImage() {
            this.$emit("remove");
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/common/image-upload.scss";
</style>
