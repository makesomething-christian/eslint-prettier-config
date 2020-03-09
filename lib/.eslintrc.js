module.exports = {
    extends: ['eslint:recommended', 'prettier'], // extending recommended config and config derived from eslint-config-prettier
    plugins: ['prettier'], // activating esling-plugin-prettier 
    parserOptions: {
      "ecmaVersion": 2017
    },
    env: {
      "browser": true,
      "amd": true,
      "node": true
    },
    rules: {
      'prettier/prettier': [ // Prettier rules
        'error',
        {
          singleQuote: true, 
          trailingComma: 'all',
        },
      ],
      quotes: ["error", "single", { // ESLint rules
        avoidEscape: true
      }], 
    },
  };