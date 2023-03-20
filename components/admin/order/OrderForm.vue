<template>
    <a-form :form="form" class="order-form-component">
        <div class="flex flex-wrap overflow-auto px-8">
            <div class="order-form-layout">
                <div class="w-full">
                    <label class="font-bold block mb-1.5">ID</label>
                    <Input v-model="inputData.id" name="id" type="text" no-border shadow disabled />
                </div>
                <div class="w-full flex">
                    <div class="w-1/2 pr-2.5">
                        <label class="font-bold block mb-1.5">Product Name</label>
                        <Input v-model="inputData.product_name" name="product_name" type="text" no-border shadow :disabled="disabled" />
                    </div>
                    <div class="w-1/2 pl-2.5">
                        <label class="font-bold block mb-1.5">Quantity</label>
                        <Input v-model="inputData.product_quantity" name="product_quantity" type="text" no-border shadow :disabled="disabled" />
                    </div>
                </div>
                <div class="w-full">
                    <label class="font-bold block mb-1.5">Customer Name</label>
                    <Input v-model="inputData.customer_name" name="customer_name" type="text" no-border shadow :disabled="disabled" />
                </div>
                <div class="w-full">
                    <label class="font-bold block mb-1.5">Phone</label>
                    <Input v-model="inputData.customer_phone" name="customer_phone" type="phone" :form="form" no-border shadow :disabled="disabled" />
                </div>
                <div class="w-full">
                    <label class="font-bold block mb-1.5">Email</label>
                    <Input v-model="inputData.customer_email" name="customer_email" :rules="rules.email" type="text" no-border shadow :disabled="disabled" />
                </div>
                <div class="w-full">
                    <label class="font-bold block mb-1.5">Address</label>
                    <Input v-model="inputData.customer_address" name="customer_address" type="text" no-border shadow :disabled="disabled" />
                </div>
                <div class="w-full">
                    <label class="font-bold block mb-1.5">Payment Method</label>
                    <Input v-model="inputData.payment_method" name="payment_method" type="select" :options="paymentOptions" no-border shadow :disabled="disabled" only-value />
                </div>
                <div class="w-full">
                    <label class="font-bold block mb-1.5">Order Total</label>
                    <Input v-model="inputData.total" name="total" type="text" no-border shadow :disabled="disabled" />
                </div>
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
            form: this.$form.createForm(this, { name: 'order_form_rule' }),
            inputData: {
                id: "GH4703776",
                product_name: "Product name",
                product_quantity: 2,
                customer_name: "Mimi",
                customer_phone: "0935473826",
                customer_email: "customer@gmail.com",
                customer_address: "71/9 abc, Go Vap",
                payment_method: "credit",
                total:  350,
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
            paymentOptions: [
                { id: 1, label: "Credit card", value: "credit" },
                { id: 2, label: "Cash", value: "cash" }
            ],
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
        }
    }
}
</script>

<style lang="scss">
.order-form-component {
    display: flex;
    flex-direction: column;
    overflow: auto;
    .order-form-layout {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 20px;
    }
}
</style>