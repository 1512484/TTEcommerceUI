<template>
    <div class="flex items-center gap-1 breadcrumb-component">
        <div class="font-light flex items-center breadcrumb-item" v-for="(item, index) in items" :key="index" :class="{'active': active == -1 && index == items.length - 1 || active == 0 && index < items.length - 1 }">
            <NuxtLink class="" :to="item.url" v-if="item.url">
                {{ item.title }}/
            </NuxtLink>
            <div class="current" @click="$emit('click', item)" v-else>
                {{ item.title }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: []
        },
        active: {
            type: Number,
            default: -1
        }
    }
    
}
</script>
