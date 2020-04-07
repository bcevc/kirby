import Counter from "./Counter.vue";
import {
  withKnobs,
  number
} from '@storybook/addon-knobs';

export default {
  title: "Interaction / Counter",
  decorators: [withKnobs],
  component: Counter
};

export const configurator = () => ({
  template: '<k-counter v-bind="$props" />',
  props: {
    count: {
      default: number('count', 20),
    },
    min: {
      default: number('min', 10),
    },
    max: {
      default: number('max', 100),
    }
  }
});

