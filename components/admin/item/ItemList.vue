<template>
    <div class="item-list-component">
        <div class="p-5">
            <a-form :form="form">
                <Input placeholder="Search..." v-model="keyword" name="search" type="text" prefix-search-input no-border shadow class="list-search-input" />
            </a-form>
        </div>

        <div class="flex-grow overflow-auto px-5 pt-1 mb-6">
            <table class="w-full admin-list-table item-list">
                <thead></thead>
                <tbody>
                    <tr v-for="i in 9" :key="i">
                        <td>{{ i }}</td>
                        <td class="font-semibold">HF0016392</td>
                        <td>Red T-shirt (Name)</td>
                        <td>T-shirt (Category)</td>
                        <td>$120.00</td>
                        <td class="action-column">
                            <div class="flex-center gap-5">
                                <img src="@/assets/images/icon/edit-pen.svg" class="action-icon" />
                                <img src="@/assets/images/icon/trash.svg" class="action-icon" />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="flex justify-end px-5 pagination-content">
            <Pagination v-model="currentPage" :total="50" :page-size="6" />
        </div>
    </div>
</template>

<script>
import Input from "@/components/common/Input.vue";
import Pagination from "@/components/common/Pagination.vue";

export default {
    components: { Input, Pagination },
    data() {
        return {
            form: this.$form.createForm(this, { name: 'item_list_search_rule' }),
            keyword: "",
            currentPage: 1
        }
    }
}
</script>