<template>
    <a-pagination v-model="current" :total="total" :page-size="pageSize" show-less-items class="pagination-component" />
</template>

<script>
export default {
    props: {
        value: {
            type: Number,
            default: 1
        },
        total: {
            type: Number,
            default: 1
        },
        pageSize: {
            type: Number,
            default: 10
        }
    },
    computed: {
        current: {
            get() {
                return this.value;
            },
            set(newValue) {
                this.$emit("input", newValue);
                this.$emit("change", newValue);
            }
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/common/pagination.scss";
</style>