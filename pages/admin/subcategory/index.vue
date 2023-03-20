<template>
    <div class="page-content admin-subcategory-page">
        <page-header>
            <template #title>Subcategory</template>
            <template #subtitle>
                <breadcrumb :items="breadcrumbItems" />
            </template>
            <template #right-content>
                <Button class="go-to-form-button" @click="$router.push({ name: 'admin-category-create' })">Create</Button>
            </template>
        </page-header>

        <div class="content-card">
            <p class="text-lg font-extrabold px-5 pt-5">Category Name</p>
            <category-list />
        </div>
    </div>
</template>

<script>
import PageHeader from "@/components/admin/layout/PageHeader.vue";
import Breadcrumb from "@/components/common/Breadcrumb.vue";
import Button from "@/components/common/Button.vue";
import CategoryList from "@/components/admin/category/CategoryList.vue";

export default {
    layout: "admin",
    components: { PageHeader, Breadcrumb, Button, CategoryList },
    data() {
        return {
            breadcrumbItems: [
                { id: 1, title: "Products", url: "/admin" },
                { id: 2, title: "Category", url: "/admin/category" },
                { id: 2, title: "Subcategory", url: "" }
            ],
        }
    }
}
</script>