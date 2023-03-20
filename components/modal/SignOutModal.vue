<template>
    <modal ref="signOutModalRef" title="Logout" hide-desktop-title class="sign-out-modal">
        <div class="w-full flex-center flex-col sign-out-content">
            <p style="margin-bottom: 71px">Illustrations</p>
            <p class="text-base font-extrabold mb-1">Oh no! You are leaving ...</p>
            <p class="mb-3">Are you sure?</p>
            <Button class="control-btn" @click="$router.push('/sign-in')">LOG OUT</Button>
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
            this.$refs.signOutModalRef.open();
        },
        close() {
            this.$refs.signOutModalRef.close();
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/modal/sign-out-modal.scss";
</style>