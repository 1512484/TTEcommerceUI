<template>
    <div class="flex flex-col justify-center items-center container sign-in-page overflow-auto">
        <NuxtLink to="/" class="w-max-content">
            <img src="@/assets/images/logo.svg" class="mb-7.5 logo" />
        </NuxtLink>

        <a-form :form="form" class="w-full">
            <label class="text-lg font-bold block mb-4 sign-in-title">Sign in</label>
            <Input placeholder="Email/Phone" v-model="email" name="email" :rules="rules.email" />
            <Input placeholder="Password" v-model="password" name="password" :rules="rules.password" type="password" />

            <div class="flex items-center justify-between gap-2 mb-7">
                <a-checkbox class="font-medium">Remember your password</a-checkbox>
                <NuxtLink to="/sign-in" class="font-medium forgot-password">Forgot password?</NuxtLink>
            </div>

            <Button class="control-btn mb-3" block>SIGN IN</Button>
            <Button class="control-btn" block :dark="false">
                <div class="flex-center gap-5">
                    <img src="@/assets/images/icon/google-icon.svg" class="google-icon" />
                    Sign in with Google
                </div>
            </Button>
        </a-form>

        <p class="flex-grow text-center term-privacy">
            <!-- By logging you agree to our 
            <NuxtLink class="font-bold" to="/sign-in">Terms</NuxtLink> 
            and 
            <NuxtLink class="font-bold" to="/sign-in">Privacy Policy</NuxtLink> -->
            Not have account? <NuxtLink class="font-bold" to="/sign-up">Sign up</NuxtLink>
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
            form: this.$form.createForm(this, { name: 'sign_in_rule' }),
            email: "",
            password: "",
            rules: {
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
                ]
            }
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/pages/sign-in.scss";
</style>