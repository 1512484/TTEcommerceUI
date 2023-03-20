<template>
    <div class="admin-dashboard">
        <page-header>
            <template #title>Dashboard</template>
            <template #subtitle>E-commerce website template Admin</template>
            <template #right-content>
                <DatePicker v-model="filteredDate" range />
            </template>
        </page-header>

        <summary-list class="mb-6" />

        <summary-chart-card-list />
    </div>
</template>

<script>
import PageHeader from "@/components/admin/layout/PageHeader.vue";
import DatePicker from "@/components/admin/common/DatePicker.vue";
import SummaryList from "@/components/admin/dashboard/SummaryList.vue";
import SummaryChartCardList from "@/components/admin/dashboard/SummaryChartCardList.vue";

export default {
    layout: "admin",
    components: { PageHeader, DatePicker, SummaryList, SummaryChartCardList },
    data() {
        return {
            filteredDate: []
        }
    }
}
</script>