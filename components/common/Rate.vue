<template>
    <div class="rate-component">
        <a-rate v-model="modelValue" :disabled="disabled" allow-half>
            <svg width="18" height="18" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" slot="character">
                <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="currentColor"/>
            </svg>
        </a-rate>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Number | String | null,
            default: 0
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        modelValue: {
            get() {
                return this.value;
            },
            set(newValue) {
                this.$emit("input", newValue);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/components/common/rate.scss";
</style>