module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
  },
  extends: ['airbnb', 'airbnb/hooks'],
  rules: {
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
