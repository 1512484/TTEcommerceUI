<template>
    <div class="summary-card-component">
        <div class="w-full flex items-center gap-4.5">
            <div class="flex-center card-icon" :style="`color: ${iconColor}`" v-if="!!$slots.icon?.[0]">
                <slot name="icon"></slot>
            </div>
            <div class="w-full card-info">
                <p class="text-lg font-bold mb-1.5 title" v-if="!!$slots.title?.[0]">
                    <slot name="title"></slot>
                </p>
                <p class="text-3xl font-extrabold mb-3.5 number" v-if="!!$slots.number?.[0]">
                    <slot name="number"></slot>
                </p>
                <p class="info" v-if="!!$slots.info?.[0]">
                    <slot name="info"></slot>
                </p>
            </div>

            <a-dropdown :trigger="['click']">
                <img src="@/assets/images/icon/more-vertical.svg" class="more-info-dropdown-icon" />
                <a-menu slot="overlay">
                    <a-menu-item key="0">
                        1st menu item
                    </a-menu-item>
                    <a-menu-item key="1">
                        2nd menu item
                    </a-menu-item>
                    <a-menu-item key="2">
                        3rd menu item
                    </a-menu-item>
                </a-menu>
            </a-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        iconColor: {
            type: String,
            default: "#7D7D7D"
        }
    }
}
</script>

<style lang="scss">
.summary-card-component {
    --icon-size: 80px;
    --icon-image-size: 41.29px;

    position: relative;
    padding: 38px 24px 48px;
    border-radius: 8px;
    background: #FFFFFF;
    box-shadow: 1px 1px 8px #C5C5C5;

    .card-icon {
        position: relative;
        width: var(--icon-size);
        min-width: var(--icon-size);
        height: var(--icon-size);
        border-radius: 50%;
        overflow: hidden;
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: currentColor;
            opacity: 0.2;
        }

        img {
            width: var(--icon-image-size);
            max-width: var(--icon-image-size);
            height: var(--icon-image-size);
        }
    }

    .card-info {
        .title, .number {
            line-height: 1.2;
        }
    }

    .more-info-dropdown-icon {
        position: absolute;
        top: 16px;
        right: 16px;
        cursor: pointer;
    }
}
</style>