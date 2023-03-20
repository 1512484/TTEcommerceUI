<template>
    <a-form :form="form" class="collection-form-component">
        <div class="flex flex-wrap overflow-auto px-8">
            <div class="w-1/2 pr-2.5">
                <label class="font-bold block mb-1.5">Image</label>
                <Input v-model="inputData.image" name="image" :rules="rules.image" type="image" no-border shadow />
            </div>
            <div class="w-1/2 pl-2.5">
                <label class="font-bold block mb-1.5">Collection Name</label>
                <Input v-model="inputData.name" name="name" :rules="rules.name" type="text" no-border shadow />
            </div>
            <div class="w-full">
                <label class="font-bold block mb-1.5">Description</label>
                <Input v-model="inputData.description" name="description" :rules="rules.description" type="text" no-border shadow />
            </div>
        </div>
        <div class="flex justify-end mt-4 px-8">
            <Button class="control-btn" @click="handleSubmit">SAVE</Button>
        </div>
    </a-form>
</template>

<script>
import Input from "@/components/common/Input.vue";
import Button from "@/components/common/Button.vue";

export default {
    components: { Input, Button },
    data() {
        return {
            form: this.$form.createForm(this, { name: 'collection_create_form_rule' }),
            inputData: {
                image: null,
                name: "",
                description: ""
            },
            rules: {
                image: [
                    {
                        required: true,
                        message: 'Please input Image!',
                    },
                    // {
                    //     type: 'image',
                    //     message: 'The input is not valid E-mail!',
                    // }
                ],
                name: [
                    {
                        required: true,
                        message: 'Please input Name!',
                    }
                ],
                description: [
                    {
                        required: true,
                        message: 'Please input Description!',
                    }
                ],
            }
        }
    },
    methods: {
        handleSubmit(e) {
            e?.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log("OK");
                } else {
                    console.log('Error: ', err);
                }
            });
        },
    }
}
</script>

<style lang="scss">
.collection-form-component {
    display: flex;
    flex-direction: column;
    overflow: auto;
}
</style>