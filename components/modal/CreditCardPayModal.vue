<template>
    <modal ref="creditCardPayModalRef" title="Pay with credit card" class="credit-card-pay-modal">
        <div class="overflow-auto">
            <div class="payment-content">
                <a-radio-group v-model="card_type" class="flex items-center flex-wrap mb-7">
                    <a-radio value="visa">
                        <div class="flex items-center gap-6 card-item">
                            <img src="@/assets/images/payment/visa.svg" />
                            <img src="@/assets/images/payment/mastercard.svg" />
                        </div>
                    </a-radio>
                    <a-radio value="paypal">
                        <div class="flex items-center gap-6 card-item">
                            <img src="@/assets/images/payment/paypal.svg" />
                        </div>
                    </a-radio>
                </a-radio-group>
                <p class="text-lg font-bold mb-3">Pay securely  using your credit card</p>
                <a-form :form="form" @submit="handleSubmit">
                    <label class="block mb-2">Card Name</label>
                    <Input placeholder="Name" v-model="name" name="name" :rules="rules.name" />
                    <label class="block mb-2">Card number</label>
                    <Input placeholder="Number" v-model="number" name="number" type="number" :rules="rules.number" />
                    <label class="block mb-2">Expiration (MM/YY)</label>
                    <Input placeholder="MM/YY" v-model="exp_date" name="exp_date" type="month" :rules="rules.exp_date" />
                    <label class="block mb-2">Card security code</label>
                    <Input placeholder="Code" v-model="code" name="code" :rules="rules.code" />
                </a-form>
        
                <a-checkbox class="mb-7">Save credit card information</a-checkbox>
        
                <div class="flex-center">
                    <Button class="control-btn" @click="handleSubmit">CONTINUE TO PAYMENT</Button>
                </div>
            </div>
        </div>
    </modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import Input from "@/components/common/Input.vue";
import Button from "@/components/common/Button.vue";

export default {
    components: { Modal, Input, Button },
    data() {
        return {
            form: this.$form.createForm(this, { name: 'credit_payment_rule' }),
            card_type: "visa",
            name: "",
            number: "",
            exp_date: "",
            code: "",
            rules: {
                name: [
                    {
                        required: true,
                        message: 'Please input Card Name!',
                    }
                ],
                number: [
                    {
                        required: true,
                        message: 'Please input Card Number!',
                    }
                ],
                exp_date: [
                    {
                        required: true,
                        message: 'Please input Card Expiration Date!',
                    }
                ],
                code: [
                    {
                        required: true,
                        message: 'Please input Security Code!',
                    }
                ]
            },
        }
    },
    methods: {
        open() {
            this.$refs.creditCardPayModalRef.open();
        },
        close() {
            this.$refs.creditCardPayModalRef.close();
        },
        handleSubmit(e) {
            e?.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                } else {
                    console.log('Error: ', err);
                }
            });
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/modal/credit-card-pay-modal.scss";
</style>