<template>
    <div class="item-page">
        <banner small />
        <div class="container flex flex-wrap page-main-content">
            <div class="sort-column">
                <div class="flex items-center justify-end gap-4 sort-content">
                    <p class="sort-title">There are 13 products. SORT BY:</p>
                    <a-form :form="form">
                        <Input placeholder="Sort" v-model="sort" name="sort" type="select" :options="sortOptions" bold-placeholder class="sort-select" />
                    </a-form>
                </div>
            </div>
            <div class="overflow-auto filter-column">
                <FilterListCollapse />
            </div>
            <div class="items-column">
                <ItemList :items="items" />
                <div class="flex justify-end pagination-content">
                    <Pagination v-model="currentPage" :total="50" :page-size="6" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from "@/components/banner/Banner.vue";
import Input from "@/components/common/Input.vue";
import FilterListCollapse from "@/components/common/FilterListCollapse.vue";
import ItemList from "@/components/item/ItemList.vue";
import Pagination from "@/components/common/Pagination.vue";
import { productList } from "@/static/data.js";

export default {
    components: { Banner, Input, FilterListCollapse, ItemList, Pagination },
    data() {
        return {
            form: this.$form.createForm(this, { name: 'dynamic_rule' }),
            currentPage: 1,
            sortOptions: [
                { id: 1, label: 'ALPHABETICALLY, A-Z', value: 'name' },
                { id: 2, label: 'ALPHABETICALLY, Z-A', value: '-name' },
                { id: 3, label: 'PRICE, LOW TO HIGH', value: 'price' },
                { id: 4, label: 'PRICE, HIGH TO LOW', value: '-price' },
                { id: 5, label: 'DATE, OLD TO NEW', value: 'created_at' },
                { id: 6, label: 'DATE, NEW TO OLD', value: '-created_at' }
            ],
            sort: null,
            items: productList.slice(0, 6)
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/pages/item/item.scss";
</style>