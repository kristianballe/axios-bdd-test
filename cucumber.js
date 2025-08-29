export default {
  default: {
    import: ['features/step_definitions/**/*.js'],
    paths: ['features/**/*.feature'],
    format: ['@cucumber/pretty-formatter'],
    tags: '@positive'
  }
};
