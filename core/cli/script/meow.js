const meow = require("meow");
const cli = meow(
  `
    Usage
      $ ethor <input> Start in prompt mode
 
    Options
      --help, -h
      --version, -v
      --commands, -c  Start in commands mode
 
    Examples
      $ ethor
      $ ethor --commands 'open_docs,api|graphql|microservice|gateway|typescript_nodejs-apollo-expressjs|run_lint'
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
      commands: {
        type: "string",
        alias: "c"
      }
    }
  }
);
module.exports = cli;
