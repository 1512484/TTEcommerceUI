<template>
    <div class="tab-pane-component content-item" v-show="active.key == $vnode?.key" :class="{'active': active.key == $vnode?.key}">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        active: Object
    }
}
</script>