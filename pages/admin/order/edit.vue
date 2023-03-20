<template>
    <div class="page-content admin-order-edit-page">
        <page-header>
            <template #title>Order Detail</template>
            <template #subtitle>
                <breadcrumb :items="breadcrumbItems" />
            </template>
        </page-header>

        <div class="content-card">
            <OrderForm class="pt-5" />
        </div>
    </div>
</template>

<script>
import PageHeader from "@/components/admin/layout/PageHeader.vue";
import Breadcrumb from "@/components/common/Breadcrumb.vue";
import Button from "@/components/common/Button.vue";
import OrderForm from "@/components/admin/order/OrderForm.vue";

export default {
    layout: "admin",
    components: { PageHeader, Breadcrumb, Button, OrderForm },
    data() {
        return {
            breadcrumbItems: [
                { id: 1, title: "Products", url: "/admin" },
                { id: 2, title: "Orders", url: "/admin/order" },
                { id: 3, title: "Order Detail", url: "/admin/order/detail" },
                { id: 4, title: "Edit", url: "" }
            ]
        }
    }
}
</script>