<template>
    <div class="page-content admin-order-edit-page">
        <page-header>
            <template #title>User Detail</template>
            <template #subtitle>
                <breadcrumb :items="breadcrumbItems" />
            </template>
            <template #right-content>
                <Button class="go-to-form-button" @click="$router.push({ name: 'admin-user-edit' })">
                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2">
                        <path d="M12 18.75H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.5 3.2778C16.8978 2.90484 17.4374 2.69531 18 2.69531C18.2786 2.69531 18.5544 2.74675 18.8118 2.8467C19.0692 2.94664 19.303 3.09313 19.5 3.2778C19.697 3.46247 19.8532 3.68171 19.9598 3.92299C20.0665 4.16428 20.1213 4.42289 20.1213 4.68405C20.1213 4.94522 20.0665 5.20382 19.9598 5.44511C19.8532 5.68639 19.697 5.90563 19.5 6.0903L7 17.8091L3 18.7466L4 14.9966L16.5 3.2778Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Edit
                </Button>
            </template>
        </page-header>

        <div class="content-card">
            <UserForm class="pt-5" disabled />
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
                { id: 2, title: "User Detail", url: "" }
            ]
        }
    }
}
</script>