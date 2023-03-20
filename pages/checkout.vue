<template>
    <div class="checkout-page">
        <div class="container">
            <breadcrumb :items="breadcrumbItems" class="mb-4" />
            <div class="checkout-content">
                <div class="left-content">
                    <a-form :form="form" @submit="handleSubmit">
                        <p class="text-lg font-bold mt-6 mb-4 group-title">Contact information</p>
                        <Input placeholder="Email" v-model="email" name="email" :rules="rules.email" type="email" />
                        <p class="pt-1 mb-7">
                            <span class="mr-3">If you do not have an account, we will create one for you</span> 
                            <span class="font-extrabold underline cursor-pointer">Sign up</span>
                        </p>
                        <p class="text-lg font-bold mb-4 group-title">Shipping address</p>
                        <Input placeholder="Name" v-model="name" name="name" :rules="rules.name" />
                        <Input placeholder="Phone" v-model="phone" name="phone" :rules="rules.phone" />
                        <Input placeholder="Address" v-model="address" name="address" :rules="rules.address" />
                        <Input placeholder="Company ( Optional )" v-model="company" name="company" />
                        <Input placeholder="Apartment, suite, etc. ( optional )" v-model="apartment" name="apartment" />
                        <Input placeholder="City" v-model="city" name="city" :rules="rules.city" />
                        <Input placeholder="Country/ Region" v-model="country" name="country" type="select" label-text="name" select-value="isoCode" :options="countryList" :show-search="true" />
                        <div class="flex item-center gap-3">
                            <div style="width: calc(42% - 6px)">
                                <Input placeholder="Zipcode" v-model="zipcode" name="zipcode" />
                            </div>
                            <div style="width: calc(58% - 6px)">
                                <Input placeholder="State" v-model="state" name="state" type="select" :options="stateList" label-text="name" select-value="isoCode" :show-search="true" />
                            </div>
                        </div>
    
                        <p class="text-lg font-bold mt-4 mb-3 group-title">Payment method</p>
                        <a-radio-group v-model="payment_type">
                            <a-radio value="credit" class="mb-4">Pay with Credit card</a-radio>
                            <a-radio value="ewallet" class="mb-4">Pay with Ewallet</a-radio>
                            <a-radio value="cash" class="mb-4">Pay with cash upon delivery</a-radio>
                        </a-radio-group>
                    </a-form>
                </div>
                <div class="right-content">
                    <p class="text-lg font-bold">Cart totals</p>
                    <div class="mb-3 cart-list">
                        <div class="cart-item" v-for="i in 3" :key="i">
                            <div class="relative thumbnail">
                                <img :src="image" class="absolute-full" />
                            </div>
                            <div class="flex-grow info">
                                <p class="font-extrabold mb-0.5">Dress collection</p>
                                <p class="mb-0.5">Size M, Color:</p>
                                <p>Quantity: X1</p>
                            </div>
                            <p class="font-bold info">$25.00</p>
                        </div>
                    </div>
                    <a-form :form="form1" class="w-full flex items-start gap-3 coupon-content">
                        <Input placeholder="Coupon code" v-model="coupon" name="coupon" class="flex-grow coupon-input" />
                        <Button>Apply</Button>
                    </a-form>
                    <div class="total-content">
                        <div class="flex items-center gap-3 mb-1 item">
                            <p class="font-extrabold flex-grow">Subtotal</p>
                            <p class="text-right">$225.00</p>
                        </div>
                        <div class="flex items-center gap-3 mb-1 item">
                            <p class="font-extrabold flex-grow">Tax</p>
                            <p class="text-right">$5.00</p>
                        </div>
                        <div class="flex items-center gap-3 mb-1 item">
                            <p class="font-extrabold flex-grow">Shipping</p>
                            <p class="text-right">$5.00</p>
                        </div>
                        <div class="w-full border-t mt-3 mb-2"></div>
                        <div class="flex items-center gap-3">
                            <p class="font-extrabold flex-grow">Total</p>
                            <p class="text-2xl font-extrabold text-right">$230.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-center">
                <Button class="control-btn submit-btn" @click="handleSubmit">CONTINUE TO PAYMENT</Button>
            </div>
        </div>

        <BlockSubscribe />

        <CreditCardPayModal ref="creditCardPayModalRef" />
        <EwalletPayModal ref="ewalletPayModalRef" @success="handlePaymentSuccess" />
        <PaymentSuccessModal ref="paymentSuccessModalRef" />
    </div>
</template>

<script>
import Breadcrumb from "@/components/common/Breadcrumb.vue";
import Button from "@/components/common/Button.vue";
import Input from "@/components/common/Input.vue";
import CreditCardPayModal from "@/components/modal/CreditCardPayModal.vue";
import EwalletPayModal from "@/components/modal/EwalletPayModal.vue";
import PaymentSuccessModal from "@/components/modal/PaymentSuccessModal.vue";
import BlockSubscribe from "@/components/block/BlockSubscribe.vue";
import { Country, State, City }  from 'country-state-city';
import { images } from "@/static/data.js";

export default {
    components: { 
        Breadcrumb, 
        Button, 
        Input, 
        CreditCardPayModal, 
        EwalletPayModal, 
        PaymentSuccessModal,
        BlockSubscribe
    },
    data() {
        return {
            form: this.$form.createForm(this, { name: 'checkout_rule' }),
            form1: this.$form.createForm(this, { name: 'coupon_rule' }),
            breadcrumbItems: [
                { id: 1, title: "HOME", url: "/" },
                { id: 2, title: "CART", url: "/shopping-cart" },
                { id: 3, title: "CHECKOUT", url: "" }
            ],
            email: "",
            subscribe_email: "",
            name: "",
            phone: "",
            address: "",
            company: "",
            apartment: "",
            city: "",
            country: null,
            zipcode: "",
            state: null,
            coupon: "",
            rules: {
                email: [
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    }
                ],
                name: [
                    {
                        required: true,
                        message: 'Please input your Name!',
                    }
                ],
                phone: [
                    {
                        required: true,
                        message: 'Please input your Phone!',
                    }
                ],
                address: [
                    {
                        required: true,
                        message: 'Please input your Address!',
                    }
                ],
                city: [
                    {
                        required: true,
                        message: 'Please input your City!',
                    }
                ]
            },
            payment_type: "cash",
            image: images[Math.round(Math.random() * images.length)]
        }
    },
    computed: {
        countryList() {
            return Country.getAllCountries();
        },
        stateList() {
            if(this.country?.isoCode) {
                return State.getStatesOfCountry(this.country.isoCode);
            }
            return [];
        }
    },
    methods: {
        handleSubmit(e) {
            e?.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    if(this.payment_type == "ewallet") {
                        this.$refs.ewalletPayModalRef.open();
                    } else if(this.payment_type == "credit") {
                        this.$refs.creditCardPayModalRef.open();
                    } else {
                        this.$refs.paymentSuccessModalRef.open();
                    }
                } else {
                    console.log('Error: ', err);
                }
            });
        },
        handlePaymentSuccess() {
            this.$refs.ewalletPayModalRef.close();
            this.$refs.paymentSuccessModalRef.open();
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/pages/checkout.scss";
</style>