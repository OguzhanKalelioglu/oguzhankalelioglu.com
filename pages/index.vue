<template>
  <NotionRenderer :blockMap="blockMap" fullPage />
</template>

<script>
export default {
  data: () => ({ blockMap: null }),
  async asyncData({ $notion }) {
    // use Notion module to get Notion blocks from the API via a Notion pageId
    const blockMap = await $notion.getPageBlocks(
      "O-uzhan-Kalelio-lu-8b17934a8d3b4229ad67a75125a43534"
    );
    return { blockMap };
  },
};
</script>

<style>
@import "vue-notion/src/styles.css"; /* optional Notion-like styles */
</style>

<style>
.notion-title {
    font-size: 1.5em;
    font-weight: 700;
    margin-top: 0.75em;
    margin-bottom: 0.25em;
}
</style>