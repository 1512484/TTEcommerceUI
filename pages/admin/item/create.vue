<template>
    <div class="page-content admin-item-create-page">
        <page-header>
            <template #title>Create Items</template>
            <template #subtitle>
                <breadcrumb :items="breadcrumbItems" />
            </template>
        </page-header>

        <div class="content-card">
            <item-form />
        </div>
    </div>
</template>

<script>
import PageHeader from "@/components/admin/layout/PageHeader.vue";
import Breadcrumb from "@/components/common/Breadcrumb.vue";
import ItemForm from "@/components/admin/item/ItemForm.vue";

export default {
    layout: "admin",
    components: { PageHeader, Breadcrumb, ItemForm },
    data() {
        return {
            breadcrumbItems: [
                { id: 1, title: "Products", url: "/admin" },
                { id: 2, title: "Items", url: "/admin/item" },
                { id: 2, title: "Create Item", url: "" }
            ],
        }
    }
}
</script>

<style lang="scss">
.admin-item-create-page {
    .content-card {
        background-color: transparent !important;
        box-shadow: none !important;
        border-radius: 0 !important;
        padding-bottom: 0 !important;
    }
}
</style>