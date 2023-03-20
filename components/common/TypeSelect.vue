<template>
    <div class="relative custom-input default shadow no-border mb-0 type-select-component">
        <div class="input-placeholder" :class="placeholderClass" v-if="placeholder">{{ placeholder }}</div>
        <a-select v-model="modelValue" ref="inputRef" class="w-full h-full">
            <template v-if="options?.length">
                <a-select-option v-for="(option, index) in options" :key="index" :value="option.value">
                    {{ option.label || "" }}
                </a-select-option>
            </template>
            <template v-else>
                <div class="p-4">
                    No data available
                </div>
            </template>
        </a-select>
    </div>
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: ""
        },
        value: {
            type: String | Number | Object | null
        },
        options: {
            type: Array,
            default: []
        }
    },
    computed: {
        placeholderClass() {
            return {
                "not-empty": this.value,
                "required": this.required
            };
        },
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

<style lang="scss">
    @import "@/assets/scss/components/common/type-select.scss";
</style>