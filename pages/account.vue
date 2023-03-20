<template>
    <div class="container account-page">
        <h2 class="text-4xl font-extrabold mb-3.5 page-title">Account</h2>
        <p class="font-bold mb-6">Avatar</p>
        <ImageUpload class="mb-7" />
        <a-form :form="form" @submit="handleSubmit">
            <p class="font-bold mb-2">Name</p>
            <Input placeholder="Name" v-model="name" name="name" :rules="rules.name" type="text" />
            <div class="flex items-center justify-between gap-3 mb-2">
                <p class="font-bold">Email</p>
                <p class="text-gray">For notification and logging in</p>
            </div>
            <Input placeholder="Email" v-model="email" name="email" :rules="rules.email" type="email" />
            <div class="flex items-center justify-between gap-3 mb-2">
                <p class="font-bold">Phone</p>
                <p class="text-gray">For notification and logging in</p>
            </div>
            <Input placeholder="Phone" v-model="phone" name="phone" :rules="rules.phone" type="number" />
        </a-form>
        <p class="font-bold mt-4 mb-2">Linked accounts</p>
        <p class="mb-4.5">We use this to let you sign in and populate your profile informations</p>
        
        <div class="flex items-center border-t border-b py-4.5 google-sign-up">
            <img src="@/assets/images/icon/google-icon.svg" />
            <p class="font-bold flex-grow mx-3">Sign up with Google</p>
            <Button size="medium" :dark="false">Connect</Button>
        </div>

        <div class="border-b py-4.5 mb-8">
            <p class="text-base font-bold mb-2">Delete accounts</p>
            <p>By deleting your account you will lose all your data</p>
        </div>

        <div class="flex justify-end">
            <Button class="control-btn">SAVED CHANGE</Button>
        </div>
    </div>
</template>

<script>
import ImageUpload from "@/components/common/ImageUpload.vue";
import Input from "@/components/common/Input.vue";
import Button from "@/components/common/Button.vue";

export default {
    components: { ImageUpload, Input, Button },
    data() {
        return {
            form: this.$form.createForm(this, { name: 'account_rule' }),
            name: "",
            email: "",
            phone: "",
            rules: {
                email: [{ type: 'email', message: 'The input is not valid E-mail!' }],
                name: [],
                phone: [],
            }
        }
    },
    methods: {
        handleSubmit() {

        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/pages/account.scss";
</style>