<template>
    <div class="page-content admin-item-page">
        <page-header>
            <template #title>Items</template>
            <template #subtitle>
                <breadcrumb :items="breadcrumbItems" />
            </template>
            <template #right-content>
                <Button class="go-to-form-button" @click="$router.push({ name: 'admin-item-create' })">Create</Button>
            </template>
        </page-header>

        <div class="content-card">
            <item-list />
        </div>
    </div>
</template>

<script>
import PageHeader from "@/components/admin/layout/PageHeader.vue";
import Breadcrumb from "@/components/common/Breadcrumb.vue";
import Button from "@/components/common/Button.vue";
import ItemList from "@/components/admin/item/ItemList.vue";

export default {
    layout: "admin",
    components: { PageHeader, Breadcrumb, Button, ItemList },
    data() {
        return {
            breadcrumbItems: [
                { id: 1, title: "Products", url: "/admin" },
                { id: 2, title: "Items", url: "" }
            ],
        }
    }
}
</script>