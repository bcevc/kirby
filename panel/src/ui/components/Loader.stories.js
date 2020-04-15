import Loader from "./Loader.vue";

export default {
  title: "Interaction / Loader",
  component: Loader
};

export const regular = () => ({
  template: `<k-loader />`,
});

export const white = () => ({
  template: `<k-loader style="background: #fff; width: 2.5rem; height: 2.5rem" />`,
});

export const black = () => ({
  template: `<k-loader style="background: #000; color: #fff; width: 2.5rem; height: 2.5rem" />`,
});
