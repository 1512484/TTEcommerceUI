<template>
    <div class="relative custom-input default shadow no-border filter-select-component">
        <div class="input-placeholder" :class="placeholderClass" v-if="placeholder">{{ placeholder }}</div>
        <a-select ref="inputRef" v-bind="filterAttr" class="w-full h-full" dropdown-class-name="filter-select-dropdown ant-select-dropdown-placement-bottomRight">
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
        <img src="@/assets/images/icon/chevron-down.svg" class="chevron-icon" v-if="mode == 'multiple'" />
        <img src="@/assets/images/icon/filter.svg" class="filter-icon" />
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
        },
        mode: {
            type: String,
            default: ""
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
                // "not-empty": this.value,
                "required": this.required,
                "bold-placeholder": true
            };
        },
        modelValue: {
            get() {
                return this.value;
            },
            set(newValue) {
                this.$emit("input", newValue);
            }
        },
        filterAttr() {
            let result = {};
            if(this.mode) {
                result.mode = this.mode;
            }
            return result;
        }
    },
    methods: {
        handleSelect(newValue) {
            if(this.mode == "multiple") {
                let index = this.modelValue.findIndex(option => option.value == newValue.value);
                if(index == -1) {
                    this.modelValue.push(newValue);
                } else {
                    this.modelValue.splice(index, 1);
                }
            } else {
                this.modelValue = newValue;
            }
        },
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/common/filter-select.scss";
</style>