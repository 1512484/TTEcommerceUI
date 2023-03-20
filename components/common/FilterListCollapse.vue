<template>
    <a-collapse v-model="activeKey" expand-icon-position="right" class="filter-list-collapse-component">
        <a-collapse-panel key="1" header="HOME">
            <div v-for="i in 7" :key="i" class="item">
                Consectetuer
            </div>
        </a-collapse-panel>
        <a-collapse-panel key="2" header="BRAND">
            <a-checkbox v-for="i in 3" :key="i" class="item">Consectetuer</a-checkbox>
        </a-collapse-panel>
        <a-collapse-panel key="3" header="BRAND">
            <a-checkbox v-for="i in 3" :key="i" class="item">Consectetuer</a-checkbox>
        </a-collapse-panel>
        <a-collapse-panel key="4" header="PRICE">
            <a-radio-group class="w-full">
                <a-radio value="1" class="shadow-radio item">0-$100</a-radio>
                <a-radio value="2" class="shadow-radio item">$150 - $1000</a-radio>
                <a-radio value="3" class="shadow-radio item">$1000 - $2000</a-radio>
            </a-radio-group>
        </a-collapse-panel>
        <a-collapse-panel key="5" header="SIZE">
            <a-checkbox class="item">S</a-checkbox>
            <a-checkbox class="item">M</a-checkbox>
            <a-checkbox class="item">L</a-checkbox>
        </a-collapse-panel>
    </a-collapse>
</template>

<script>
export default {
    data() {
        return {
            activeKey: ["1", "2", "3", "4", "5"]
        }
    },
    mounted() {
        window.addEventListener("resize", this.handleResize);
    },
    methods: {
        handleResize() {
            if(window.innerWidth > 429) {
                this.activeKey = ["1", "2", "3", "4", "5"];
            }
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/common/filter-list-collapse.scss";
</style>