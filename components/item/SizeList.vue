<template>
    <div class="flex flex-wrap items-center gap-4 size-list-component">
        <div v-for="(size, index) in sizeList" :key="index" 
            class="flex-center p-2 size" 
            :class="{'active': size == activeSize}"
            @click="activeSize = size"
        >{{ size }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sizeList: ["S", "M", "L", "XL"],
            activeSize: "S"
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/item/size-list.scss";
</style>