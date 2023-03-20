<template>
  <a-layout>
    <a-spin :spinning="loading">
      <a-table row-key="id" :columns="columns" :data-source="state.data">
      </a-table>
    </a-spin>
  </a-layout>
</template>

<script>
import useThemeDataBiz from "./-theme.biz";

export default {
  data() {
    return {
      loading: false,
    };
  },
  setup() {
    return {
      ...useThemeDataBiz(),
    };
  },
  async fetch() {
    this.loading = true;
    await this.init();
    this.loading = false;
  },
  computed: {
    columns() {
      return [
        {
          title: "Background Color",
          dataIndex: "bg_color",
          key: "bg_color",
        },
      ];
    },
  },
};
</script>
