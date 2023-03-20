<template>
    <div class="order-table-component">
        <div class="p-5">
            <a-form :form="form">
                <Input placeholder="Search..." v-model="keyword" name="search" type="text" prefix-search-input no-border shadow class="list-search-input" />
            </a-form>
        </div>

        <div class="flex-grow overflow-auto px-5 pt-1 mb-6">
            <a-table :columns="columns" :data-source="dataSource" :pagination="{ defaultPageSize: 10 }" :scroll="{ y: 678 }" class="custom-table mb-1" :customRow="customRow">
                <span slot="id" slot-scope="id" class="font-extrabold">GH{{ id }}</span>
                <span slot="products" slot-scope="products">
                    {{ products?.join(", ") }}
                </span>
                <span slot="total" slot-scope="total">
                    ${{ total }}
                </span>
                <span slot="created_at" slot-scope="created_at">
                    {{ formatDateTime(created_at) }}
                </span>
                <span slot="status" slot-scope="status">
                    <Chip color="#EFEFEF" class="capitalize">{{ status }}</Chip>
                </span>

                <template slot="footer">
                    Footer
                </template>
            </a-table>
        </div>

        <div class="flex justify-end px-5 pagination-content">
            <Pagination v-model="currentPage" :total="50" :page-size="6" />
        </div>
    </div>
</template>

<script>
import Input from "@/components/common/Input.vue";
import Pagination from "@/components/common/Pagination.vue";
import Chip from "@/components/common/Chip.vue";
import moment from "moment";

export default {
    components: { Input, Pagination, Chip },
    data() {
        let statusList = [ "delivered", "completed", "processing", "cancelled", "confirmed" ];
        let paymentMethodList = ["Visa", "Master Card", "Paypal"];
        let dataSource = [...Array(15)].map((_, index) => ({
            key: index + 1,
            index: index + 1,
            id: 4703776,
            products: ["Product 1", "Product 2", "Product 3"],
            customer_name: "Mimi",
            customer_phone: "0935473826",
            customer_email: "customer@gmail.com",
            payment_method: paymentMethodList[Math.round(Math.random() * (paymentMethodList.length - 1))],
            total: 310,
            created_at: "2022-09-06 08:30:00",
            status: statusList[Math.round(Math.random() * (statusList.length - 1))]
        }));

        return {
            form: this.$form.createForm(this, { name: 'order_table_search_rule' }),
            keyword: "",
            currentPage: 1,
            columns: [
                {
                    title: 'Numerical order',
                    key: 'index',
                    dataIndex: 'index'
                },
                {
                    title: 'ID',
                    key: 'id',
                    dataIndex: 'id',
                    scopedSlots: { customRender: 'id' }
                },
                {
                    title: 'Product Name',
                    dataIndex: 'products',
                    key: 'products',
                    scopedSlots: { customRender: 'products' }
                },
                {
                    title: 'Customer Name',
                    key: 'customer_name',
                    dataIndex: 'customer_name'
                },
                {
                    title: 'Customer Phone',
                    key: 'customer_phone',
                    dataIndex: 'customer_phone'
                },
                {
                    title: 'Email',
                    key: 'customer_email',
                    dataIndex: 'customer_email'
                },
                {
                    title: 'Payment method',
                    key: 'payment_method',
                    dataIndex: 'payment_method'
                },
                {
                    title: 'Total',
                    key: 'total',
                    dataIndex: 'total',
                    scopedSlots: { customRender: 'total' }
                },
                {
                    title: 'Time & Date',
                    key: 'created_at',
                    dataIndex: 'created_at',
                    scopedSlots: { customRender: 'created_at' }
                },
                {
                    title: 'Status',
                    key: 'status',
                    dataIndex: 'status',
                    scopedSlots: { customRender: 'status' }
                },
            ],
            dataSource
        }
    },
    methods: {
        formatDateTime(value) {
            return value && moment(value).format("HH:mm a - DD/MM/YYYY") || "N/A";
        },
        customRow(record) {
            return {
                on: {
                    click: (event) => {
                        console.log({event});
                        console.log({record});
                    }
                }
            }
        }
    }
}
</script>

<style lang="scss">
.order-table-component {
    .chip-component {
        --border-radius: 8px;
        --box-shadow: none;
    }
}
</style>