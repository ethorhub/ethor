const Seperator = require("enquirer-separator");

const choices = require("./choices");

module.exports = () => {
  const fs = require("fs");
  const path = require("path");
  var recents = "[]";
  try {
    recents = fs.readFileSync(
      path.resolve(process.cwd(), ".tmp", "script_recent.json"),
      "utf8"
    );
  } catch (err) {
    // console.error(err)
    try {
      fs.mkdirSync(path.resolve(process.cwd(), ".tmp"));
    } catch (err) {}
  }
  recents = JSON.parse(recents);
  const choicesFirst = [{ name: "Run", value: "run" }, choices.open_docs[0]];
  if (recents.length > 0) {
    choicesFirst.push(new Seperator("--------- Recent ---------"));
    recents.map(recent => {
      choicesFirst.push(recent);
    });
    // choicesFirst.unshift(new Seperator("--------- Default ---------"));
  }
  return choicesFirst;
};
