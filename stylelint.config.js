module.exports = {
  customSyntax: 'postcss-html',
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'media-feature-range-notation': 'prefix',
    'at-rule-empty-line-before': ['always'],
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
      },
    ],
  },
}
