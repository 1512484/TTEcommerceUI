<template>
    <modal ref="paymentSuccessModalRef" title="Payment Successful" class="payment-success-modal">
        <div class="flex-center flex-col text-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.3337 14.7735V16.0001C29.332 18.8754 28.401 21.673 26.6794 23.9759C24.9579 26.2788 22.538 27.9635 19.7808 28.7787C17.0236 29.5939 14.0767 29.496 11.3796 28.4996C8.68257 27.5032 6.37987 25.6616 4.81494 23.2496C3.25001 20.8375 2.50671 17.9842 2.69589 15.1152C2.88508 12.2462 3.9966 9.51525 5.8647 7.32958C7.7328 5.1439 10.2574 3.62065 13.0619 2.98701C15.8665 2.35336 18.8007 2.64326 21.427 3.81348" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M29.3333 5.33301L16 18.6797L12 14.6797" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p class="text-4xl font-extrabold mt-3 mb-1">$200.00</p>
            <p class="payment-message">Your payment is complete!</p>
            <Button class="control-btn" @click="handleDone">DONE</Button>
        </div>
    </modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import Button from "@/components/common/Button.vue";

export default {
    components: { Modal, Button },
    methods: {
        open() {
            this.$refs.paymentSuccessModalRef.open();
        },
        close() {
            this.$refs.paymentSuccessModalRef.close();
        },
        handleDone() {
            this.close();
            this.$router.push("/");
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/modal/payment-success-modal.scss";
</style>