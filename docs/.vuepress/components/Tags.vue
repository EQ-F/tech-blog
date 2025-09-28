<script setup lang="ts">
import { usePageFrontmatter } from "@vuepress/client";
import { RouteLink } from "vuepress/client";

const frontmatter = usePageFrontmatter();
</script>

<template>
  <div class="tag-list">
    <RouteLink
      v-for="name in frontmatter.tags"
      :key="name"
      :to="`/tags/${name}/`"
    >
      #{{ name }}
    </RouteLink>
  </div>
</template>
