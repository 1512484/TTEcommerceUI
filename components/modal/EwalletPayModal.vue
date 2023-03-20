<template>
    <modal ref="ewalletModalRef" title="Pay with Ewallet" class="ewallet-pay-modal">
        <div class="overflow-auto">
            <div class="payment-content">
                <a-radio-group v-model="wallet_type" class="flex-center flex-wrap mb-7">
                    <a-radio value="momo">
                        <div class="relative flex flex-col items-center text-center wallet-item">
                            <img src="@/assets/images/payment/momo.svg" />
                            <p class="font-bold wallet-name">Momo</p>
                        </div>
                    </a-radio>
                    <a-radio value="zalo-pay">
                        <div class="relative flex flex-col items-center text-center wallet-item">
                            <img src="@/assets/images/payment/zalo-pay.svg" />
                            <p class="font-bold wallet-name">Zalo Pay</p>
                        </div>
                    </a-radio>
                    <a-radio value="vn-pay">
                        <div class="relative flex flex-col items-center text-center wallet-item">
                            <img src="@/assets/images/payment/vn-pay.svg" />
                            <p class="font-bold wallet-name">VN Pay</p>
                        </div>
                    </a-radio>
                </a-radio-group>

                <div style="padding: 81px 0 93px;">
                    <p class="text-center">Choose e-wallet to pay</p>
                </div>
        
                <div class="flex-center">
                    <Button class="control-btn" @click="$emit('success')">PAY NOW</Button>
                </div>
            </div>
        </div>
    </modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import Button from "@/components/common/Button.vue";

export default {
    components: { Modal, Button },
    data() {
        return {
            wallet_type: "momo",
        }
    },
    methods: {
        open() {
            this.$refs.ewalletModalRef.open();
        },
        close() {
            this.$refs.ewalletModalRef.close();
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/modal/ewallet-pay-modal.scss";
</style>