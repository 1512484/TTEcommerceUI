<template>
    <div class="page-content admin-collection-page">
        <page-header>
            <template #title>Collections</template>
            <template #subtitle>
                <breadcrumb :items="breadcrumbItems" />
            </template>
            <template #right-content>
                <Button class="go-to-form-button" @click="$router.push({ name: 'admin-collection-create' })">Create</Button>
            </template>
        </page-header>

        <div class="content-card">
            <collection-list />
        </div>
    </div>
</template>

<script>
import PageHeader from "@/components/admin/layout/PageHeader.vue";
import Breadcrumb from "@/components/common/Breadcrumb.vue";
import Button from "@/components/common/Button.vue";
import CollectionList from "@/components/admin/collection/CollectionList.vue";

export default {
    layout: "admin",
    components: { PageHeader, Breadcrumb, Button, CollectionList },
    data() {
        return {
            breadcrumbItems: [
                { id: 1, title: "Products", url: "/admin" },
                { id: 2, title: "Collections", url: "" }
            ],
        }
    }
}
</script>