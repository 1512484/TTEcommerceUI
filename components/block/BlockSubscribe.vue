<template>
    <div class="block-subscribe-component">
        <block background="#FBF8F1" class="container flex-center flex-col">
            <h4 class="text-lg font-extrabold text-center mb-0.5 block-title">SUBSCRIBE TO OUR NEWSLETTER</h4>
            <p class="text-center block-description">Get the latest updates on new products and upcoming sales</p>
            <a-form :form="form" @submit="handleSubmit" class="w-full flex items-start gap-3 subscribe-content">
                <Input placeholder="Enter your email address" v-model="email" name="search" type="email" :rules="rules" no-border shadow class="email-input" />
                <Button type="submit" color="#E17A35">Send</Button>
            </a-form>
        </block>
    </div>
</template>

<script>
import Block from "@/components/block/Block.vue";
import Input from "@/components/common/Input.vue";
import Button from "@/components/common/Button.vue";

export default {
    components: { Block, Input, Button },
    data() {
        return {
            form: this.$form.createForm(this, { name: 'dynamic_rule' }),
            email: "",
            rules: [
                {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                }
            ],
        }
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                } else {
                    console.log('Error: ', err);
                }
            });
        },
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/block/block-subscribe.scss";
</style>