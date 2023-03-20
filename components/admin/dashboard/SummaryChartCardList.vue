<template>
    <div class="summary-chart-card-list">
        <summary-chart-card title="TOTAL SALES" class="total-sales-chart-card">
            <template #line-chart>
                <line-chart :chart-data="lineChartData" border-color="#FF5F2D" />
            </template>

            <template #count-title>Sales</template>
            <template #count-value>240</template>
            <template #changed-value>15%</template>

            <template #annotate>
                <p class="text-base font-extrabold mb-2">Category</p>
                <p class="mb-1">
                    <span class="mr-2.5 category-name">Luxury:</span>
                    <span class="text-base font-extrabold">102</span>
                </p>
                <p class="mb-1">
                    <span class="mr-2.5 category-name">Affordable:</span>
                    <span class="text-base font-extrabold">1902</span>
                </p>
                <p>
                    <span class="mr-2.5 category-name">Total:</span>
                    <span class="text-base font-extrabold">2102</span>
                </p>
            </template>

            <template #doughnut-chart>
                <doughnut-chart :chart-data="totalSaleChartData" />
            </template>

            <template #bottom-info>
                <p>
                    <span class="font-bold">*Note: </span>
                    Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting
                </p>
            </template>
        </summary-chart-card>

        <summary-chart-card title="TOTAL PURCHASE">
            <template #line-chart>
                <line-chart :chart-data="lineChartData" border-color="#00AD1C" />
            </template>

            <template #count-title>Sales</template>
            <template #count-value>240</template>
            <template #changed-value>15%</template>

            <template #bottom-info>
                <p class="text-base font-bold mb-1.5">Gross sales of November</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </template>
        </summary-chart-card>

        <summary-chart-card title="TOTAL PAGE VIEWS">
            <template #line-chart>
                <line-chart :chart-data="lineChartData" border-color="#00AED4" />
            </template>

            <template #count-title>Views</template>
            <template #count-value>240</template>
            <template #changed-value>15%</template>

            <template #annotate>
                <p class="text-base font-extrabold mb-1">Desktop</p>
                <p class="mb-2">
                    <span>Devices accessed:</span>
                    <span class="text-base font-extrabold ml-1.5">1039</span>
                </p>

                <p class="text-base font-extrabold mb-1">Mobile</p>
                <p>
                    <span>Devices accessed:</span>
                    <span class="text-base font-extrabold ml-1.5">2063</span>
                </p>
            </template>

            <template #doughnut-chart>
                <doughnut-chart :chart-data="totalViewChartData" />
            </template>
        </summary-chart-card>
    </div>
</template>

<script>
import SummaryChartCard from '@/components/admin/dashboard/SummaryChartCard.vue';
import DoughnutChart from '@/components/admin/dashboard/DoughnutChart.vue';
import LineChart from '@/components/admin/dashboard/LineChart.vue';

export default {
    components: { SummaryChartCard, DoughnutChart, LineChart },
    data() {
        return {
            totalSaleChartData: [
                {
                    label: "Luxury",
                    value: 102,
                    backgroundColor: "#295E61"
                },
                {
                    label: "Affordable",
                    value: 1902,
                    backgroundColor: "#E17A35"
                }
            ],
            totalViewChartData: [
                {
                    label: "Desktop",
                    value: 1039,
                    backgroundColor: "#295E61"
                },
                {
                    label: "Mobile",
                    value: 2063,
                    backgroundColor: "#E17A35"
                }
            ],
            lineChartData: [
                { label: "January", value: 40 },
                { label: "February", value: 39 },
                { label: "March", value: 10 },
                { label: "April", value: 40 },
                { label: "May", value: 39 },
                { label: "June", value: 80 },
                { label: "July", value: 40 }
            ]
        }
    }
}
</script>

<style lang="scss">
.summary-chart-card-list {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(auto-fill, minmax(484px, 1fr));

    .total-sales-chart-card {
        .category-name {
            display: inline-block;
            min-width: 71px;
        }
    }
}
</style>