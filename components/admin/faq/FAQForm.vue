<template>
    <a-form :form="form" class="faq-form-component">
        <div class="flex flex-wrap overflow-auto px-8">
            <div class="faq-form-layout">
                <div class="w-full">
                    <label class="font-bold block mb-1.5">Cargo</label>
                    <Input v-model="inputData.cargo" name="cargo" type="textarea" no-border shadow :disabled="disabled" />
                </div>
                <div class="w-full">
                    <label class="font-bold block mb-1.5">Payment</label>
                    <Input v-model="inputData.payment" name="payment" type="textarea" no-border shadow :disabled="disabled" />
                </div>
                <div class="w-full">
                    <label class="font-bold block mb-1.5">Product</label>
                    <Input v-model="inputData.product" name="product" type="textarea" no-border shadow :disabled="disabled" />
                </div>
                <div class="w-full">
                    <label class="font-bold block mb-1.5">Order</label>
                    <Input v-model="inputData.order" name="order" type="textarea" no-border shadow :disabled="disabled" />
                </div>
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
            form: this.$form.createForm(this, { name: 'faq_form_rule' }),
            inputData: {
                cargo: "",
                payment: "",
                product: "",
                order: ""
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
.faq-form-component {
    display: flex;
    flex-direction: column;
    overflow: auto;
    .faq-form-layout {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 20px;
    }
}
</style>