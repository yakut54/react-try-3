module.exports = {
  env: {
    jest: true,
    es2021: true,
    browser: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'i18next',
    'react-hooks',
    '@typescript-eslint',
  ],
  rules: {
    indent: [2],
    'no-shadow': 'off',
    'react/jsx-indent': [2],
    semi: ['error', 'never'],
    'no-unused-vars': 'warn',
    'import/extensions': 'off',
    'react/jsx-indent-props': [2],
    'import/no-unresolved': 'off',
    'no-underscore-dangle': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'import/no-extraneous-dependencies': 'off',
    'react/function-component-definition': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'max-len': ['error', { code: 120, ignoreComments: true }],
    'eslint-disable-next-line react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: ['data-testid', 'to', 'fallback'],
      },
    ],
  },
  overrides: [
    {
      rules: { 'i18next/no-literal-string': 'off' },
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
    },
  ],
  globals: { __IS_DEV__: true },
}
