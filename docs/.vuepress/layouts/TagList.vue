<script setup lang="ts">
import { useBlogCategory } from "@vuepress/plugin-blog/client";
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import { usePageFrontmatter } from "@vuepress/client";

const categoryMap = useBlogCategory("tags");
const frontmatter = usePageFrontmatter();
</script>

<template>
  <ParentLayout>
    <template #page-content-top>
      <div>
        <h1>{{ frontmatter.title }}</h1>

        <div v-if="categoryMap.currentItems" class="article-wrapper">
          <div v-if="!categoryMap.currentItems.length">Nothing in here.</div>
          <article
            v-for="{ info, path } in categoryMap.currentItems"
            :key="path"
            class="article"
            @click="$router.push(path)"
          >
            <header class="title">{{ info.title }}</header>
            <div v-if="info.excerpt" class="excerpt" v-html="info.excerpt" />
            <div class="tag-list">
              <span v-for="name in info.tags"> #{{ name }} </span>
            </div>
          </article>
        </div>
      </div>
    </template>
  </ParentLayout>
</template>
