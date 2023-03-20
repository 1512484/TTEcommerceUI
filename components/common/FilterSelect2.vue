<template>
    <div class="relative custom-input default shadow no-border filter-select-2-component">
        <div class="input-placeholder" :class="placeholderClass" v-if="placeholder">{{ placeholder }}</div>
        <a-select ref="inputRef" class="w-full h-full" v-model="modelValue" dropdown-class-name="filter-select-dropdown ant-select-dropdown-placement-bottomRight">
            <template v-if="options?.length">
                <a-select-option v-for="(option, index) in options" :key="index" :value="option.value" @click="handleSelect(option)">
                    {{ option.label || "" }}
                </a-select-option>
            </template>
            <template v-else>
                <div class="p-4">
                    No data available
                </div>
            </template>
        </a-select>
        <img src="@/assets/images/icon/filter-filled.svg" class="filter-icon" />
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
            type: String | Number | Object | Array | null
        },
        options: {
            type: Array,
            default: () => ([])
        }
    },
    data() {
        return {
            isOpen: false
        }
    },
    computed: {
        placeholderClass() {
            return {
                "not-empty": this.value,
                "required": this.required,
                "bold-placeholder": true
            };
        },
        modelValue: {
            get() {
                if(typeof this.value == "object") {
                    return this.value?.label || "";
                }
                return this.value;
            },
            set(newValue) {
                this.$emit("input", newValue);
            }
        },
    },
    methods: {
        handleSelect(newValue) {
            this.modelValue = newValue;
        },
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/common/filter-select-2.scss";
</style>