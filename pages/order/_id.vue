<template>
    <div class="container order-detail-page">
        <h2 class="text-4xl font-extrabold text-center mb-10 page-title">My order details</h2>
        <div class="flex items-end justify-between gap-3 border-b pb-8 group">
            <div>
                <p class="text-base font-bold mb-1.5 group-title">Shipping information</p>
                <p>VNhFAGAJS</p>
            </div>
            <div class="flex items-center gap-x-2.5 gap-y-1 order-status-group">
                <p class="font-bold">Order status</p>
                <Chip>Delivered</Chip>
            </div>
        </div>

        <div class="border-b py-7 group">
            <p class="text-base font-bold mb-1.5 group-title">Shipping Address</p>
            <p class="mb-1.5">Name:  Thanh Le</p>
            <p class="mb-1.5">Email:  thanhle@123</p>
            <p>Address:  71/9, Go Vap, TP.HCM</p>
        </div>

        <div class="border-b pt-7 pb-9 group">
            <p class="text-base font-bold mb-7 group-title product-title">Products</p>
            <div class="order-content">
                <div class="order-list">
                    <OrderItem v-for="i in 2" :key="i" no-border class="mb-7" />
                </div>
                <div class="pt-4.5 total-content">
                    <div class="flex items-center gap-3 mb-2">
                        <p class="font-extrabold flex-grow">Subtotal</p>
                        <p class="text-right">$225.00</p>
                    </div>
                    <div class="flex items-center gap-3 mb-2">
                        <p class="font-extrabold flex-grow">Tax</p>
                        <p class="text-right">$5.00</p>
                    </div>
                    <div class="flex items-center gap-3 mb-2">
                        <p class="font-extrabold flex-grow">Shipping</p>
                        <p class="text-right">$5.00</p>
                    </div>
                    <div class="w-full border-t mt-4.5 mb-2 divider"></div>
                    <div class="flex items-center gap-3">
                        <p class="font-extrabold flex-grow">Total</p>
                        <p class="text-2xl font-extrabold text-right">$230.00</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-7 group payment-group">
            <p class="text-base font-bold mb-1.5 group-title">Payment method</p>
            <p>Pay with paypal</p>
        </div>
    </div>
</template>

<script>
import Chip from "@/components/common/Chip.vue";
import OrderItem from "@/components/order/OrderItem.vue";

export default {
    components: { Chip, OrderItem },
}
</script>

<style lang="scss">
    @import "@/assets/scss/pages/order/order-detail.scss";
</style>