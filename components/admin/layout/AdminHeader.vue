<template>
    <div class="admin-header-component">
        <a-affix style="width: 100% !important">
            <div class="relative header">
                <div class="flex items-center justify-between" ref="headerContentRef">
                    <NuxtLink to="/">
                        <div class="relative logo">
                            <img src="@/assets/images/logo.svg" class="absolute-full" />
                        </div>
                    </NuxtLink>
                    <div class="flex items-center gap-7">
                        <a-form :form="form" class="search-form">
                            <Input placeholder="Search..." v-model="keyword" name="search" type="text" no-border shadow suffix-search-input class="search-input" />
                        </a-form>
                        <a-badge class="flex-center cursor-pointer" count="1" show-zero>
                            <img src="@/assets/images/icon/bell.svg" />
                        </a-badge>
                        <a-dropdown :getPopupContainer="() => $refs.headerContentRef" :trigger="['click']" overlay-class-name="user-dropdown">
                            <a-menu slot="overlay">
                                <a-menu-item key="1">Logout</a-menu-item>
                            </a-menu>
                            <button class="flex items-center cursor-pointer bg-transparent px-0">
                                <img src="@/assets/images/icon/user.svg" class="user-icon" />
                            </button>
                        </a-dropdown>
                    </div>
                </div>
            </div>
        </a-affix>
    </div>
</template>

<script>
import Input from "@/components/common/Input.vue";

export default {
    components: { Input },
    data() {
        return {
            form: this.$form.createForm(this, { name: 'dynamic_rule' }),
            keyword: ""
        }
    }
}
</script>

<style lang="scss">
.admin-header-component {
    box-shadow: 0px 4px 4px #E6E6E6;
    background: var(--color-header);
    .header {
        padding: 10px 22px;
        .logo {
            width: 52px;
            height: 22px;
            margin-left: 61px;
            img {
                object-fit: contain;
            }
        }

        .search-form {
            width: 400px;
            .search-input {
                box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.25);
                border-radius: 50px;
                margin-bottom: 0;
                .ant-input, input {
                    border-radius: 50px;
                }
            }
        }
    }
}
</style>