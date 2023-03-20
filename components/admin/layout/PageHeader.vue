<template>
    <div class="flex justify-between admin-page-header">
        <div class="left-content">
            <h1 class="page-title" v-if="!!$slots.title?.[0]">
                <slot name="title"></slot>
            </h1>
            <p class="text-base font-semibold" v-if="!!$slots.subtitle?.[0]">
                <slot name="subtitle"></slot>
            </p>
        </div>
        <div class="right-content">
            <slot name="right-content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        
    }
}
</script>

<style lang="scss">
.admin-page-header {
    .left-content {
        margin-bottom: 28px;
        .page-title {
            font-size: var(--text-3xl);
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 4px;
        }
    }
    .right-content {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        flex-wrap: wrap;
        gap: 3;
        margin-bottom: 18px;
    }
}
</style>