<template>
    <div>
        <banner :height="400" />      
        <div class="test-input p-8">
            <DatePicker v-model="myDate" class="mb-10" format="YYYY-MM-DD HH:mm" :show-time="{ format: 'HH:mm' }" />
            <DatePicker v-model="myDate1" range />

            <div class="mb-10">
                <a-checkbox class="mb-3">Checkbox</a-checkbox>
                <a-radio-group>
                    <a-radio value="1" class="mb-3">Radio 1</a-radio>
                    <a-radio value="2" class="mb-3">Radio 2</a-radio>
                    <a-radio value="3" class="shadow-radio mb-3">Radio 3</a-radio>
                </a-radio-group>
            </div>

            <!-- <FilterListCollapse /> -->
            
            <ItemDetailModal ref="modalRef" />
            <modal ref="modalRef2" title="Modal title">
                <div>
                    sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf
                </div>
            </modal>
            <!-- <Dropdown :items="options" v-model="selected" /> -->
            <Button class="control-btn mb-2" color="#367E18" @click="$refs.modalRef.open()">Show modal</Button>
            <Button class="control-btn mb-2" color="#367E18" @click="$refs.modalRef2.open()">Show modal 2</Button>
            <Button class="control-btn mb-2" color="#CC3636" icon="heart" :dark="false">Button</Button>
            <Button class="control-btn mb-2" icon="shopping-cart">Button</Button>
            <Button class="control-btn mb-2" icon="shopping-cart" block>Button</Button>
            <Button class="control-btn mb-2" size="medium" icon="heart" :dark="false">Button</Button>
            <Button class="control-btn mb-2" outlined>Button</Button>
            <Button class="control-btn mb-2">Button</Button>
            <Button class="control-btn mb-2" icon="shopping-cart" outlined>Button</Button>
            <Button class="control-btn mb-2" icon="shopping-cart" color="#FF9933">Button</Button>
            <Button class="control-btn mb-2" icon="shopping-cart" color="#FF9933" outlined>Button</Button>
            <FilterSelect2 placeholder="Sort" v-model="selectedSize" :options="sizes" />
            <FilterSelect placeholder="Filter" v-model="selectedSize" :options="sizes" /> {{ selectedSize }}
            <FilterSelect placeholder="Filter" v-model="selectedSizeArr" :options="sizes" mode="multiple" /> {{ selectedSizeArr }}
            <Chip class="my-2">Delivered</Chip>
            <Chip class="my-2" size="large">#Loremipum</Chip>
            <Chip class="my-2" icon="heart">Test ne</Chip>
            <Chip class="my-2" icon="shopping-cart" size="large">Test ne</Chip>
            <Chip class="my-2" suffix-icon="heart">Test nua ne</Chip>
            <a-form :form="form" @submit="handleSubmit">
                <Input placeholder="Search..." v-model="email" name="search" type="text" prefix-search-input />
                <Input placeholder="Search..." v-model="email" name="search" type="text" suffix-search-input />
                <Input placeholder="MM/YY" v-model="month" name="month" type="month" :rules="rules.password" />
                <Input placeholder="Number" v-model="number" name="number" :rules="rules.number" type="number" />
                <Input placeholder="Email" v-model="email" name="email" :rules="rules.email" type="email" />
                <Input placeholder="Textarea" v-model="textarea" name="textarea" :rules="rules.password" type="textarea" />
                <Input placeholder="Password" v-model="password" name="password" :rules="rules.password" type="password" />
                <Input placeholder="Select abc" v-model="selected" name="select" :rules="rules.select" type="select" :options="options" />
                <Input placeholder="Sort" v-model="sort" name="sort" type="select" :options="sortOptions" bold-placeholder style="width: 196px" />
                <TypeSelect placeholder="Size" v-model="selectedSize1" :options="sizes" />
                <QuantityInput v-model="number" :max="50" />
                <a-button type="primary" html-type="submit">
                    Submit
                </a-button>
            </a-form>
        </div>
        <div class="flex gap-item" style="max-width: 1200px; margin: auto;">
            <div style="width: 278px; min-width: calc(25% - 15px); height: 500px; background: #F93; position: sticky; top: var(--sticky-top);">

            </div>
            <div style="width: calc(75% - 15px); background: #F59;">
                <div style="width: 100%; height: 100px; background: #0F5; margin-bottom: 20px; position: sticky; top: var(--sticky-top);">

                </div>
                <div class="grid gap-item" style="grid-template-columns: repeat(auto-fill, minmax(278px, 1fr));">
                    <div style="height: 200px; background: #fff;" v-for="i in 50" :key="i">
    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from "@/components/banner/Banner.vue";
import Input from "@/components/common/Input.vue";
import Button from "@/components/common/Button.vue";
import Dropdown from "@/components/common/Dropdown.vue";
import TypeSelect from "@/components/common/TypeSelect.vue";
import FilterSelect from "@/components/common/FilterSelect.vue";
import QuantityInput from "@/components/common/QuantityInput.vue";
import Chip from "@/components/common/Chip.vue";
import Modal from "@/components/modal/Modal.vue";
import ItemDetailModal from "@/components/modal/ItemDetailModal.vue";
import FilterListCollapse from "@/components/common/FilterListCollapse.vue";
import FilterSelect2 from "@/components/common/FilterSelect2.vue";
import DatePicker from "@/components/admin/common/DatePicker.vue";

export default {
    components: { Banner, Input, TypeSelect, QuantityInput, Button, Dropdown, FilterSelect, Chip, Modal, ItemDetailModal, FilterListCollapse, FilterSelect2, DatePicker },
    data() {
        return {
            form: this.$form.createForm(this, { name: 'dynamic_rule' }),
            email: "",
            password: "",
            textarea: "",
            number: "",
            selected: null,
            selectedSize: null,
            selectedSize1: null,
            selectedSizeArr: [],
            month: "",
            options: [
                { id: 1, label: "Option 1", value: 1 },
                { id: 2, label: "Option 2", value: 2 }
            ],
            sortOptions: [
                { id: 1, label: 'ALPHABETICALLY, A-Z', value: 'name' },
                { id: 2, label: 'ALPHABETICALLY, Z-A', value: '-name' },
                { id: 3, label: 'PRICE, LOW TO HIGH', value: 'price' },
                { id: 4, label: 'PRICE, HIGH TO LOW', value: '-price' },
                { id: 5, label: 'DATE, OLD TO NEW', value: 'created_at' },
                { id: 6, label: 'DATE, NEW TO OLD', value: '-created_at' }
            ],
            sort: null,
            sizes: [
                { id: 1, label: "S", value: 1 },
                { id: 2, label: "M", value: 2 },
                { id: 3, label: "L", value: 3 },
                { id: 4, label: "XL", value: 4 },
                { id: 5, label: "XXL", value: 5 },
                { id: 6, label: "XXXL", value: 6 },
            ],
            rules: {
                email: [
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ],
                password: [
                    {
                        required: true,
                        message: 'Please input your Password!',
                    }
                ],
                number: [
                    {
                        required: true,
                        message: 'Please input your Number!',
                    }
                ],
                select: [
                    {
                        required: true,
                        message: 'Please input your Password!',
                    }
                ]
            },
            visible: false,
            myDate: null,
            myDate1: []
        }
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                } else {
                    console.log('Error: ', err);
                }
            });
        },
    }
}
</script>