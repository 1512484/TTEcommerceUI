<template>
    <div class="page-content admin-faq-page">
        <page-header>
            <template #title>Theme FAQs</template>
            <template #subtitle>
                <breadcrumb :items="breadcrumbItems" />
            </template>
        </page-header>

        <div class="content-card">
            <FAQForm class="pt-5" />
        </div>
    </div>
</template>

<script>
import PageHeader from "@/components/admin/layout/PageHeader.vue";
import Breadcrumb from "@/components/common/Breadcrumb.vue";
import Button from "@/components/common/Button.vue";
import FAQForm from "@/components/admin/faq/FAQForm.vue";

export default {
    layout: "admin",
    components: { PageHeader, Breadcrumb, Button, FAQForm },
    data() {
        return {
            breadcrumbItems: [
                { id: 1, title: "FAQs", url: "" }
            ]
        }
    }
}
</script>