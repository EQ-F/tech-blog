<template></template>
<style>
/* ul {
  line-height: 2rem;
}

img {
  border-radius: 6px;
}

code {
  border-radius: 4px !important;
} */

/* :not(pre) > code {
  font-size: 0.85em;
} */

img > .caption {
  font-size: 12px;
}

.img-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px auto;
}

.iframe {
  aspect-ratio: 16 / 9;
  width: 100%;
}

a {
  text-decoration: none !important;
}

a.header-anchor {
  font-weight: 600;
}

.caption {
  display: block;
  text-align: center;
  margin-top: 16px;
  font-size: 14px;
}

.contains-task-list li {
  list-style-type: none;
}

.search-box input {
  padding-inline: 2rem 0.5rem !important;
}

.vp-sidebar-children {
  font-size: 0.95em;
}

p,
ul,
ol {
  line-height: 1.7;
  overflow-wrap: break-word;
}

.article {
  /* border: 2.5px solid var(--vp-c-border); */
  margin: 3rem 0;
  /* padding: 1rem; */
  /* border-radius: 0.375rem; */
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
}

.article .title {
  font-size: 1.65rem;
  font-weight: 600;
}

.tag-list {
  color: var(--vp-c-accent);
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
