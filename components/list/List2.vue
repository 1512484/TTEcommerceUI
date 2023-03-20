<template>
    <div class="flex-center list-2-component">
        <div class="grid gap-item list-content" :style="listContentStyle" v-if="!!$slots.default?.[0]">
            <slot></slot>
        </div>
        <div class="empty-list-content" v-else>
            <slot name="empty">
                <div class="flex-center py-8">No data available</div>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        listContentStyle() {
            let result = {};
            if(this.$slots.default?.length) {
                let itemNumber = this.$slots.default?.length;
                if(itemNumber > 2) {
                    result.gridTemplateRows = "repeat(2, minmax(0, 50%))";
                }
                result.gridTemplateColumns = `repeat(${itemNumber}, minmax(0, 276px))`;
                if(itemNumber == 5) {
                    result.gridTemplateColumns = `repeat(4, minmax(0, 276px))`;
                }
            }
            return result;
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/list/list-2.scss";
</style>