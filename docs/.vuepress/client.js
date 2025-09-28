import { defineClientConfig } from "vuepress/client";
import Home from "./components/Home.vue";
import Style from "./components/Style.vue";
import Tags from "./components/Tags.vue";
import Layout from "./layouts/Layout.vue";
import TagList from "./layouts/TagList.vue";
import TagMap from "./layouts/TagMap.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.component("Home", Home);
    app.component("Tags", Tags);
    app.component("Page", Tags);
  },
  layouts: { Layout, TagList, TagMap },
  rootComponents: [Style],
});
