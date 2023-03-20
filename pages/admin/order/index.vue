<template>
    <div class="page-content admin-order-page">
        <page-header>
            <template #title>Orders</template>
            <template #subtitle>
                <breadcrumb :items="breadcrumbItems" />
            </template>
            <template #right-content>
                <DatePicker v-model="filteredDate" range />
            </template>
        </page-header>

        <div class="content-card">
            <OrderTable />
        </div>
    </div>
</template>

<script>
import PageHeader from "@/components/admin/layout/PageHeader.vue";
import Breadcrumb from "@/components/common/Breadcrumb.vue";
import DatePicker from "@/components/admin/common/DatePicker.vue";
import OrderTable from "@/components/admin/order/OrderTable.vue";

export default {
    layout: "admin",
    components: { PageHeader, Breadcrumb, DatePicker, OrderTable },
    data() {
        return {
            breadcrumbItems: [
                { id: 1, title: "Products", url: "/admin" },
                { id: 2, title: "Orders", url: "" }
            ],
            filteredDate: []
        }
    }
}
</script>