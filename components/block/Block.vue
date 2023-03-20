<template>
    <div class="block-component" :style="styleValue">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        background: {
            type: String,
            default: "transparent"
        }
    },
    computed: {
        styleValue() {
            return { background: this.background };
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/block/block.scss";
</style>