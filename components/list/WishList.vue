<template>
    <div class="list-like-table wishlist-component">
        <div class="text-base font-bold w-full flex items-center justify-between gap-3 py-3 list-header">
            <div class="w-full flex gap-3 left-content">
                <div class="column">Products</div>
                <div class="flex-center text-center column">Size</div>
                <div class="flex-center text-center column">Quantity</div>
                <div class="column">Total Price</div>
            </div>
            <div class="right-content"></div>
        </div>
        <div class="w-full list-content">
            <ListItem v-for="i in 5" :key="i" :show-add-to-cart="true" />
        </div>
    </div>
</template>

<script>
import ListItem from "@/components/list/ListItem.vue"

export default {
    components: { ListItem }
}
</script>