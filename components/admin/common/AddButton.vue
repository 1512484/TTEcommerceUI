<template>
    <Button class="add-button-component" @click="handleButtonClick">
        <p class="font-extrabold mr-2.5">Add</p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 8V16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 12H16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </Button>
</template>

<script>
import Button from "@/components/common/Button.vue";

export default {
    components: { Button },
    methods: {
        handleButtonClick(e) {
            this.$emit("click", e);
        }
    }
}
</script>

<style lang="scss">
.add-button-component {
    &.button-component {
        background: #7D7D7D;
        border:#7D7D7D;
        min-width: 94px;
        border-radius: 50px;
        padding: 5px 17px;
        height: 34px;
    }
}
</style>