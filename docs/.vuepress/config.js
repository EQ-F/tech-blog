import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { viteBundler } from "@vuepress/bundler-vite";
import { PROJECT } from "./const";
import { getDirname, path } from "vuepress/utils";
import plugins from "./configs/plugins";

const __dirname = import.meta.dirname || getDirname(import.meta.url);

export default defineUserConfig({
  title: "EQ플 Tech blog",
  description: "EQ플 Tech blog",
  base: process.env.NODE_ENV === "production" ? "/tech-blog/" : "/",
  theme: defaultTheme({
    lastUpdatedText: "마지막 수정일",
    contributors: false,
    navbar: [
      { text: "Github", link: "https://github.com/EQ-F" },
      { text: "Tags", link: "/tags/" },
    ],
    sidebar: [
      {
        text: "Project",
        prefix: "/project/",
        link: "/project/",
        children: PROJECT,
      },
    ],
    themePlugins: { prismjs: false },
    alias: {
      "@theme/Page.vue": path.resolve(__dirname, "./components/Page.vue"),
    },
  }),
  bundler: viteBundler(),
  plugins,
});
