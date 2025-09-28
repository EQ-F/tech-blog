<script setup lang="ts">
import { useBlogCategory } from "@vuepress/plugin-blog/client";
import { RouteLink } from "vuepress/client";
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";

const categoryMap = useBlogCategory("tags");
</script>

<template>
  <ParentLayout>
    <template #page-content-top>
      <div>
        <h1>Tag 목록</h1>
        <ul>
          <li v-for="({ items, path }, name) in categoryMap.map" :key="path">
            <RouteLink :key="name" :to="path" class="category">
              #{{ name }}
              <span class="category-num"> ({{ items.length }}) </span>
            </RouteLink>
          </li>
        </ul>
      </div>
    </template>
  </ParentLayout>
</template>
