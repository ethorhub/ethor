module.exports = require("require-all")({
  dirname: __dirname,
  resolve: a => {
    return JSON.parse(JSON.stringify(a));
  }
});
