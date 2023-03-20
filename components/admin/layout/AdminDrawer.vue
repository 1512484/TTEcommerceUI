<template>
    <div class="flex flex-col h-full admin-drawer-component">
        <div class="flex-center flex-col text-center drawer-top">
            <a-avatar :size="124" icon="user" class="mb-3" />
            <p class="text-lg font-extrabold mb-0.5">Thanh Le</p>
            <p>Admin</p>
        </div>
        <div class="flex-grow pt-8 pb-7 mt-7 drawer-content">
            <a-menu :default-selected-keys="['dashboard']" :open-keys.sync="openKeys" mode="inline" class="h-full flex flex-col">
                <a-menu-item key="dashboard">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 8.3335H2.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.5 5H2.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.5 11.6665H2.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.5 15H2.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Dashboard</span>
                </a-menu-item>
                <a-sub-menu key="products">
                    <span slot="title">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.75 7.8333L6.25 3.5083" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.5 13.3334V6.66675C17.4997 6.37448 17.4225 6.08742 17.2763 5.83438C17.13 5.58134 16.9198 5.37122 16.6667 5.22508L10.8333 1.89175C10.58 1.74547 10.2926 1.66846 10 1.66846C9.70744 1.66846 9.42003 1.74547 9.16667 1.89175L3.33333 5.22508C3.08022 5.37122 2.86998 5.58134 2.72372 5.83438C2.57745 6.08742 2.5003 6.37448 2.5 6.66675V13.3334C2.5003 13.6257 2.57745 13.9127 2.72372 14.1658C2.86998 14.4188 3.08022 14.6289 3.33333 14.7751L9.16667 18.1084C9.42003 18.2547 9.70744 18.3317 10 18.3317C10.2926 18.3317 10.58 18.2547 10.8333 18.1084L16.6667 14.7751C16.9198 14.6289 17.13 14.4188 17.2763 14.1658C17.4225 13.9127 17.4997 13.6257 17.5 13.3334Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.7251 5.7998L10.0001 10.0081L17.2751 5.7998" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10 18.4V10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Products</span>
                    </span>
                    <a-menu-item key="collections">
                        Collections
                    </a-menu-item>
                    <a-menu-item key="category">
                        Category
                    </a-menu-item>
                    <a-menu-item key="items">
                        Items
                    </a-menu-item>
                </a-sub-menu>
                <a-menu-item key="orders">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_889_1744)">
                            <path d="M10 0.833496V19.1668" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.1667 4.1665H7.91667C7.14312 4.1665 6.40125 4.47379 5.85427 5.02078C5.30729 5.56776 5 6.30962 5 7.08317C5 7.85672 5.30729 8.59858 5.85427 9.14557C6.40125 9.69255 7.14312 9.99984 7.91667 9.99984H12.0833C12.8569 9.99984 13.5987 10.3071 14.1457 10.8541C14.6927 11.4011 15 12.143 15 12.9165C15 13.6901 14.6927 14.4319 14.1457 14.9789C13.5987 15.5259 12.8569 15.8332 12.0833 15.8332H5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                    </svg>
                    <span>Orders</span>
                </a-menu-item>
                <a-menu-item key="users">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_889_1748)">
                            <path d="M14.1668 17.5V15.8333C14.1668 14.9493 13.8156 14.1014 13.1905 13.4763C12.5654 12.8512 11.7176 12.5 10.8335 12.5H4.16683C3.28277 12.5 2.43493 12.8512 1.80981 13.4763C1.18469 14.1014 0.833496 14.9493 0.833496 15.8333V17.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.49984 9.16667C9.34079 9.16667 10.8332 7.67428 10.8332 5.83333C10.8332 3.99238 9.34079 2.5 7.49984 2.5C5.65889 2.5 4.1665 3.99238 4.1665 5.83333C4.1665 7.67428 5.65889 9.16667 7.49984 9.16667Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19.1665 17.5001V15.8334C19.166 15.0948 18.9201 14.3774 18.4676 13.7937C18.0152 13.2099 17.3816 12.793 16.6665 12.6084" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.3335 2.6084C14.0505 2.79198 14.686 3.20898 15.1399 3.79366C15.5937 4.37833 15.84 5.09742 15.84 5.83757C15.84 6.57771 15.5937 7.2968 15.1399 7.88147C14.686 8.46615 14.0505 8.88315 13.3335 9.06673" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                    </svg>
                    <span>Users</span>
                </a-menu-item>
                <a-menu-item key="banners">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.0835 8.3335C7.77385 8.3335 8.3335 7.77385 8.3335 7.0835C8.3335 6.39314 7.77385 5.8335 7.0835 5.8335C6.39314 5.8335 5.8335 6.39314 5.8335 7.0835C5.8335 7.77385 6.39314 8.3335 7.0835 8.3335Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.4998 12.5002L13.3332 8.3335L4.1665 17.5002" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Banners</span>
                </a-menu-item>
                <a-menu-item key="faqs">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6668 1.6665H5.00016C4.55814 1.6665 4.13421 1.8421 3.82165 2.15466C3.50909 2.46722 3.3335 2.89114 3.3335 3.33317V16.6665C3.3335 17.1085 3.50909 17.5325 3.82165 17.845C4.13421 18.1576 4.55814 18.3332 5.00016 18.3332H15.0002C15.4422 18.3332 15.8661 18.1576 16.1787 17.845C16.4912 17.5325 16.6668 17.1085 16.6668 16.6665V6.6665L11.6668 1.6665Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.6665 1.6665V6.6665H16.6665" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Theme FAQs</span>
                </a-menu-item>
                <a-menu-item key="settings">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1059_1457)">
                            <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.1668 12.5002C16.0559 12.7515 16.0228 13.0303 16.0718 13.3007C16.1208 13.571 16.2497 13.8204 16.4418 14.0168L16.4918 14.0668C16.6468 14.2216 16.7697 14.4054 16.8536 14.6078C16.9375 14.8101 16.9806 15.027 16.9806 15.246C16.9806 15.465 16.9375 15.6819 16.8536 15.8842C16.7697 16.0866 16.6468 16.2704 16.4918 16.4252C16.337 16.5801 16.1532 16.7031 15.9509 16.7869C15.7486 16.8708 15.5317 16.914 15.3127 16.914C15.0936 16.914 14.8768 16.8708 14.6744 16.7869C14.4721 16.7031 14.2883 16.5801 14.1335 16.4252L14.0835 16.3752C13.8871 16.183 13.6376 16.0542 13.3673 16.0052C13.097 15.9561 12.8182 15.9892 12.5668 16.1002C12.3204 16.2058 12.1101 16.3812 11.9621 16.6048C11.814 16.8284 11.7346 17.0903 11.7335 17.3585V17.5002C11.7335 17.9422 11.5579 18.3661 11.2453 18.6787C10.9328 18.9912 10.5089 19.1668 10.0668 19.1668C9.6248 19.1668 9.20088 18.9912 8.88832 18.6787C8.57576 18.3661 8.40016 17.9422 8.40016 17.5002V17.4252C8.39371 17.1493 8.30443 16.8818 8.14392 16.6574C7.98342 16.433 7.75911 16.2621 7.50016 16.1668C7.24882 16.0559 6.97 16.0228 6.69967 16.0718C6.42934 16.1208 6.1799 16.2497 5.9835 16.4418L5.9335 16.4918C5.77871 16.6468 5.59489 16.7697 5.39256 16.8536C5.19023 16.9375 4.97336 16.9806 4.75433 16.9806C4.5353 16.9806 4.31843 16.9375 4.1161 16.8536C3.91377 16.7697 3.72995 16.6468 3.57516 16.4918C3.4202 16.337 3.29727 16.1532 3.2134 15.9509C3.12952 15.7486 3.08635 15.5317 3.08635 15.3127C3.08635 15.0936 3.12952 14.8768 3.2134 14.6744C3.29727 14.4721 3.4202 14.2883 3.57516 14.1335L3.62516 14.0835C3.81728 13.8871 3.94615 13.6376 3.99517 13.3673C4.04418 13.097 4.01109 12.8182 3.90016 12.5668C3.79453 12.3204 3.61913 12.1101 3.39555 11.9621C3.17198 11.814 2.90999 11.7346 2.64183 11.7335H2.50016C2.05814 11.7335 1.63421 11.5579 1.32165 11.2453C1.00909 10.9328 0.833496 10.5089 0.833496 10.0668C0.833496 9.6248 1.00909 9.20088 1.32165 8.88832C1.63421 8.57576 2.05814 8.40016 2.50016 8.40016H2.57516C2.85099 8.39371 3.1185 8.30443 3.34291 8.14392C3.56732 7.98342 3.73826 7.75911 3.8335 7.50016C3.94443 7.24882 3.97752 6.97 3.9285 6.69967C3.87948 6.42934 3.75061 6.1799 3.5585 5.9835L3.5085 5.9335C3.35354 5.77871 3.2306 5.59489 3.14673 5.39256C3.06286 5.19023 3.01969 4.97336 3.01969 4.75433C3.01969 4.5353 3.06286 4.31843 3.14673 4.1161C3.2306 3.91377 3.35354 3.72995 3.5085 3.57516C3.66328 3.4202 3.8471 3.29727 4.04943 3.2134C4.25176 3.12952 4.46864 3.08635 4.68766 3.08635C4.90669 3.08635 5.12357 3.12952 5.3259 3.2134C5.52823 3.29727 5.71204 3.4202 5.86683 3.57516L5.91683 3.62516C6.11323 3.81728 6.36268 3.94615 6.63301 3.99517C6.90333 4.04418 7.18215 4.01109 7.4335 3.90016H7.50016C7.74664 3.79453 7.95684 3.61913 8.10491 3.39555C8.25297 3.17198 8.33243 2.90999 8.3335 2.64183V2.50016C8.3335 2.05814 8.50909 1.63421 8.82165 1.32165C9.13421 1.00909 9.55814 0.833496 10.0002 0.833496C10.4422 0.833496 10.8661 1.00909 11.1787 1.32165C11.4912 1.63421 11.6668 2.05814 11.6668 2.50016V2.57516C11.6679 2.84332 11.7474 3.10531 11.8954 3.32888C12.0435 3.55246 12.2537 3.72786 12.5002 3.8335C12.7515 3.94443 13.0303 3.97752 13.3007 3.9285C13.571 3.87948 13.8204 3.75061 14.0168 3.5585L14.0668 3.5085C14.2216 3.35354 14.4054 3.2306 14.6078 3.14673C14.8101 3.06286 15.027 3.01969 15.246 3.01969C15.465 3.01969 15.6819 3.06286 15.8842 3.14673C16.0866 3.2306 16.2704 3.35354 16.4252 3.5085C16.5801 3.66328 16.7031 3.8471 16.7869 4.04943C16.8708 4.25176 16.914 4.46864 16.914 4.68766C16.914 4.90669 16.8708 5.12357 16.7869 5.3259C16.7031 5.52823 16.5801 5.71204 16.4252 5.86683L16.3752 5.91683C16.183 6.11323 16.0542 6.36268 16.0052 6.63301C15.9561 6.90333 15.9892 7.18215 16.1002 7.4335V7.50016C16.2058 7.74664 16.3812 7.95684 16.6048 8.10491C16.8284 8.25297 17.0903 8.33243 17.3585 8.3335H17.5002C17.9422 8.3335 18.3661 8.50909 18.6787 8.82165C18.9912 9.13421 19.1668 9.55814 19.1668 10.0002C19.1668 10.4422 18.9912 10.8661 18.6787 11.1787C18.3661 11.4912 17.9422 11.6668 17.5002 11.6668H17.4252C17.157 11.6679 16.895 11.7474 16.6714 11.8954C16.4479 12.0435 16.2725 12.2537 16.1668 12.5002V12.5002Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                    </svg>
                    <span>Settings</span>
                </a-menu-item>
                <a-menu-item key="logout" class="mt-auto">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.3335 14.1668L17.5002 10.0002L13.3335 5.8335" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.5 10H7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Logout</span>
                </a-menu-item>
                <a-menu-item key="help">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_894_1645)">
                            <path d="M9.99984 18.3332C14.6022 18.3332 18.3332 14.6022 18.3332 9.99984C18.3332 5.39746 14.6022 1.6665 9.99984 1.6665C5.39746 1.6665 1.6665 5.39746 1.6665 9.99984C1.6665 14.6022 5.39746 18.3332 9.99984 18.3332Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.5752 7.49999C7.77112 6.94304 8.15782 6.47341 8.66682 6.17426C9.17583 5.87512 9.77427 5.76577 10.3562 5.86558C10.9381 5.96539 11.4659 6.26792 11.8461 6.71959C12.2263 7.17126 12.4344 7.74292 12.4335 8.33332C12.4335 9.99999 9.93353 10.8333 9.93353 10.8333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10 14.1665H10.0083" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                    </svg>
                    <span>Help</span>
                </a-menu-item>
            </a-menu>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            current: ['mail'],
            openKeys: ['products'],
        }
    },
}
</script>

