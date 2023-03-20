<template>
    <div class="page-content admin-order-edit-page">
        <page-header>
            <template #title>User Detail</template>
            <template #subtitle>
                <breadcrumb :items="breadcrumbItems" />
            </template>
        </page-header>

        <div class="content-card">
            <UserForm class="pt-5" />
        </div>
    </div>
</template>

<script>
import PageHeader from "@/components/admin/layout/PageHeader.vue";
import Breadcrumb from "@/components/common/Breadcrumb.vue";
import Button from "@/components/common/Button.vue";
import UserForm from "@/components/admin/user/UserForm.vue";

export default {
    layout: "admin",
    components: { PageHeader, Breadcrumb, Button, UserForm },
    data() {
        return {
            breadcrumbItems: [
                { id: 1, title: "Users", url: "/admin/user" },
                { id: 2, title: "User Detail", url: "/admin/user/detail" },
                { id: 3, title: "Edit", url: "" }
            ]
        }
    }
}
</script>