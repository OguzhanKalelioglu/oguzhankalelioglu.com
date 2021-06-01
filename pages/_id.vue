<template>
  <NotionRenderer :blockMap="blockMap" prism fullPage />
</template>

<script>
import "prismjs";
import "prismjs/themes/prism.css";

export default {
  data: () => ({ blockMap: null }),
  async asyncData({ $notion , params}) {
    // use Notion module to get Notion blocks from the API via a Notion pageId
    const blockMap = await $notion.getPageBlocks(
      params.id
    );
    return { blockMap };
  },
};
</script>

<style>
@import "vue-notion/src/styles.css"; /* optional Notion-like styles */
</style>