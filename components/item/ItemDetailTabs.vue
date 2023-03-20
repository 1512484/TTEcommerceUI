<template>
    <div class="item-detail-tabs-component">
        <Tabs :headers="tabHeader" v-model="activeTab">
            <TabPane key="description" :active="activeTab">
                <div>
                    Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </div>
            </TabPane>
            <TabPane key="detail" :active="activeTab">
                <div>
                    Detail content
                </div>
            </TabPane>
            <TabPane key="review" :active="activeTab">
                <div>
                    <p>
                        Be the first to write your review ! 
                        <span class="font-bold underline cursor-pointer ml-4" @click="handleOpenReviewModal">REVIEW NOW</span>
                    </p>
                </div>
            </TabPane>
        </Tabs>

        <ReviewModal ref="reviewModalRef" />
    </div>
</template>

<script>
import Tabs from "@/components/common/Tabs.vue";
import TabPane from "@/components/common/TabPane.vue";
import ReviewModal from "@/components/modal/ReviewModal.vue";

export default {
    components: { Tabs, TabPane, ReviewModal },
    data() {
        return {
            tabHeader: [
                { key: "description", title: "Description" },
                { key: "detail", title: "Product details" },
                { key: "review", title: "Reviews" }
            ],
            activeTab: { key: "description", title: "Description" },
        }
    },
    methods: {
        handleOpenReviewModal() {
            this.$refs.reviewModalRef.open();
        }
    }
}
</script>