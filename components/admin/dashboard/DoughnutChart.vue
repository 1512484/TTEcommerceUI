<template>
    <div class="doughnut-chart-component">
        <Doughnut
            :chart-options="chartOptions"
            :chart-data="filteredData"
            :chart-id="chartId"
            :dataset-id-key="datasetIdKey"
            :plugins="plugins"
            :css-classes="cssClasses"
            :styles="styles"
            :width="width"
            :height="height"
            class="doughnut-chart"
        />

        <!-- <div class="annotate-list">
            <div class="mb-2 annotate" v-for="(item, index) in annotateItems" :key="index"
                :class="{'show': item.isShown}"
                @click="toggleVisible(item)">
                <div class="color" :style="`background: ${item.backgroundColor}`"></div>
                <p class="text-2xs label">{{ item.label }}</p>
            </div>
        </div> -->
    </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs/legacy';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default {
    components: { Doughnut },
    props: {
        chartId: {
            type: String,
            default: `doughnut-chart-${Math.random()}`
        },
        datasetIdKey: {
            type: String,
            default: 'label'
        },
        width: {
            type: Number,
            default: 232
        },
        height: {
            type: Number,
            default: 125
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
        }
    },
    data() {
        return {
            // chartData: {
            //     labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
            //     datasets: [
            //         {
            //             backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            //             data: [40, 20, 80, 10]
            //         }
            //     ]
            // },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: 50,
                plugins: {
                    legend: {
                        position: "right",
                        align: "start",
                        labels: {
                            boxWidth: 14,
                            boxHeight: 14,
                            padding: 7,
                            font: {
                                size: 10,
                                family: "'Lato', sans-serif"
                            }
                        }
                    }
                }
            },
            annotateItems: []
        }
    },
    computed: {
        filteredData() {
            let labels = [];
            let backgroundColor = [];
            let values = [];
            if(this.annotateItems?.length) {
                this.annotateItems.forEach((item) => {
                    if(item.isShown) {
                        labels.push(item.label);
                        backgroundColor.push(item.backgroundColor);
                        values.push(item.value);
                    }
                });
            }
            return {
                labels,
                datasets: [
                    {
                        backgroundColor,
                        data: values
                    }
                ]
            }
        }
    },
    methods: {
        toggleVisible(item) {
            if(item && this.annotateItems?.[item.index]) {
                this.annotateItems[item.index].isShown = !this.annotateItems[item.index].isShown;
            }
        }
    },
    watch: {
        chartData: {
            immediate: true,
            deep: true,
            handler() {
                if(this.chartData?.length) {
                    this.annotateItems = this.chartData.map((item, index) => ({
                        ...item,
                        isShown: true,
                        index
                    }));
                    return;
                }
                this.annotateItems = [];
            }
        }
    }
}
</script>

<style lang="scss">
.doughnut-chart-component {
    display: flex;
    gap: 36px;
    // .doughnut-chart {
    //     width: 125px !important;
    // }
    .annotate-list {
        .annotate {
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            .color {
                width: 14px;
                min-width: 14px;
                height: 14px;
            }

            &:not(.show) {
                opacity: 0.5;
                .label {
                    text-decoration: line-through;
                }
            }
        }
    }
}
</style>