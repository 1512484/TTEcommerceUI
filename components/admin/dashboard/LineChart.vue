<template>
    <div class="line-chart-component">
        <LineChartGenerator
            :chart-options="chartOptions"
            :chart-data="lineChartData"
            :chart-id="chartId"
            :dataset-id-key="datasetIdKey"
            :plugins="plugins"
            :css-classes="cssClasses"
            :styles="styles"
            :width="width"
            :height="height"
        />
        <div class="flex items-center changed-percent">
            <p class="text-lg font-extrabold">45%</p>
            <img src="@/assets/images/icon/chevron-up.svg" class="ml-0.5" />
        </div>
    </div>
</template>

<script>
import { Line as LineChartGenerator } from 'vue-chartjs/legacy';

import {
    Chart as ChartJS1,
    Title,
    Tooltip,
    // Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement
} from 'chart.js';

ChartJS1.register(
    Title,
    Tooltip,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement
)

export default {
    components: { LineChartGenerator },
    props: {
        chartId: {
            type: String,
            default: `line-chart-${Math.random()}`
        },
        datasetIdKey: {
            type: String,
            default: 'label'
        },
        width: {
            type: Number,
            default: 321
        },
        height: {
            type: Number,
            default: 159
        },
        cssClasses: {
            default: '',
            type: String
        },
        styles: {
            type: Object,
            default: () => {}
        },
        plugins: {
            type: Array,
            default: () => []
        },
        chartData: {
            type: Array
        },
        borderColor: {
            type: String,
            default: "#f87979"
        }
    },
    data() {
        return {
            // chartData: {
            //     labels: [
            //         'January',
            //         'February',
            //         'March',
            //         'April',
            //         'May',
            //         'June',
            //         'July'
            //     ],
            //     datasets: [
            //         {
            //             backgroundColor: '#f87979',
            //             data: [40, 39, 10, 40, 39, 80, 40]
            //         }
            //     ]
            // },
        }
    },
    computed: {
        lineChartData() {
            let labels = [];
            let values = [];
            if(this.chartData?.length) {
                this.chartData.forEach(item => {
                    labels.push(item.label);
                    values.push(item.value);
                });
            }
            
            return {
                labels,
                datasets: [
                    {
                        backgroundColor: this.borderColor,
                        data: values
                    }
                ]
            }
        },
        chartOptions() {
            return {
                responsive: true,
                maintainAspectRatio: false,
                borderColor: this.borderColor,
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                weight: "800",
                                family: "'Lato', sans-serif"
                            }
                        },
                        title: {
                            font: {
                                weight: "800",
                                family: "'Lato', sans-serif"
                            }
                        }
                    },
                    title: {
                        font: {
                            weight: "800",
                            family: "'Lato', sans-serif"
                        }
                    }
                }
            }
        }
    }
}
</script>

<style lang="scss">
.line-chart-component {
    position: relative;
    width: 400px;
    &::after {
        content: "Percent";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 25px;
        background: #FFFFFF;
        font-size: var(--text-xs);
    }

    &::before {
        content: "Month";
        position: absolute;
        bottom: 0;
        right: -50px;
        font-size: var(--text-xs);
    }

    .changed-percent {
        position: absolute;
        top: 50%;
        left: calc(100% + 10px);
        transform: translateY(-50%);
        white-space: nowrap;
    }
}
</style>