<template>
    <div class="the-header-component">
        <div class="container-fluid top-page">
            <p class="text-xs text-center">Available 24/7 at  09826839273</p>
        </div>
        <a-affix style="width: 100% !important">
            <div class="relative header">
                <div class="container flex items-center justify-between header-top" ref="headerTopRef">
                    <div class="flex items-center gap-3 hidden-md-and-up">
                        <img src="@/assets/images/icon/menu-icon.svg" class="cursor-pointer" @click="$refs.drawerRef.open()" />
                        <a-badge class="flex-center cursor-pointer" count="1" show-zero @click="$router.push('/wishlist')">
                            <img src="@/assets/images/icon/heart.svg" />
                        </a-badge>
                    </div>
                    <NuxtLink to="/">
                        <div class="relative logo">
                            <img src="@/assets/images/logo.svg" class="absolute-full" />
                        </div>
                    </NuxtLink>
                    <div class="flex items-center gap-3">
                        <a-badge class="flex-center cursor-pointer hidden-md-and-up" count="1" show-zero @click="$router.push('/shopping-cart')">
                            <img src="@/assets/images/icon/shopping-cart.svg" />
                        </a-badge>
                        <a-dropdown :getPopupContainer="() => $refs.headerTopRef" :trigger="['click']" overlay-class-name="user-dropdown">
                            <a-menu slot="overlay">
                                <a-menu-item key="0" @click="$router.push('/admin')">Admin Page</a-menu-item>
                                <a-menu-item key="1" @click="$router.push('/sign-up')">Sign up</a-menu-item>
                                <a-menu-item key="2" @click="$router.push('/account')">My Account</a-menu-item>
                                <a-menu-item key="3" @click="$router.push('/order')">My Order</a-menu-item>
                                <a-menu-item key="4">Notification</a-menu-item>
                                <a-menu-item key="5" @click="$router.push('/password')">Password</a-menu-item>
                                <a-menu-item key="6" @click="$refs.signOutModalRef.open()">Logout</a-menu-item>
                            </a-menu>
                            <button class="flex items-center cursor-pointer bg-transparent px-0">
                                <span class="mr-3 hidden-md-and-down">Login</span>
                                <img src="@/assets/images/icon/user.svg" class="user-icon" />
                            </button>
                        </a-dropdown>
                    </div>
                </div>
                <a-divider class="m-0" />
                <div class="container flex items-center justify-between header-bottom">
                    <div class="flex items-center gap-8 pl-0 nav-list hidden-md-and-down">
                        <button class="nav-item" :class="{'active': $route.name == 'index'}"><NuxtLink to="/">HOME</NuxtLink></button>
                        <button class="nav-item" :class="{'active': $route.name == 'category'}"><NuxtLink to="/item">WHAT'S NEW</NuxtLink></button>
                        <button class="nav-item product" ref="productNavRef">
                            PRODUCTS
                            <HeaderPopover class="header-popover" @select="$refs.productNavRef.blur()" />
                        </button>
                        <button class="nav-item"><NuxtLink to="/">PROMOTIONS</NuxtLink></button>
                        <button class="nav-item" :class="{'active': $route.name == 'post'}"><NuxtLink to="/post">BLOG</NuxtLink></button>
                        <button class="nav-item" :class="{'active': $route.name == 'contact'}"><NuxtLink to="/contact">CONTACTS</NuxtLink></button>
                    </div>
                    <div class="flex items-center icon-group hidden-md-and-down">
                        <a-badge class="flex-center cursor-pointer">
                            <img src="@/assets/images/icon/magnify.svg" @click="$refs.searchModalRef.open()" />
                        </a-badge>
                        <a-badge class="flex-center cursor-pointer" count="1" show-zero @click="$router.push('/wishlist')">
                            <img src="@/assets/images/icon/heart.svg" />
                        </a-badge>
                        <a-badge class="flex-center cursor-pointer" count="1" show-zero @click="$router.push('/shopping-cart')">
                            <img src="@/assets/images/icon/shopping-cart.svg" />
                        </a-badge>
                    </div>
                    <a-form :form="form" class="w-full hidden-md-and-up">
                        <Input placeholder="Search..." v-model="keyword" name="search" type="text" no-border shadow suffix-search-input class="search-input" />
                    </a-form>
                </div>
            </div>
        </a-affix>

        <Drawer ref="drawerRef" />
        <SearchModal ref="searchModalRef" />
        <SignOutModal ref="signOutModalRef" />
    </div>
</template>

<script>
import Input from "@/components/common/Input.vue";
import SearchModal from "@/components/modal/SearchModal.vue";
import SignOutModal from "@/components/modal/SignOutModal.vue";
import HeaderPopover from "@/components/layout/HeaderPopover.vue";
import Drawer from "@/components/layout/Drawer.vue";

export default {
    components: { Input, SearchModal, SignOutModal, HeaderPopover, Drawer },
    data() {
        return {
            form: this.$form.createForm(this, { name: 'dynamic_rule' }),
            showPopover: false,
            keyword: ""
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/layout/the-header.scss";
</style>
