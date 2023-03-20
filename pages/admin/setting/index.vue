<template>
    <div class="page-content admin-setting-page">
        <page-header>
            <template #title>Settings</template>
            <template #subtitle>
                <breadcrumb :items="breadcrumbItems" />
            </template>
        </page-header>

        <div class="content-card">
            <SettingForm class="pt-5" />
        </div>
    </div>
</template>

<script>
import PageHeader from "@/components/admin/layout/PageHeader.vue";
import Breadcrumb from "@/components/common/Breadcrumb.vue";
import Button from "@/components/common/Button.vue";
import SettingForm from "@/components/admin/setting/SettingForm.vue";

export default {
    layout: "admin",
    components: { PageHeader, Breadcrumb, Button, SettingForm },
    data() {
        return {
            breadcrumbItems: [
                { id: 1, title: "Settings", url: "" }
            ]
        }
    }
}
</script>