import Padding from "../../../storybook/theme/Padding.js";

export default {
  title: "UI | Form / Field / Builder Field",
  decorators: [Padding]
};

export const regular = () => ({
  data() {
    return {
      value: [
        {
          type: "headline",
          value: {
            headline: "Welcome to the Builder Field!"
          }
        },
        {
          type: "text",
          value: {}
        }
      ],
    };
  },
  computed: {
    fieldsets() {
      return {
        headline: {
          name: "Headline",
          label: "Headline: \"{{ headline }}\"",
          icon: "title",
          fields: {
            headline: {
              label: "Headline",
              type: "text"
            }
          }
        },
        text: {
          name: "Text block",
          icon: "text",
          fields: {
            text: {
              label: "Content",
              type: "textarea"
            }
          }
        },
        nested: {
          name: "Nested",
          fields: {
            builder: {
              label: "Another builder",
              type: "builder",
              columns: 2,
              fieldsets: {
                teaser: {
                  name: "Teaser",
                  fields: {
                    text: {
                      type: "text"
                    }
                  }
                }
              },
              value: []
            }
          }
        },
        related: {
          name: "Related content",
          label: "Related: {{ categories }} (max. {{ max }})",
          icon: false,
          fields: {
            categories: {
              label: "Categories",
              type: "multiselect",
              options: [
                { value: "study", text: "Study" },
                { value: "research", text: "Research" },
                { value: "news", text: "News" }
              ],
              width: "1/2"
            },
            max: {
              label: "Maximum items",
              type: "number",
              min: 0,
              max: 10,
              default: 4,
              width: "1/2"
            }
          }
        }
      };
    }
  },
  template: `
    <div>
      <k-builder-field
        :fieldsets="fieldsets"
        :value="value"
        label="Builder"
        class="mb-8"
      />

      <k-headline class="mb-3">Value</k-headline>
      <k-code-block :code="value" />
    </div>
  `,
});


export const disabled = () => ({
  extends: regular(),
  template: `
  <div>
    <k-builder-field
      :fieldsets="fieldsets"
      :value="value"
      :disabled="true"
      label="Builder"
      class="mb-8"
    />

    <k-headline class="mb-3">Value</k-headline>
    <k-code-block :code="value" />
  </div>
`,
});

export const max = () => ({
  extends: regular(),
  template: `
  <div>
    <k-builder-field
      :fieldsets="fieldsets"
      :value="value"
      :max="2"
      label="Builder"
      class="mb-8"
    />

    <k-headline class="mb-3">Value</k-headline>
    <k-code-block :code="value" />
  </div>
`,
});
