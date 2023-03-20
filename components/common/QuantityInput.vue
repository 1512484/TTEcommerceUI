<template>
    <div class="relative custom-input default shadow no-border quantity-input-component">
        <div class="flex-center input-control-btn minus-btn" @click="handleDecrease" :disabled="0 == modelValue">-</div>
        <a-input-number ref="inputRef" v-model="modelValue" type="number" @keydown="handleNumberKeydown" @blur="handleInputBlur" />
        <div class="flex-center input-control-btn plus-btn" @click="handleIncrease" :disabled="max == modelValue">+</div>
    </div>
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: "Quantity"
        },
        value: {
            type: Number | null,
            default: 1
        },
        max: {
            type: Number,
            default: 999999
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
                return parseInt(this.value) || 0;
            },
            set(newValue) {
                this.$emit("input", newValue);
            }
        }
    },
    methods: {
        handleNumberKeydown(evt) {
            let charCode = evt.which || evt.keyCode;
            if(charCode == 190) {
                evt.preventDefault();
            }
        },
        handleDecrease() {
            if(this.modelValue > 0) {
                this.modelValue--;
            } else {
                this.modelValue = 0;
            }
        },
        handleIncrease() {
            if(this.modelValue < this.max) {
                this.modelValue++;
            } else {
                this.modelValue = this.max;
            }
        },
        handleInputBlur() {
            if(this.modelValue > this.max) {
                this.modelValue = this.max;
            }
            if(this.modelValue < 0) {
                this.modelValue = 0;
            }
        }
    },
    watch: {
        max: {
            immediate: true,
            handler() {
                if(this.max < this.modelValue) {
                    this.modelValue = this.max;
                }
            }
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/common/quantity-input.scss";
</style>