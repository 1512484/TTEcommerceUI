<template>
    <div class="summary-chart-card-component">
        <p class="text-base font-extrabold uppercase mb-6 title">{{ title }}</p>

        <div class="line-chart-container">
            <slot name="line-chart"></slot>
        </div>

        <div class="font-extrabold total-container">
            <p class="text-base mb-3.5 count-title" v-if="!!$slots['count-title']?.[0]">
                <slot name="count-title"></slot>
            </p>
            <p class="text-3xl mb-2.5 count-value" v-if="!!$slots['count-value']?.[0]">
                <slot name="count-value"></slot>
            </p>
            <div class="flex items-center count-change">
                <p class="text-base changed-value" v-if="!!$slots['changed-value']?.[0]">
                    <slot name="changed-value"></slot>
                </p>
                <img src="@/assets/images/icon/chevron-up.svg" class="ml-1" />
            </div>
        </div>

        <div class="pt-3 chart-card-bottom">
            <div class="flex gap-3 mb-4.5 chart-info" v-if="!!$slots['annotate']?.[0] || !!$slots['doughnut-chart']?.[0]">
                <div class="w-1/2 annotate" v-if="!!$slots['annotate']?.[0]">
                    <slot name="annotate"></slot>
                </div>
                <div class="w-1/2 mt-1.5 doughnut-chart-container" v-if="!!$slots['doughnut-chart']?.[0]">
                    <slot name="doughnut-chart"></slot>
                </div>
            </div>
            <div class="bottom-info" v-if="!!$slots['bottom-info']?.[0]">
                <slot name="bottom-info"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ""
        }
    }
}
</script>

<style lang="scss">
.summary-chart-card-component {
    padding: 24px 32px 55px;
    background: #FFFFFF;
    border-radius: 8px;
    box-shadow: 1px 1px 8px #C5C5C5;

    .line-chart-container {
        width: 100%;
        max-width: 419px;
        height: 159px;
        // background: #F93;
        margin-bottom: 32px;
    }

    .total-container {
        padding: 18px 0;
        border: 1px solid;
        border-color: #D9D9D9 transparent #D9D9D9 transparent;
    }

    .doughnut-chart-container {
        height: 125px;
        // background: #F93;
    }
}
</style>