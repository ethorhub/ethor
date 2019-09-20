const path = require("path");
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: path.resolve(__dirname, "./tsconfig.json"),
    tsconfigRootDir: __dirname
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:security/recommended"
  ],
  rules: {
    semi: 1,
    "no-underscore-dangle": [
      "error",
      {
        allowAfterThis: true
      }
    ]
  },
  settings: {
    "import/resolver": {
      typescript: {},
      alias: {
        map: [["@@config", path.resolve(__dirname, "./utils/config.ts")]],
        extensions: [".ts"]
      }
    }
  }
};
