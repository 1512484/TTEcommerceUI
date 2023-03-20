<template>
    <div class="container order-page">
        <h2 class="text-4xl font-extrabold text-center mb-6 page-title">My order</h2>
        <div class="flex items-center justify-between gap-3 border-b header">
            <p class="text-base font-bold order-list-title">Order Lists</p>
            <FilterSelect placeholder="Filter" v-model="filtered" :options="filterOptions" mode="multiple" />
        </div>
        <div class="order-list">
            <OrderItem v-for="i in 2" :key="i" show-full />
        </div>
    </div>
</template>

<script>
import FilterSelect from "@/components/common/FilterSelect.vue";
import OrderItem from "@/components/order/OrderItem.vue";

export default {
    components: { FilterSelect, OrderItem },
    data() {
        return {
            filterOptions: [
                { value: "all", label: "All" },
                { value: "delivering", label: "Delivering" },
                { value: "delivered", label: "Delivered" },
                { value: "cancelled", label: "Cancelled" }
            ],
            filtered: []
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/pages/order/order.scss";
</style>