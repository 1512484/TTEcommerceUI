<template>
    <div class="page-content admin-order-edit-page">
        <page-header>
            <template #title>Edit Banner</template>
            <template #subtitle>
                <breadcrumb :items="breadcrumbItems" />
            </template>
        </page-header>

        <div class="content-card">
            <BannerForm class="pt-5" />
        </div>
    </div>
</template>

<script>
import PageHeader from "@/components/admin/layout/PageHeader.vue";
import Breadcrumb from "@/components/common/Breadcrumb.vue";
import Button from "@/components/common/Button.vue";
import BannerForm from "@/components/admin/banner/BannerForm.vue";

export default {
    layout: "admin",
    components: { PageHeader, Breadcrumb, Button, BannerForm },
    data() {
        return {
            breadcrumbItems: [
                { id: 1, title: "Banner", url: "/admin/banner" },
                { id: 2, title: "Edit Banner", url: "" }
            ]
        }
    }
}
</script>