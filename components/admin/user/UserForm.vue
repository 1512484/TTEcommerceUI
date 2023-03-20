<template>
    <a-form :form="form" class="user-form-component">
        <div class="flex flex-wrap overflow-auto px-8">
            <div class="user-form-layout">
                <div class="w-full">
                    <label class="font-bold block mb-1.5">ID</label>
                    <Input v-model="inputData.id" name="id" type="text" no-border shadow disabled />
                </div>
                <div class="w-full">
                    <label class="font-bold block mb-1.5">User Name</label>
                    <Input v-model="inputData.username" name="username" type="text" no-border shadow :disabled="disabled" />
                </div>
                <div class="w-full">
                    <label class="font-bold block mb-1.5">Phone</label>
                    <Input v-model="inputData.phone" name="phone" type="phone" :form="form" no-border shadow :disabled="disabled" />
                </div>
                <div class="w-full">
                    <label class="font-bold block mb-1.5">Email</label>
                    <Input v-model="inputData.email" name="email" :rules="rules.email" type="text" no-border shadow :disabled="disabled" />
                </div>
            </div>
            <div class="w-full">
                <label class="font-bold block mb-1.5">Address</label>
                <Input v-model="inputData.address" name="address" type="text" no-border shadow :disabled="disabled" />
            </div>
            <div class="w-full">
                <label class="font-bold block mb-1.5">Status</label>
                <Input v-model="inputData.status" name="status" type="select" :options="statusOptions" no-border shadow :disabled="disabled" only-value />
            </div>
            <div class="w-full">
                <label class="font-bold block mb-1.5">Note</label>
                <Input v-model="inputData.note" name="note" type="textarea" no-border shadow :disabled="disabled" />
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
            form: this.$form.createForm(this, { name: 'user_form_rule' }),
            inputData: {
                id: "GH4703776",
                username: "Name",
                phone: "0935473826",
                email: "customer@gmail.com",
                address: "71/9 abc, Go Vap",
                status: "pending",
                note: ""
            },
            rules: {
                email: [
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    }
                ],
            },
            statusOptions: [
                { id: 1, label: "Pending", value: "pending" },
                { id: 2, label: "Other status", value: "other" }
            ]
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
.user-form-component {
    display: flex;
    flex-direction: column;
    overflow: auto;
    .user-form-layout {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 20px;
    }
}
</style>