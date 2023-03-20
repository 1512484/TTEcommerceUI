<template>
    <div class="container wishlist-page">
        <breadcrumb :items="breadcrumbItems" class="mb-7" />

        <p class="text-lg font-extrabold mb-4 heading-title">My wish list</p>

        <WishList />

        <div class="flex-center flex-wrap gap-x-7 gap-y-3 mt-7 control-btn-container">
            <Button class="control-btn" color="#A9A9A9">CLEAR ALL</Button>
            <Button class="control-btn">ADD ALL TO CART</Button>
        </div>
    </div>
</template>

<script>
import Breadcrumb from "@/components/common/Breadcrumb.vue";
import WishList from "@/components/list/WishList.vue";
import Button from "@/components/common/Button.vue";

export default {
    components: { Breadcrumb, WishList, Button },
    data() {
        return {
            breadcrumbItems: [
                { id: 1, title: "HOME", url: "/" },
                { id: 2, title: "WISHLIST", url: "" }
            ],
            
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/pages/wishlist.scss";
</style>