const inquirer = require("inquirer");

const choices = require("./choices");

module.exports = async () => {
  const choicesFirst = require("./inquirerFirst");
  return inquirer.prompt([
    {
      type: "list",
      name: "selectType",
      message: "What would you like to do?",
      choices: choicesFirst
    },
    /* start_RUN */
    {
      type: "list",
      name: "selectType",
      message: "Select app type",
      choices: [{ name: "Api", value: "api" }],
      when: answers => answers.selectType === "run"
    },
    /* start_API_TYPE */
    {
      type: "list",
      name: "selectType",
      message: "Select api type",
      choices: [
        { name: "Graphql", value: "graphql" },
        { name: "Rest", value: "rest" }
      ],
      when: answers => answers.selectType === "api"
    },
    /* start_GRAPHQL */
    {
      type: "list",
      name: "selectType",
      message: "Select graphql architecture",
      choices: [
        { name: "Microservice", value: "microservice" },
        { name: "Monolithic", value: "monolithic" }
      ],
      when: answers => answers.selectType === "graphql"
    },
    /* start_GRAPHQL_MICROSERVICE */
    {
      type: "list",
      name: "selectType",
      message: "Select",
      choices: [
        { name: "Gateway", value: "graphql_gateway" },
        { name: "Services", value: "graphql_services" }
      ],
      when: answers => answers.selectType === "microservice"
    },
    /* start_GRAPHQL_GATEWAY */
    {
      type: "list",
      name: "selectType",
      message: "Select gateway template",
      choices: [
        {
          name: "typescript_nodejs-apollo-expressjs",
          value: "typescript_nodejs-apollo-expressjs"
        }
      ],
      when: answers => answers.selectType === "graphql_gateway"
    },
    /* run|api|graphql|microservice|typescript_nodejs-apollo-expressjs */
    {
      type: "list",
      name: "selectType",
      message: "What would you like to do?",
      choices:
        choices[
          "run|api|graphql|microservice|typescript_nodejs-apollo-expressjs"
        ],
      when: answers =>
        answers.selectType === "typescript_nodejs-apollo-expressjs"
    }
    /* end_run|api|graphql|microservice|typescript_nodejs-apollo-expressjs */
    /* end_GPAPHQL_GATEWAY */
    /* end_GRAPHQL_MICROSERVICE */
    /* end_GRAPHQL */
    /* end_API_TYPE */
    /* end_RUN */
  ]);
};
