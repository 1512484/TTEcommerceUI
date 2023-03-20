<template>
    <div class="collection-list-component">
        <div class="p-5">
            <a-form :form="form">
                <Input placeholder="Search..." v-model="keyword" name="search" type="text" prefix-search-input no-border shadow class="list-search-input" />
            </a-form>
        </div>

        <div class="flex-grow overflow-auto px-5 pt-1 mb-6">
            <table class="w-full admin-list-table collection-list">
                <thead></thead>
                <tbody>
                    <tr v-for="i in 9" :key="i">
                        <td>{{ i }}</td>
                        <td>
                            <div class="relative thumbnail">
                                <img src="https://i.chzbgr.com/full/9605913600/h7E1F01A2/cat" class="absolute-full" />
                            </div>
                        </td>
                        <td class="font-semibold">Collection Name</td>
                        <td>Description</td>
                        <td class="text-center">08:30 am - 06/09/2022</td>
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
            form: this.$form.createForm(this, { name: 'collection_list_search_rule' }),
            keyword: "",
            currentPage: 1
        }
    }
}
</script>

<style lang="scss">
.collection-list-component {
    .collection-list {
        .thumbnail {
            width: 44px;
            height: 41px;
        }
        tr {
            td {
                padding: 10px 28px;
            }
        }
    }
}
</style>