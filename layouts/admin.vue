<template>
    <div class="h-full flex flex-col admin-layout">
        <!-- <header>
            <admin-header />
        </header>

        <main class="flex-grow">
            <nuxt />
        </main> -->
        <a-layout>
            <a-layout-header>
                <admin-header />
            </a-layout-header>
            <a-layout>
                <a-layout-sider width="240">
                    <admin-drawer />
                </a-layout-sider>
                <a-layout-content>
                    <nuxt />
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>

<script>
import AdminHeader from '@/components/admin/layout/AdminHeader.vue';
import AdminDrawer from '@/components/admin/layout/AdminDrawer.vue';

export default {
    components: { AdminHeader, AdminDrawer }
}
</script>

<style lang="scss">
    @import "@/assets/scss/layout/admin.scss";
</style>