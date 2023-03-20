<template>
    <div class="drawer-component" :class="{'visible': visible}" ref="drawerRef">
        <div class="px-5">
            <img src="@/assets/images/icon/menu-icon.svg" class="cursor-pointer mb-4.5" @click="close" />
            <NuxtLink class="w-max-content mb-5 logo-link" to="/">
                <div class="relative logo">
                    <img src="@/assets/images/logo.svg" class="absolute-full" />
                </div>
            </NuxtLink>
        </div>
        <div class="overflow-auto">
            <a-collapse v-model="activeKey" expand-icon-position="right" class="mb-4.5 drawer-menu-collapse">
                <a-collapse-panel v-for="(item) in menuItems" 
                    :key="item.id.toString()" 
                    :header="item.title"
                    :class="{'has-no-child': !(item.children?.length), 'active': item.id == 2}"
                    @click.native="goTo(item)"
                >
                    <div class="ml-6 pb-1.5 menu-item-children" v-if="item.children?.length">
                        <div v-for="(child, i) in item.children" :key="i" 
                            class="cursor-pointer mb-1.5 child-item" 
                            :class="{'active': item.id == 2 && child.id == 1}"
                            @click="goTo(child)"
                        >
                            {{ child.title }}
                        </div>
                    </div>
                </a-collapse-panel>
            </a-collapse>
            <div class="px-5">
                <p class="text-base font-bold mb-1.5">PAYMENT ACCEPT</p>
                <div class="flex items-center gap-4">
                    <NuxtLink to="/"><img src="@/assets/images/icon/visa.svg" /></NuxtLink>
                    <NuxtLink to="/"><img src="@/assets/images/icon/mastercard.svg" /></NuxtLink>
                    <NuxtLink to="/"><img src="@/assets/images/icon/paypal.svg" /></NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        let children = [
            { id: 1, title: "Consectetuer adipiscing elit", path: "/" },
            { id: 2, title: "Consectetuer adipiscing elit", path: "/" },
            { id: 3, title: "Consectetuer adipiscing elit", path: "/" },
            { id: 4, title: "Consectetuer adipiscing elit", path: "/" },
        ];
        return {
            visible: false,
            activeKey: [],
            menuItems: [
                { id: 1, title: "Home", path: "/" },
                { id: 2, title: "What's New", children: children },
                { id: 3, title: "Products", children: children },
                { id: 4, title: "Promotions", children: children },
                { id: 5, title: "Blog", children: children },
                { id: 6, title: "Contacts", children: children }
            ]
        }
    },
    methods: {
        async open() {
            document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
            this.setDrawerPosition();
            await this.$nextTick();
            setTimeout(() => {
                this.visible = true;
            }, 300);
        },
        close() {
            document.getElementsByTagName("body")[0].classList.remove("overflow-hidden");
            this.visible = false;
        },
        toggle() {
            this.visible = !this.visible;
        },
        goTo(item) {
            if(!item.children) {
                this.$router.push(item.path);
                this.close();
            }
        },
        setDrawerPosition() {
            let header = document.querySelector(".the-header-component .header");
            if(header) {
                let headerTop = header.getBoundingClientRect()?.top || 0;
                this.$refs.drawerRef.style.top = headerTop + "px";
                this.$refs.drawerRef.style.maxHeight = `calc(100% - ${headerTop}px)`;
            }
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/layout/drawer.scss";
</style>