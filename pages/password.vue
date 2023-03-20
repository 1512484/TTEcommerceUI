<template>
    <div class="container change-password-page">
        <h2 class="text-4xl font-extrabold mb-3.5 page-title">Change password</h2>

        <a-form :form="form">
            <label class="font-bold block mb-2">Email</label>
            <Input v-model="email" name="email" :rules="rules.email" type="email" />

            <label class="font-bold block mb-2">My password</label>
            <Input v-model="password" name="password" :rules="rules.password" type="password" />

            <label class="font-bold block mb-2">New password</label>
            <Input v-model="new_password" name="new_password" :rules="rules.new_password" type="password" />

            <label class="font-bold block mb-2">Confirm password</label>
            <Input v-model="confirm_password" name="confirm_password" :rules="rules.confirm_password" type="password" />

            <div class="flex justify-end mt-7 control-btn-group">
                <Button class="control-btn">SAVE CHANGE</Button>
            </div>
        </a-form>
    </div>
</template>

<script>
import Input from "@/components/common/Input.vue";
import Button from "@/components/common/Button.vue";

export default {
    components: { Input, Button },
    data() {
        return {
            form: this.$form.createForm(this, { name: 'password_rule' }),
            email: "",
            password: "",
            new_password: "",
            confirm_password: "",
            rules: {
                email: [
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    }
                ],
                password: [
                    {
                        required: true,
                        message: 'Please input your Password!',
                    }
                ],
                new_password: [
                    {
                        required: true,
                        message: 'Please input your New Password!',
                    },
                    { validator: this.checkNewPassword }
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
            if (value && value !== form?.getFieldValue('new_password')) {
                callback('Confirm Password confirmation does not match!');
            } else {
                callback();
            }
        },
        checkNewPassword(rule, value, callback) {
            const form = this.form;
            if (value && value == form?.getFieldValue('password')) {
                callback('New Password must differ from Old Password!');
            } else {
                callback();
            }
        },
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/pages/password.scss";
</style>