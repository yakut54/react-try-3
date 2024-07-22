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
    'no-shadow': 'off',
    indent: ['error', 2],
    semi: ['error', 'never'],
    'no-unused-vars': 'warn',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-indent': ['error', 2],
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-indent-props': ['error', 2],
    'import/no-extraneous-dependencies': 'off',
    'react/function-component-definition': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'max-len': ['error', { code: 120, ignoreComments: true }],
    'eslint-disable-next-line react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/jsx-no-useless-fragment': 'off',
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: [
          'to',
          'fallback',
          'reducerKey',
          'data-testid',
        ],
      },
    ],
  },
  overrides: [
    {
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
      },
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
    },
    {
      files: ['**/src/**/slice/*.{ts,tsx}'],
      rules: {
        'no-param-reassign': [
          'error',
          {
            props: true,
            ignorePropertyModificationsFor: ['state'],
          },
        ],
      },
    },
    {
      files: ['DynamicModuleLoader.tsx'],
      rules: {
        'react-hooks/exhaustive-deps': 'off',
        'no-unused-vars': 'off',
      },
    },
  ],
  globals: {
    __IS_DEV__: true,
    __API__: true,
  },
}
