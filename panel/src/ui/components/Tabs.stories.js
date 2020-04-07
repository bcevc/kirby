import Tabs from "./Tabs.vue";

export default {
  title: "Navigation / Tabs",
  component: Tabs
};

export const regular = () => ({
  computed: {
    tabs() {
      return [
        { name: "content", label: "Content", icon: "page" },
        { name: "images", label: "Images", icon: "image" },
        { name: "downloads", label: "Downloads", icon: "download" },
        { name: "seo", label: "SEO", icon: "search" }
      ];
    },
    tab() {
      return this.tabs[0];
    }
  },
  template: '<k-tabs :tabs="tabs" :tab="tab" />',
});

