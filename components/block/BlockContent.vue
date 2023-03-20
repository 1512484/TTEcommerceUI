<template>
    <div class="container">
        <block :style="valueData.style">
            <div class="mb-7">
                <h3 class="text-4xl font-extrabold text-center mb-0 block-title" v-if="valueData.title">{{ valueData.title }}</h3>
                <p class="text-center mt-4 block-description" v-if="valueData.description">{{ valueData.description }}</p>
            </div>
            <slot>
                <ItemList :item-type="valueData.itemType" :list-type="valueData.listType" :items="valueData.items" />
            </slot>
        </block>
    </div>
</template>

<script>
import Block from "@/components/block/Block.vue";
import ItemList from "@/components/item/ItemList.vue";

export default {
    components: { Block, ItemList },
    props: {
        blockData: {
            type: Object
        }
    },
    computed: {
        valueData() {
            return {
                itemType: this.blockData?.itemType || 1,
                listType: this.blockData?.listType || 1,
                style: this.blockData?.style || {},
                title: this.blockData?.title || "",
                description: this.blockData?.description || "",
                items: this.blockData?.items || []
            }
        }
    }
}
</script>