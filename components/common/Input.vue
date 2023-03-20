<template>
    <a-form-item class="custom-input" :class="inputClass">
        <div class="input-placeholder" :class="placeholderClass" v-if="placeholder">{{ placeholder }}</div>
        <template v-if="type == 'select'">
            <a-select ref="inputRef" :show-search="showSearch" v-decorator="decorator" :disabled="disabled" @change="handleInput" @blur="handleSelectBlur" :filter-option="filterOption" :mode="selectMode">
                <slot>
                    <!-- <template v-if="options?.length"> -->
                        <a-select-option v-for="(option, index) in options" :key="index" :value="option[selectValue]" :title="option[labelText]">
                            {{ option[labelText] || "" }}
                        </a-select-option>
                    <!-- </template> -->
                    <!-- <template v-else>
                        <div class="p-4">
                            No data available
                        </div>
                    </template> -->
                </slot>
            </a-select>
            <img src="@/assets/images/icon/chevron-down-gray.svg" class="chevron-icon" v-if="selectMode == 'multiple' || selectMode == 'tags'" />
        </template>
        <a-textarea ref="inputRef" v-decorator="decorator" :disabled="disabled" @input="handleInput" v-else-if="type == 'textarea'" />
        <a-input-password ref="inputRef" v-decorator="decorator" :disabled="disabled" @input="handleInput" v-else-if="type == 'password'" />
        <a-input-number ref="inputRef" v-decorator="decorator" :disabled="disabled" type="number" @change="handleInput" @keydown="handleNumberKeydown" v-else-if="type == 'number'" />
        <a-input ref="inputRef" v-decorator="decorator" @input="handleInput" :disabled="disabled" v-else-if="type == 'phone'" />
        <a-month-picker ref="inputRef" v-decorator="decorator" :disabled="disabled" placeholder="" @change="handleInput" format="MM/YY" v-else-if="type == 'month'">
            <div slot="suffixIcon"></div>
        </a-month-picker>
        <a-upload v-decorator="decorator" :disabled="disabled" :name="name" action="/upload.do" list-type="picture" accept=".png,.jpeg,.webp,.svg" class="image-upload" v-else-if="type == 'image'">
            <a-button></a-button>
        </a-upload>
        <div class="ant-input w-full relative custom-color-input" v-else-if="type == 'color'">
            <input class="absolute-full" type="color" :value="modelValue" :disabled="disabled" @input="handleInput" ref="inputRef" />
            <div class="color-box" :style="{backgroundColor: modelValue}" v-if="modelValue"></div>
        </div>
        <a-input ref="inputRef" v-decorator="decorator" :disabled="disabled" @input="handleInput" :type="type" v-else>
            <template v-if="hasPrefixSlot" #prefix>
                <slot name="prefix">
                    <img src="@/assets/images/icon/magnify.svg" v-if="prefixSearchInput" />
                </slot>
            </template>
            <template v-if="hasSuffixSlot" #suffix>
                <slot name="suffix">
                    <img src="@/assets/images/icon/magnify.svg" v-if="suffixSearchInput" />
                </slot>
            </template>
            <template v-if="hasAddonBeforeSlot" #addonBefore>
                <slot name="addonBefore"></slot>
            </template>
            <template v-if="hasAddonAfterSlot" #addonAfter>
                <slot name="addonAfter"></slot>
            </template>
        </a-input>

        <i aria-label="icon: close-circle" tabindex="-1" class="anticon anticon-close-circle custom-input-delete-button" v-if="showCloseInputButton" @click="handleRemoveInput">
            <svg viewBox="64 64 896 896" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class="">
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path>
            </svg>
        </i>
    </a-form-item>
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: ""
        },
        boldPlaceholder: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: "text"
        },
        rules: {
            type: Array,
            default: () => []
        },
        name: {
            type: String,
            required: true
        },
        value: {
            type: String | Number | Object | null
        },
        options: {
            type: Array,
            default: () => []
        },
        labelText: {
            type: String,
            default: "label"
        },
        selectValue: {
            type: String,
            default: "value"
        },
        selectMode: {
            type: String,
            default: "default",
            validator(value) {
                return ["default", "multiple", "tags"].includes(value);
            },
        },
        size: {
            type: String,
            default: "medium",
            validator(value) {
                return ["large", "medium", "small"].includes(value);
            },
        },
        noBorder: {
            type: Boolean,
            default: false
        },
        shadow: {
            type: Boolean,
            default: false
        },
        prefixSearchInput: {
            type: Boolean,
            default: false
        },
        suffixSearchInput: {
            type: Boolean,
            default: false
        },
        noDot: {
            type: Boolean,
            default: true
        },
        noAsterisk: {
            type: Boolean,
            default: false
        },
        showSearch: {
            type: Boolean,
            default: false
        },
        multiple: {
            type: Boolean,
            default: false
        },
        showCloseInputButton: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        form: {
            type: Object,
            default: null
        },
        onlyValue: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            keyword: ""
        }
    },
    computed: {
        placeholderClass() {
            return {
                "not-empty": this.value || this.keyword,
                "required": this.required && !this.noAsterisk,
                "bold-placeholder": this.boldPlaceholder
            };
        },
        inputClass() {
            let result = {
                "has-prefix": this.hasPrefixSlot,
                "has-suffix": this.hasSuffixSlot,
                "has-addon-after": this.hasAddonAfterSlot,
                "has-addon-before": this.hasAddonBeforeSlot,
                "no-border": this.noBorder,
                "shadow": this.shadow,
                "disabled": this.disabled
            }
            result[this.size] = true;
            return result;
        },
        modelValue: {
            get() {
                if(this.type == "phone") {
                    return this.formatPhone(this.value);
                }
                return this.value;
            },
            set(newValue) {
                // console.log(newValue);
                if(this.form) {
                    this.form.setFieldsValue({ [this.name]: newValue });
                }
                // if(this.onlyValue) {
                //     this.$emit("input", newValue.value);
                // } else {
                    this.$emit("input", newValue);
                // }
            }
        },
        required() {
            return !!(this.rules?.find(rule => rule.required));
        },
        initialImageValue() {
            if(this.value) {
                return [{ 
                    ...this.value,
                    uid: this.value.uid || Math.random(),
                    type: this.value.type || "image/jpeg",
                    name: this.value.name || " " || this.name
                }];
            }
            return [];
        },
        decorator() {
            let rules = [...this.rules];
            if(this.type == "phone") {
                rules.push({ validator: this.validatePhoneLength });
            }
            if(this.type == "image") {
                return [this.name, { 
                    rules, 
                    valuePropName: 'fileList', 
                    initialValue: this.initialImageValue,
                    // initialValue: [{uid: 1, name: "gggg", type: "image/jpeg", url: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg"}], 
                    getValueFromEvent: this.normFile
                }];
            }
            return [this.name, { rules, initialValue: this.modelValue }];
        },
        hasPrefixSlot() {
            return !!this.$slots.prefix || this.prefixSearchInput;
        },
        hasSuffixSlot() {
            return !!this.$slots.suffix || this.suffixSearchInput;
        },
        hasAddonBeforeSlot() {
            return !!this.$slots.addonBefore;
        },
        hasAddonAfterSlot() {
            return !!this.$slots.addonAfter;
        },
    },
    methods: {
        async handleInput() {
            await this.$nextTick();
            let newValue = this.$refs.inputRef?.value;
            if(this.type == "select") {
                this.modelValue = this.options?.find(option => option[this.selectValue] == newValue) || null;
            } else if(this.type == "phone") {
                this.modelValue = this.formatPhone(newValue);
            } else {
                this.modelValue = newValue || "";
            }
        },
        handleNumberKeydown(evt) {
            let charCode = evt.which || evt.keyCode;
            if(charCode == 190 && this.type == "number" && this.noDot) {
                evt.preventDefault();
            }
        },
        filterOption(input, option) {
            this.keyword = input;
            return !!(option.componentOptions.propsData.title?.toLowerCase().includes(input.toLowerCase()));
        },
        handleSelectBlur() {
            this.keyword = "";
        },
        normFile(e) {
            console.log('Upload event:', e);
            let result = [];
            if (Array.isArray(e)) {
                // if(this.multiple) result = e;
                // else 
                result = e?.length && [e[e.length - 1]] || [];
            } else {
                // if(this.multiple) result = e && e.fileList;
                // else 
                result =  e && e.fileList?.length && [e.fileList[e.fileList.length - 1]] || [];
            }

            if(result?.length) {
                this.$emit("input", result[0]);
            } else {
                this.$emit("input", null);
            }

            return result;
        },
        handleRemoveInput() {
            this.$emit("remove");
        },
        validatePhoneLength(rule, value, callback) {
            if (value?.length != 12 && value?.length != 13) {
                callback("Phone number must have 10 digits!");
            } else {
                callback();
            }
        },
        formatPhone(value) {
            var x = value.replace(/\D/g, '').match(/(\d{0,4})(\d{0,3})(\d{0,3})/);
            return !x[2] ? x[1] : x[1] + ' ' + x[2] + (x[3] ? ' ' + x[3] : '');
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/common/input.scss";
</style>