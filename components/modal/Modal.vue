<template>
    <div class="modal-component" :class="{'visible': visible, 'hide-desktop-title': hideDesktopTitle}">
        <div class="absolute w-full h-full" @click="close" v-if="clickOutSide && !disabledClose"></div>
        <div class="modal">
            <div class="relative modal-header">
                <div class="text-lg font-extrabold text-truncate header-title">{{ title }}</div>
                <div class="close-btn" @click="close">
                    <img src="@/assets/images/icon/x-icon.svg" />
                </div>
            </div>
            <div class="modal-content" v-if="showContent">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        showCloseButton: {
            type: Boolean,
            default: true
        },
        clickOutSide: {
            type: Boolean,
            default: true
        },
        disabledClose: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ""
        },
        hideDesktopTitle: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            visible: false,
            showContent: false
        }
    },
    methods: {
        close() {
            this.visible = false;
            document.getElementsByTagName("body")[0].classList.remove("overflow-hidden");
            setTimeout(() => {
                this.showContent = false;
            }, 150);
        },
        open() {
            this.showContent = true;
            this.visible = true;
            document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/modal/modal.scss";
</style>