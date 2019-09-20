#!/usr/bin/env node

const path = require("path");
var commands = "";
const runSpawn = require("./script/runSpawn");
const cli = require("./script/meow");
const flags = cli.flags;
(async () => {
  if (flags.commands) {
    commands = flags.commands;
  } else {
    // require("./script/update-notifier");
    const main = require("./script/prompt");
    mainAnswers = await main();
    commands = mainAnswers.selectType;
    console.log(commands);
  }
  var allCommandsRun = "";
  commands.split(",").map(command => {
    let commandSplit = command
      .split("|")
      .slice(0, command.split("|").length - 1)
      .join("|");
    if (commandSplit === "") commandSplit = command;
    const choices = require("./script/choices")[commandSplit];
    if (!choices) throw "COMMAND NOT FOUND ------ " + commands + " ------";
    choices.map(allCommandsCommand => {
      if (command === allCommandsCommand.value) {
        if (allCommandsRun === "")
          return (allCommandsRun = allCommandsCommand.run);
        return (allCommandsRun += " && " + allCommandsCommand.run);
      }
    });
    if (flags.commands) return;
    const fs = require("fs");
    var fileContents = "[]";
    var obj = [];
    try {
      fileContents = fs.readFileSync(
        path.resolve(process.cwd(), ".tmp", "script_recent.json"),
        "utf8"
      );
    } catch (err) {
      // console.error(err);
      try {
        fs.mkdirSync(path.resolve(process.cwd(), ".tmp"));
      } catch (err) {}
    }
    obj = JSON.parse(fileContents);
    obj.unshift(command);
    const objUnique = obj.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
    const objUniqueSlice = objUnique.slice(0, 5);
    fs.writeFile(
      path.resolve(process.cwd(), ".tmp", "script_recent.json"),
      JSON.stringify(objUniqueSlice, null, 2),
      err => {
        if (err) throw err;
      }
    );
  });
  if (allCommandsRun === "") {
    throw "COMMAND NOT FOUND ------ " + commands + " ------";
  } else {
    runSpawn(allCommandsRun);
  }
})();
