<template>
    <div class="flex-center w-max-content chip-component" :class="chipClass" :style="chipStyle">
        <a-icon :type="icon" v-if="icon" class="mr-1" />
        <slot></slot>
        <a-icon :type="suffixIcon" v-if="suffixIcon" class="ml-1" />
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: ""
        },
        suffixIcon: {
            type: String,
            default: ""
        },
        color: {
            type: String,
            default: "#FFFFFF"
        },
        hoverable: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: "medium",
            validator(value) {
                return ["large", "medium"].includes(value);
            },
        }
    },
    computed: {
        chipClass() {
            let result = {
                "cursor-pointer": this.hoverable
            };
            result[this.size] = true;
            return result;
        },
        chipStyle() {
            return {
                background: this.color
            }
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/common/chip.scss";
</style>