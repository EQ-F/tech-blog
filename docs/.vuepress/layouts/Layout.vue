<script setup lang="ts">
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import { useDarkMode } from "@vuepress/theme-default/client";
import { usePageFrontmatter } from "@vuepress/client";

const frontmatter = usePageFrontmatter();
const isDarkMode = useDarkMode();
</script>

<template>
  <ParentLayout>
    <template #page-content-bottom>
      <!-- eslint-disable-next-line vue/no-undef-components -->
      <Tags />
    </template>
    <template #page-bottom>
      <!-- eslint-disable-next-line vue/no-undef-components -->
      <CommentService v-if="frontmatter.comment" :darkmode="isDarkMode" />
    </template>
  </ParentLayout>
</template>
