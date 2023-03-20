<template>
    <div class="summary-list-component">
        <summary-card>
            <template #icon>
                <img src="@/assets/images/icon/summary-dollar.svg" />
            </template>
            <template #title>Earnings</template>
            <template #number>$7000.00</template>
            <template #info>
                <p class="font-semibold mb-1 range">This month</p>
                <p class="text-xs datetime">08:30 am - 06/09/2022</p>
            </template>
        </summary-card>
        <summary-card>
            <template #icon>
                <img src="@/assets/images/icon/summary-package.svg" />
            </template>
            <template #title>Products Sold</template>
            <template #number>900</template>
            <template #info>
                <p class="font-semibold mb-1 range">This month</p>
                <p class="text-xs datetime">08:30 am - 06/09/2022</p>
            </template>
        </summary-card>
        <summary-card>
            <template #icon>
                <img src="@/assets/images/icon/summary-users.svg" />
            </template>
            <template #title>Products Sold</template>
            <template #number>900</template>
            <template #info>
                <p class="font-semibold mb-1 range">This month</p>
                <p class="text-xs datetime">08:30 am - 06/09/2022</p>
            </template>
        </summary-card>
        <summary-card>
            <template #title>Lasted ratings & Review</template>
            <template #number>20</template>
            <template #info>
                <div class="w-full flex justify-between gap-3 review-info">
                    <div class="flex gap-2">
                        <a-avatar :size="28" src="https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" />
                        <div class="flex-grow">
                            <div class="flex items-center flex-wrap gap-2.5 mb-1">
                                <p class="font-semibold">Jone</p>
                                <Rate v-model="rating" :size="12" />
                            </div>
                            <p class="text-2xs review-content">Lorem Ipsum is simply dummy text of the printing</p>
                        </div>
                    </div>
                    <a class="text-xs italic text-underline mr-2 see-more">See more</a>
                </div>
            </template>
        </summary-card>
    </div>
</template>

<script>
import SummaryCard from "@/components/admin/dashboard/SummaryCard.vue";
import Rate from "@/components/common/Rate.vue";

export default {
    components: { SummaryCard, Rate },
    data() {
        return {
            rating: 4.5
        }
    }
}
</script>

<style lang="scss">
.summary-list-component {
    width: 100%;
    // display: flex;
    // flex-wrap: wrap;
    display: grid;
    // grid-template-columns: repeat(4, 1fr);
    grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
    gap: 24px;
    // .summary-card-component {
    //     width: calc((100% - 72px) / 4);
    // }

    .review-info {
        .ant-avatar {
            min-width: 28px;
        }

        .rate-component {
            --rate-size: 12px;
            height: var(--rate-size);
            .ant-rate {
                height: var(--rate-size);
                .ant-rate-star {
                    transform: scale(0.67) translateY(calc(-1 * var(--rate-size)));
                    &:not(:last-child) {
                        margin-right: -2px;
                    }
                }
            }
        }
    
        .review-content {
            color: #7D7D7D;
        }

        .see-more {
            color: #131313 !important;
            white-space: nowrap;
        }
    }

    @media (max-width: 1280px) {
        // grid-template-columns: repeat(2, 1fr);
        // .summary-card-component {
        //     width: calc((100% - 24px) / 2);
        // }
    }
}
</style>