<template>
    <modal ref="itemDetailModalRef" title="Quick view" hide-desktop-title class="two-column-modal item-detail-modal">
        <ItemDetail />
    </modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import ItemDetail from "@/components/item/ItemDetail.vue";

export default {
    components: { Modal, ItemDetail },
    methods: {
        open() {
            this.$refs.itemDetailModalRef.open();
        },
        close() {
            this.$refs.itemDetailModalRef.close();
        }
    }
}
</script>