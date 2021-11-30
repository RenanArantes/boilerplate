module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-knobs/register"
  ],
  framework: "@storybook/react"
}
