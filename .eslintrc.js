module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  globals: {
    __IS_DEV__: true,
    __API__: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:storybook/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/jsx-indent': [2, 4],
    'react/jsx-indent-props': [2, 4],
    indent: [2, 4],
    '@typescript-eslint/indent': [2, 4],
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/naming-convention': 'warn',
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.tsx']
    }],
    'import/no-unresolved': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'padded-blocks': 'off',
    'skipBlankLines': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "no-param-reassign": "off",
    "react/prop-types": "off",
    "react/display-name": "off"
  },
  
};