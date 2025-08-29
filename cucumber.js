export default {
  default: {
    import: ['step_definitions/*.js'],
    paths: ['features/**/*.feature'],
    format: ['@cucumber/pretty-formatter'],
    tags: '@positive'
  }
};
