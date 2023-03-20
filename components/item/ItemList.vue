<template>
    <list class="item-list-component" v-if="listType == 1">
        <template #default v-if="itemType == 1">
            <Item v-for="(item, index) in items" :key="index" :item="item" />
        </template>
        <template #default v-else-if="itemType == 2">
            <Item2 v-for="(item, index) in items" :key="index" :item="item" />
        </template>
        <template #default v-else-if="itemType == 3">
            <Item3 v-for="i in 8" :key="i" />
        </template>
    </list>
    <list2 v-else>
        <template #default v-if="itemType == 1">
            <Item v-for="i in 5" :key="i" />
        </template>
        <template #default v-else-if="itemType == 2">
            <Item2 v-for="i in 5" :key="i" />
        </template>
        <template #default v-else-if="itemType == 3">
            <Item3 v-for="i in 5" :key="i" />
        </template>
    </list2>
</template>

<script>
import List from "@/components/list/List.vue";
import List2 from "@/components/list/List2.vue";
import Item from "@/components/item/Item.vue";
import Item2 from "@/components/item/Item2.vue";
import Item3 from "@/components/item/Item3.vue";

export default {
    components: { List, List2, Item, Item2, Item3 },
    props: {
        itemType: {
            type: Number | String,
            default: 1
        },
        listType: {
            type: Number | String,
            default: 1
        },
        itemNumber: {
            type: Number | String,
            default: 8
        },
        items: {
            type: Array,
            default: () => []
        }
    }
}
</script>