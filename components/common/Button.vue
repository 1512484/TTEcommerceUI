<template>
    <a-button class="button-component" :type="buttonType" :class="buttonClass" :style="buttonStyle" @click="$emit('click')">
        <a-icon :type="icon" v-if="icon" />
        <slot></slot>
    </a-button>
</template>

<script>
export default {
    props: {
        outlined: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: ""
        },
        color: {
            type: String,
            default: "#1C1C1C"
        },
        textColor: {
            type: String,
            default: "#FFFFFF"
        },
        dark: {
            type: Boolean,
            default: true
        },
        block: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: "large",
            validator(value) {
                return ["large", "medium"].includes(value);
            },
        },
    },
    computed: {
        buttonType() {
            return this.outlined ? "" : "primary";
        },
        buttonClass() {
            let result = {
                "dark": this.dark,
                "block": this.block
            }
            result[this.size] = true;
            return result;
        },
        buttonPropsColor() {
            if(this.color?.includes("#")) {
                let rgbColor = this.hexToRgb(this.color);
                if(rgbColor) {
                    return `${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}`;
                }
            } else if(this.color?.includes("rgb")) {
                return this.color.replace(/[()rgba]/g, '');
            }
            return this.color;
        },
        buttonStyle() {
            let result = `
                --color-btn: ${this.dark ? this.buttonPropsColor : "var(--color-btn-light)"};
                --color-btn-text: ${this.dark ? "var(--color-btn-light)" : "var(--color-btn-dark)"};
                --btn-shadow: ${this.dark ? "none" : ""};
            `;
            if(this.dark) {
                result += `--btn-shadow: none;`;
            } else {
                result += `--color-btn-dark: ${this.buttonPropsColor}`;
            }
            return result;
        }
    },
    methods: {
        rgbToHex(r, g, b) {
            return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        },
        hexToRgb(hex) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/common/button.scss";
</style>