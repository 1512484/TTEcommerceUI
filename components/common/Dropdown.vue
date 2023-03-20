<template>
    <a-dropdown :trigger="trigger">
        <slot>
            <Button :dark="false">{{ getLabel(value) || "Select item" }}</Button>
        </slot>
        <a-menu slot="overlay">
            <a-menu-item v-for="(item, index) in items" :key="index" @click="$emit('input', item)">
                <slot name="item" v-bind="item">
                    {{ getLabel(item) }}
                </slot>
            </a-menu-item>
        </a-menu>
    </a-dropdown>
</template>

<script>
import Button from "@/components/common/Button.vue";

export default {
    components: { Button },
    props: {
        items: {
            type: Array,
            default: []
        },
        value: {
            type: String | Number | Object | null
        },
        trigger: {
            type: Array,
            default: () => (['click'])
        }
    },
    methods: {
        getLabel(value) {
            switch(typeof value) {
                case "string":
                case "number":
                    return value;
                case "object":
                    return value?.label || value?.title || "";
                default:
                    return "";
            }
        }
    }
}
</script>