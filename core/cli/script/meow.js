const meow = require("meow");
const cli = meow(
  `
    Usage
      $ ethor <input> Start in inquirer mode
 
    Options
      --help, -h
      --version, -v
      --commands, -c  Start in commands mode
 
    Examples
      $ ethor
      $ ethor --commands 'open_docs,run|api|graphql|microservice|typescript_nodejs-apollo-expressjs|run_lint'
`,
  {
    flags: {
      help: {
        type: "boolean",
        alias: "h"
      },
      version: {
        type: "boolean",
        alias: "v"
      },
      inquirer: {
        type: "boolean",
        alias: "i"
      },
      commands: {
        type: "string",
        alias: "c"
      }
    }
  }
);
module.exports = cli;
