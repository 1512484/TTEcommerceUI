<template>
    <div class="list-component">
        <div class="grid gap-item list-content" v-if="!!$slots.default?.[0]">
            <slot></slot>
        </div>
        <div class="empty-list-content" v-else>
            <slot name="empty">
                <div class="flex-center py-8">No data available</div>
            </slot>
        </div>
    </div>
</template>

<style lang="scss">
    @import "@/assets/scss/components/list/list.scss";
</style>