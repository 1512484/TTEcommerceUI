<template>
    <div class="flex flex-wrap items-center gap-2.5 color-list-component">
        <div v-for="color in colors" :key="color" class="color" 
            :class="{'active': color == activeColor}" 
            :style="`background-color: ${color}`"
            @click="activeColor = color"
        ></div>
    </div>
</template>

<script>
export default {
    props: {
        colorList: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            // colors: ["#C00D1A", "#100F0F", "#FFC700", "#D35269", "#3D9BAB", "#D9D9D9"],
            currentColor: ""
        }
    },
    computed: {
        colors() {
            return this.colorList || [];
        },
        activeColor: {
            get() {
                return this.currentColor || this.colors?.[0];
            },
            set(newValue) {
                this.currentColor = newValue;
            }
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/item/color-list.scss";
</style>