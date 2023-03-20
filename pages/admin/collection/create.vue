<template>
    <div class="page-content admin-collection-create-page">
        <page-header>
            <template #title>Create Collections</template>
            <template #subtitle>
                <breadcrumb :items="breadcrumbItems" />
            </template>
        </page-header>

        <div class="content-card">
            <collection-form class="pt-5" />
        </div>
    </div>
</template>

<script>
import PageHeader from "@/components/admin/layout/PageHeader.vue";
import Breadcrumb from "@/components/common/Breadcrumb.vue";
import CollectionForm from "@/components/admin/collection/CollectionForm.vue";

export default {
    layout: "admin",
    components: { PageHeader, Breadcrumb, CollectionForm },
    data() {
        return {
            breadcrumbItems: [
                { id: 1, title: "Products", url: "/admin" },
                { id: 2, title: "Collections", url: "/admin/collection" },
                { id: 2, title: "Create Collections", url: "" }
            ],
        }
    }
}
</script>