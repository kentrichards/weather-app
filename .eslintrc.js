module.exports = {
  globals: {
    __PATH_PREFIX__: true
  },
  extends: ['react-app', 'airbnb', 'airbnb/hooks', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        assert: 'either'
      }
    ],
    'no-unexpected-multiline': 'error'
  },
  env: {
    browser: true,
    es6: true
  }
}
