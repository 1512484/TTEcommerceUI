<template>
    <div class="h-full flex flex-col justify-center items-center container sign-up-page">
        <NuxtLink to="/" class="w-max-content">
            <img src="@/assets/images/logo.svg" class="mb-7.5 logo" />
        </NuxtLink>

        <a-form :form="form" class="w-full">
            <label class="text-lg font-bold block mb-4 sign-up-title">Sign up</label>
            <Input placeholder="Name" v-model="name" name="name" :rules="rules.name" />
            <Input placeholder="Email/Phone" v-model="email" name="email" :rules="rules.email" />
            <Input placeholder="Password" v-model="password" name="password" :rules="rules.password" type="password" />
            <Input placeholder="Enter your password" v-model="confirm_password" name="confirm_password" :rules="rules.confirm_password" type="password" />

            <a-checkbox class="font-medium my-7">Remember your password</a-checkbox>

            <Button class="control-btn mb-3" block>SIGN UP</Button>
            <Button class="control-btn" block :dark="false">
                <div class="flex-center gap-5">
                    <img src="@/assets/images/icon/google-icon.svg" class="google-icon" />
                    Sign in with Google
                </div>
            </Button>
        </a-form>

        <p class="text-center term-privacy">
            By logging you agree to our 
            <NuxtLink class="font-bold" to="/sign-in">Terms</NuxtLink> 
            and 
            <NuxtLink class="font-bold" to="/sign-in">Privacy Policy</NuxtLink>
        </p>
    </div>
</template>

<script>
import Input from "@/components/common/Input.vue";
import Button from "@/components/common/Button.vue";

export default {
    layout: "empty",
    components: { Input, Button },
    data() {
        return {
            form: this.$form.createForm(this, { name: 'sign_up_rule' }),
            name: "",
            email: "",
            password: "",
            confirm_password: "",
            rules: {
                name: [
                    {
                        required: true,
                        message: 'Please input your Name!',
                    }
                ],
                email: [
                    {
                        required: true,
                        message: 'Please input your Email/Phone!',
                    }
                ],
                password: [
                    {
                        required: true,
                        message: 'Please input your Password!',
                    }
                ],
                confirm_password: [
                    {
                        required: true,
                        message: 'Please input your Confirm Password!',
                    },
                    { validator: this.checkConfirmPassword }
                ]
            }
        }
    },
    methods: {
        checkConfirmPassword(rule, value, callback) {
            const form = this.form;
            if (value && value !== form?.getFieldValue('password')) {
                callback('Confirm Password confirmation does not match!');
            } else {
                callback();
            }
        },
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/pages/sign-up.scss";
</style>