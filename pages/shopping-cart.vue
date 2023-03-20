<template>
    <div class="container shopping-cart-page">
        <breadcrumb :items="breadcrumbItems" class="mb-7" />

        <p class="text-lg font-extrabold mb-4 heading-title">Payment options</p>

        <CartList />

        <div class="cart-total">
            <p class="mb-2">
                <span class="font-bold title">Subtotal:</span>
                <span class="value">$300.00</span>
            </p>
            <p class="mb-1.5">
                <span class="font-bold title">Shipping:</span>
                <span class="value">$20.00</span>
            </p>
            <p>
                <span class="text-base font-extrabold title">Total:</span>
                <span class="text-base font-extrabold value">$320.00</span>
            </p>
        </div>

        <div class="flex-center">
            <Button class="control-btn" @click="$router.push('/checkout')">CONTINUE</Button>
        </div>
    </div>
</template>

<script>
import Breadcrumb from "@/components/common/Breadcrumb.vue";
import CartList from "@/components/list/CartList.vue";
import Button from "@/components/common/Button.vue";

export default {
    components: { Breadcrumb, CartList, Button },
    data() {
        return {
            breadcrumbItems: [
                { id: 1, title: "HOME", url: "/" },
                { id: 2, title: "CART", url: "" }
            ],
            
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/pages/shopping-cart.scss";
</style>