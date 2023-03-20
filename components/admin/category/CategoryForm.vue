<template>
    <a-form :form="form" class="category-form-component">
        <div class="overflow-auto px-8">
            <div>
                <label class="font-bold block mb-1.5">Category Name</label>
                <Input v-model="inputData.name" name="name" :rules="rules.name" type="text" no-border shadow />
            </div>
            <div>
                <label class="font-bold block mb-1.5">Product Name</label>
                <Input v-model="inputData.productName" name="productName" :rules="rules.productName" type="text" no-border shadow />
            </div>
            <AddButton />
        </div>
        <div class="flex justify-end mt-7 px-8">
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
    data() {
        return {
            form: this.$form.createForm(this, { name: 'category_create_form_rule' }),
            inputData: {
                name: "",
                productName: ""
            },
            rules: {
                name: [
                    {
                        required: true,
                        message: 'Please input Name!',
                    }
                ],
                productName: [
                    {
                        required: true,
                        message: 'Please input Product Name!',
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
.category-form-component {
    display: flex;
    flex-direction: column;
    overflow: auto;
}
</style>