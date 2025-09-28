import { searchPlugin } from "@vuepress/plugin-search";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import { markdownStylizePlugin } from "@vuepress/plugin-markdown-stylize";
import { appendDatePlugin } from "@vuepress/plugin-append-date";
import { markdownExtPlugin } from "@vuepress/plugin-markdown-ext";
import { markdownImagePlugin } from "@vuepress/plugin-markdown-image";
import { commentPlugin } from "@vuepress/plugin-comment";
import { blogPlugin } from "@vuepress/plugin-blog";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

const plugins = [
  searchPlugin(),
  shikiPlugin({
    themes: {
      light: "one-dark-pro",
      dark: "one-dark-pro",
    },
    lineNumbers: 10,
    notationDiff: true,
    notationErrorLevel: true,
    notationFocus: true,
    notationHighlight: true,
    notationWordHighlight: true,
    whitespace: true,
    collapsedLines: false,
    twoslash: true,
  }),
  markdownStylizePlugin({}),
  appendDatePlugin(),
  markdownExtPlugin({
    gfm: true,
  }),
  markdownImagePlugin({
    figure: true,
    lazyload: true,
    mark: true,
    size: true,
  }),
  commentPlugin({
    provider: "Giscus", // Artalk | Giscus | Waline | Twikoo
    repo: "EQ-F/tech-blog",
    repoId: "R_kgDOP4TwSA",
    category: "General",
    categoryId: "DIC_kwDOP4TwSM4Cv_OC",
    comment: true,
    // other options here
    // ...
  }),
  blogPlugin({
    // options
    filter: ({ filePathRelative, frontmatter }) => {
      if (!filePathRelative) return false;

      if (filePathRelative.startsWith("archives/")) return false;

      //   if (!frontmatter.description) return false;

      return true;
    },

    getInfo: ({ frontmatter, title, git = {}, data = {} }) => {
      const removeHtmlTags = (html) => {
        if (!html) return "";
        // h1, h2 등의 헤더 태그를 일반 텍스트로 변환하거나 제거
        const withoutHeaders = html.replace(
          /<h[1-6][^>]*>(.*?)<\/h[1-6]>/g,
          "$1"
        );
        // 나머지 HTML 태그 제거
        return withoutHeaders.replace(/<[^>]*>/g, "");
      };

      const info = {
        title,
        author: frontmatter.author || "",
        categories: frontmatter.categories || [],
        date: frontmatter.date || git.createdTime || null,
        tags: frontmatter.tags || [],
        excerpt: removeHtmlTags(data.excerpt) || "",
      };

      return info;
    },
    category: [
      {
        key: "tags",
        getter: ({ frontmatter }) => frontmatter.tags || [],
        path: "/tags/",
        layout: "TagMap",
        frontmatter: () => ({ title: "Tags 목록" }),
        itemPath: "/tags/:name/",
        itemLayout: "TagList",
        itemFrontmatter: (name) => ({ title: `Tag ${name}` }),
      },
    ],
  }),
  mdEnhancePlugin({
    // Enable mermaid
    mermaid: true,
  }),
];

export default plugins;
