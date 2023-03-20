<template>
    <a-form :form="form" class="setting-form-component">
        <div class="flex flex-wrap overflow-auto px-8">
            <label class="text-base font-extrabold block mb-2.5">Admin account</label>
            <div class="setting-form-layout">
                <div class="w-full">
                    <label class="font-bold block mb-1.5">Name</label>
                    <Input v-model="inputData.name" name="name" type="text" no-border shadow :disabled="disabled" />
                </div>
                <div class="w-full">
                    <label class="font-bold block mb-1.5">User Name</label>
                    <Input v-model="inputData.username" name="username" type="text" no-border shadow :disabled="disabled" />
                </div>
                <div class="w-full">
                    <label class="font-bold block mb-1.5">Password</label>
                    <Input v-model="inputData.password" name="password" type="password" no-border shadow :disabled="disabled" />
                </div>
                <div class="w-full">
                    <label class="font-bold block mb-1.5">Avatar</label>
                    <Input v-model="inputData.avatar" name="avatar" type="image" no-border shadow :disabled="disabled" />
                </div>
            </div> 

            <div class="w-full mb-4.5">
                <label class="font-bold block mb-2.5">Choose</label>
                <a-checkbox class="mb-3">Allow Desktop Notifications</a-checkbox>      
                <a-checkbox class="mb-3">Allow comments from Facebook</a-checkbox>      
                <a-checkbox class="mb-3">Allow comments from Google</a-checkbox>   
            </div>
            
            <label class="text-base font-extrabold block mb-2.5">Add admin</label>
            <div class="setting-form-layout">
                <div class="w-full">
                    <label class="font-bold block mb-1.5">Name</label>
                    <Input v-model="otherUser.name" name="name" type="text" no-border shadow :disabled="disabled" />
                </div>
                <div class="w-full">
                    <label class="font-bold block mb-1.5">User Name</label>
                    <Input v-model="otherUser.username" name="username" type="text" no-border shadow :disabled="disabled" />
                </div>
                <div class="w-full">
                    <label class="font-bold block mb-1.5">Password</label>
                    <Input v-model="otherUser.password" name="password" type="password" no-border shadow :disabled="disabled" />
                </div>
                <div class="w-full">
                    <label class="font-bold block mb-1.5">Avatar</label>
                    <Input v-model="otherUser.avatar" name="avatar" type="image" no-border shadow :disabled="disabled" />
                </div>
            </div>
        </div>
        <!-- <div class="flex justify-end mt-4 px-8" v-if="!disabled">
            <Button class="control-btn" @click="handleSubmit">SAVE</Button>
        </div> -->
    </a-form>
</template>

<script>
import Input from "@/components/common/Input.vue";
import Button from "@/components/common/Button.vue";

export default {
    components: { Input, Button },
    props: {
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            form: this.$form.createForm(this, { name: 'setting_form_rule' }),
            inputData: {
                name: "Thanh",
                username: "Name",
                password: "123456",
                avatar: null
            },
            otherUser: {
                name: "",
                username: "",
                password: "",
                avatar: null
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
        }
    }
}
</script>

<style lang="scss">
.setting-form-component {
    display: flex;
    flex-direction: column;
    overflow: auto;
    .setting-form-layout {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 20px;
    }
    .ant-checkbox-wrapper + .ant-checkbox-wrapper {
        margin-left: 0;
    }
    .text-base {
        font-size: var(--text-base) !important;
    }
}
</style>