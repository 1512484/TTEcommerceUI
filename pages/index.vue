<template>
  <div>
    <banner :number="3" dots />

    <block-content :block-data="blockData" />

    <banner middle-banner />

    <block-content :block-data="block2Data" />

    <banner2 />

    <block-instagram />

    <block-post />

    <block-subscribe />
  </div>
</template>

<script>
import Banner from "@/components/banner/Banner.vue";
import Banner2 from "@/components/banner/Banner2.vue";
import BlockContent from "@/components/block/BlockContent.vue";
import BlockSubscribe from "@/components/block/BlockSubscribe.vue";
import BlockPost from "@/components/block/BlockPost.vue";
import BlockInstagram from "@/components/block/BlockInstagram.vue";
import { productList, bestSellerImageList } from "@/static/data.js";

export default {
  name: 'IndexPage',
  components: { Banner, Banner2, BlockContent, BlockSubscribe, BlockPost, BlockInstagram },
  data() {
    return {
      blockData: {
        title: "New arrival",
        description: "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
        itemType: 1,
        items: productList
      },
      block2Data: {
        title: "Best sellers",
        description: "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
        itemType: 2,
        items: bestSellerImageList
      }
    }
  }
}
</script>