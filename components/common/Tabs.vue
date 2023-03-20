<template>
    <div class="tabs-component">
        <ul class="flex overflow-auto tab-header">
            <li v-for="(item, index) in headers" :key="index" 
                class="cursor-pointer header-item" 
                :class="{'active': item.key == value.key}"
                :style="`max-width: calc(100% / ${headers.length})`">
                <div class="text-base font-bold select-none header-title" @click="handleTabClick(item)">
                    {{ item.title }}
                </div>
            </li>
        </ul>
        <div class="tab-content" ref="tabContentRef">
            <div class="flex flex-col tab-content-info" ref="tabContentObserverRef">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        headers: {
            type: Array
        },
        value: {
            type: Object
        }
    },
    data() {
        return {
            observerHeight: 0
        }
    },
    mounted() {
        window.addEventListener("resize", this.setTabHeight);

        this.$nextTick(() => {
            this.observerHeight = this.$refs.tabContentObserverRef.clientHeight;
        });
        
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        var observer = new MutationObserver((mutations, observer) => {
            // fired when a mutation occurs
            // console.log(mutations, observer);
            let observerItem = this.$refs.tabContentObserverRef;
            if(observerItem.clientHeight != this.observerHeight) {
                this.setTabHeight();
            }
            this.observerHeight = observerItem.clientHeight;
        });

        // define what element should be observed by the observer
        // and what types of mutations trigger the callback
        observer.observe(this.$refs.tabContentObserverRef, {
            subtree: true,
            attributes: true,
            childList: true
            //...
        });
    },
    methods: {
        handleTabClick(tab) {
            this.$emit("input", tab);
        },
        setTabHeight() {
            this.$nextTick(() => {
                if(this.$refs?.tabContentRef) {
                    let activeItem = this.$refs.tabContentRef.querySelector(".content-item.active");
                    let oldHeight = this.$refs.tabContentRef.clientHeight;
                    if(activeItem) {
                        if(activeItem.clientHeight > oldHeight) {
                            this.$refs.tabContentRef.style.height = (activeItem.clientHeight + 20) + 'px';
                        } else {
                            this.$refs.tabContentRef.style.height = (activeItem.clientHeight - 20) + 'px';
                        }
                        this.$nextTick(() => {
                            setTimeout(() => {
                                this.$refs.tabContentRef.style.height = activeItem.clientHeight + 'px';
                            }, 600);
                        });
                    }
                }
            });
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/common/tabs.scss";
</style>