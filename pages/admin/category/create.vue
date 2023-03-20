<template>
    <div class="page-content admin-category-create-page">
        <page-header>
            <template #title>Create Category</template>
            <template #subtitle>
                <breadcrumb :items="breadcrumbItems" />
            </template>
        </page-header>

        <div class="content-card">
            <category-form class="pt-5" />
        </div>
    </div>
</template>

<script>
import PageHeader from "@/components/admin/layout/PageHeader.vue";
import Breadcrumb from "@/components/common/Breadcrumb.vue";
import CategoryForm from "@/components/admin/category/CategoryForm.vue";

export default {
    layout: "admin",
    components: { PageHeader, Breadcrumb, CategoryForm },
    data() {
        return {
            breadcrumbItems: [
                { id: 1, title: "Products", url: "/admin" },
                { id: 2, title: "Category", url: "/admin/category" },
                { id: 2, title: "Create Category", url: "" }
            ],
        }
    }
}
</script>