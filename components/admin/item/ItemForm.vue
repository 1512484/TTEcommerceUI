<template>
    <a-form :form="form" class="item-form-component">
        <div class="overflow-auto">
            <div class="form-group">
                <div>
                    <label class="font-bold block mb-1.5">Thumbnail</label>
                    <Input v-model="inputData.thumbnail" name="thumbnail" :rules="rules.thumbnail" type="image" no-border shadow />
                </div>
                <div class="image-list">
                    <div v-for="(_, index) in inputData.images" :key="index" class="small-column image">
                        <label class="font-bold block mb-1.5">Image {{ index + 1 }}</label>
                        <Input v-model="inputData.images[index]" :name="`image${index + 1}`" type="image" no-border shadow :show-close-input-button="!!(inputData.images?.length > 1)" @remove="handleImageRemove(index)" />
                    </div>
                </div>
                <AddButton @click="inputData.images?.push(null)" />
            </div>
            <div class="form-group">
                <div class="item-specification">
                    <div class="large-column">
                        <label class="font-bold block mb-1.5">Name</label>
                        <Input placeholder="Name" v-model="inputData.name" name="name" :rules="rules.name" type="text" no-border shadow no-asterisk />
                    </div>
                    <div class="small-column">
                        <label class="font-bold block mb-1.5">Price</label>
                        <Input placeholder="$ 00.00" v-model="inputData.price" name="price" :rules="rules.price" type="number" :no-dot="false" no-border shadow no-asterisk />
                    </div>
                    <div class="small-column">
                        <label class="font-bold block mb-1.5">Reduced price</label>
                        <Input placeholder="$ 00.00" v-model="inputData.reduced_price" name="reduced_price" type="number" :no-dot="false" no-border shadow no-asterisk />
                    </div>
                    <div class="small-column">
                        <label class="font-bold block mb-1.5">Quantity</label>
                        <Input v-model="inputData.quantity" name="quantity" :rules="rules.quantity" type="number" no-border shadow />
                    </div>
                    <div class="small-column">
                        <label class="font-bold block mb-1.5">ID</label>
                        <Input v-model="inputData.id" name="id" :rules="rules.id" type="text" no-border shadow />
                    </div>
                    <div class="small-column">
                        <label class="font-bold block mb-1.5">Size</label>
                        <Input v-model="inputData.size" name="size" :rules="rules.size" type="select" :options="sizeOptions" no-border shadow select-mode="multiple" />
                    </div>
                    <div class="small-column">
                        <label class="font-bold block mb-1.5">Type</label>
                        <Input v-model="inputData.type" name="type" :rules="rules.type" type="select" :options="typeOptions" no-border shadow select-mode="tags" />
                    </div>
                    <div class="w-full">
                        <label class="font-bold block mb-1.5">Collections</label>
                        <Input v-model="inputData.collections" name="collections" type="select" :options="collectionOptions" no-border shadow select-mode="multiple" />
                    </div>
                    <div class="w-full" v-for="(_, index) in inputData.colors" :key="index">
                        <label class="font-bold block mb-1.5" v-if="index == 0">Color</label>
                        <Input v-model="inputData.colors[index]" placeholder="Color" name="color" type="color" no-border shadow :show-close-input-button="!!(inputData.colors?.length > 1)" @remove="handleColorRemove(index)" />
                    </div>
                    <AddButton @click="inputData.colors?.push(null)" />
                </div>
            </div>
            <div class="form-group">
                <div class="w-full">
                    <label class="font-bold block mb-1.5">Descriptions</label>
                    <Input v-model="inputData.description" name="description" type="textarea" no-border shadow />
                </div>
                <div class="w-full">
                    <label class="font-bold block mb-1.5">Product details</label>
                    <Input v-model="inputData.detail" name="detail" type="textarea" no-border shadow />
                </div>
            </div>
        </div>
        <div class="flex justify-end mt-7 px-8">
            <Button class="control-btn" @click="handleSubmit">SAVE</Button>
        </div>
    </a-form>
</template>

<script>
import Input from "@/components/common/Input.vue";
import Button from "@/components/common/Button.vue";
import AddButton from "@/components/admin/common/AddButton.vue";

export default {
    components: { Input, Button, AddButton },
    data() {
        return {
            form: this.$form.createForm(this, { name: 'item_create_form_rule' }),
            inputData: {
                thumbnail: null,
                images: [null],
                name: "",
                price: 0,
                reduced_price: 0,
                quantity: 1,
                id: "",
                size: "",
                type: "",
                collections: [null],
                colors: [null],
                description: "",
                detail: ""
            },
            rules: {
                thumbnail: [
                    {
                        required: true,
                        message: 'Please input Thumbnail!',
                    }
                ],
                name: [
                    {
                        required: true,
                        message: 'Please input Name!',
                    }
                ],
                price: [
                    {
                        required: true,
                        message: 'Please input Price!',
                    }
                ],
                quantity: [
                    {
                        required: true,
                        message: 'Please input Quantity!',
                    }
                ],
                id: [
                    {
                        required: true,
                        message: 'Please input ID!',
                    }
                ],
                size: [
                    {
                        required: true,
                        message: 'Please input Size!',
                    }
                ],
                type: [
                    {
                        required: true,
                        message: 'Please input Type!',
                    }
                ]
            },
            sizeOptions: [
                { id: 1, label: "S", value: 1 },
                { id: 2, label: "M", value: 2 },
                { id: 3, label: "L", value: 3 },
                { id: 4, label: "XL", value: 4 },
                { id: 5, label: "XXL", value: 5 },
                { id: 6, label: "XXXL", value: 6 }
            ],
            collectionOptions: [
                { id: 1, label: "Collection 1", value: "1" },
                { id: 2, label: "Collection 2", value: "2" },
                { id: 3, label: "Collection 3", value: "3" },
                { id: 4, label: "Collection 4", value: "4" },
                { id: 5, label: "Collection 5", value: "5" },
                { id: 6, label: "Collection 6", value: "6" }
            ],
            typeOptions: []
        }
    },
    methods: {
        handleImageRemove(index) {
            // this.inputData.images.splice(index, 1);
            let images = this.inputData.images.filter((_, i) => i != index);
            // // this.inputData.images = JSON.parse(JSON.stringify([...images]));
            this.inputData.images = [];
            this.$nextTick(() => {
                this.inputData.images = [...images];
            });
        },
        handleColorRemove(index) {
            this.inputData.colors.splice(index, 1);
        },
        handleSubmit(e) {
            e?.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log("OK");
                } else {
                    console.log('Error: ', err);
                }
            });
        },
    }
}
</script>

<style lang="scss">
.item-form-component {
    display: flex;
    flex-direction: column;
    overflow: auto;
    .form-group {
        padding: 20px 32px;
        background: #FFFFFF;
        margin-bottom: 28px;
        --column-num: 4;
        --column-gap: 18px;

        .image-list, .item-specification {
            display: flex;
            flex-wrap: wrap;
            column-gap: var(--column-gap);
        }

        .small-column {
            width: calc((100% - (var(--column-num) - 1) * var(--column-gap)) / var(--column-num));
        }

        .large-column {
            width: calc((100% - var(--column-gap) * 3) / 4 * 2 + var(--column-gap));
        }
    }
}
</style>