<style lang="scss">
.admin-drawer-component {
    --menu-active-color: #131313;
    background: #FFFFFF;
    .drawer-top {
        padding: 20px 0 12px;
        margin: 0 31px;
        border-bottom: 1px solid #A9A9A9;
    }
    .drawer-content {
        background: #FFFFFF;
    }
    .mt-auto {
        margin-top: auto !important;
    }

    .ant-menu {
        .ant-menu-item, .ant-menu-submenu-title, .ant-menu-submenu-title > span {
            display: flex;
            align-items: center;
            font-size: var(--text-base);
            color: #A9A9A9;
            svg {
                margin-right: 12px;
            }

            &:hover, &:hover span {
                color: var(--menu-active-color) !important;
                .ant-menu-submenu-arrow {
                    &::before, &::after {
                        background-image: linear-gradient(to right, var(--menu-active-color), var(--menu-active-color));
                    }
                }
            }
        }

        .ant-menu-submenu-active {
            color: var(--menu-active-color) !important;
        }
        
        .ant-menu-item, .ant-menu-submenu-title {
            margin-top: 0;
            margin-bottom: 0;
            padding: 0 20px !important;
            background: transparent !important;
        }

        .ant-menu-item-selected {
            font-weight: 800;
            color: var(--menu-active-color);
            &::after {
                display: none;
            }
        }

        .ant-menu-sub {
            .ant-menu-item {
                font-size: var(--text-sm);
                padding-left: 52px !important;
                height: 28px;
            }
        }

        .ant-menu-submenu-arrow {
            position: unset;
            margin-left: 10px;
            pointer-events: none;
            &::before, &::after {
                width: 9px;
                background-image: linear-gradient(to right, currentColor, currentColor);
            }
        }
        
        .ant-menu-submenu-open.ant-menu-submenu-inline > .ant-menu-submenu-title {
            .ant-menu-submenu-arrow {    
                transform: translateY(3px);
                &::before, &::after {
                    width: 10px;
                }
                &::before {
                    transform: rotate(-45deg) translateX(4px);
                }
                &::after {
                    transform: rotate(45deg) translateX(-4px);
                }
            }
        }
        .ant-menu-submenu-inline > .ant-menu-submenu-title {
            .ant-menu-submenu-arrow {  
                transform: translateY(-3px);  
                &::before {
                    transform: rotate(45deg) translateX(4px);
                }
                &::after {
                    transform: rotate(-45deg) translateX(-4px);
                }
            }
        }
    }
}
</style>