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
          "consistent-return": "error",
          "no-debugger" : "error",
          "no-alert" : "error",
          "no-console" : [ "error", 
            { 
              "allow" : [ "warn", "trace", "error"] 
            }
          ],
          "indent": [
            "error", 
            2, 
            {
              "FunctionDeclaration": { "body": 1, "parameters": 1 },
              "FunctionExpression": { "body": 1, "parameters": 1 },
              "ObjectExpression": 1,
              "ignoreComments": false
            }
          ],
          "spaced-comment": ["error", "always", {
              "block": {
                  "balanced": true,
                  "exceptions": ["*", "!"]
              }
          }],
          "lines-around-comment": ["error", { "beforeBlockComment": true, "afterBlockComment": false }],
          "multiline-comment-style": ["error", "starred-block"],
          "linebreak-style": [ "warn", "unix"],
          "quotes": ["error","single"],
          "no-mixed-spaces-and-tabs": "error",
          "no-trailing-spaces": "error",
          "no-extra-semi": "error",
          "semi": [
              "error",
              "always"
          ],
        },
      ],
    },
  };