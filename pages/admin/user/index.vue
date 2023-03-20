<template>
    <div class="page-content admin-user-page">
        <page-header>
            <template #title>Users</template>
            <template #subtitle>
                <breadcrumb :items="breadcrumbItems" />
            </template>
            <template #right-content>
                <DatePicker v-model="filteredDate" range />
            </template>
        </page-header>

        <div class="content-card">
            <UserTable />
        </div>
    </div>
</template>

<script>
import PageHeader from "@/components/admin/layout/PageHeader.vue";
import Breadcrumb from "@/components/common/Breadcrumb.vue";
import DatePicker from "@/components/admin/common/DatePicker.vue";
import UserTable from "@/components/admin/user/UserTable.vue";

export default {
    layout: "admin",
    components: { PageHeader, Breadcrumb, DatePicker, UserTable },
    data() {
        return {
            breadcrumbItems: [
                { id: 1, title: "Users", url: "" }
            ],
            filteredDate: []
        }
    }
}
</script>