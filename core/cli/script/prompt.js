const enquirer = require("enquirer");

const choices = require("./choices");

module.exports = async () => {
  const choicesFirst = require("./promptFirst");
  // return enquirer.prompt([
  const prompts = [
    {
      type: "autocomplete",
      name: "selectType",
      message: "What would you like to do?",
      choices: choicesFirst,
      when: () => true
    },
    /* start_RUN */
    {
      type: "autocomplete",
      name: "selectType",
      message: "Select app type",
      choices: [{ name: "Api", value: "api" }],
      when: answers => answers.selectType === "run"
    },
    /* start_API_TYPE */
    {
      type: "autocomplete",
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
      type: "autocomplete",
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
      type: "autocomplete",
      name: "selectType",
      message: "Select",
      choices: [
        { name: "Gateway", value: "graphql_gateway" },
        { name: "Services", value: "graphql_gateway_services" }
      ],
      when: answers => answers.selectType === "microservice"
    },
    /* start_GRAPHQL_GATEWAY */
    {
      type: "autocomplete",
      name: "selectType",
      message: "Select gateway template",
      choices: [
        {
          name: "typescript_nodejs-apollo-expressjs",
          value:
            "api|graphql|microservice|gateway|typescript_nodejs-apollo-expressjs"
        }
      ],
      when: answers => answers.selectType === "graphql_gateway"
    },
    /* api|graphql|microservice|gateway|typescript_nodejs-apollo-expressjs */
    {
      type: "autocomplete",
      name: "selectType",
      message: "What would you like to do?",
      choices:
        choices[
          "api|graphql|microservice|gateway|typescript_nodejs-apollo-expressjs"
        ],
      when: answers =>
        answers.selectType ===
        "api|graphql|microservice|gateway|typescript_nodejs-apollo-expressjs"
    },
    /* end_api|graphql|microservice|gateway|typescript_nodejs-apollo-expressjs */
    /* end_GPAPHQL_GATEWAY */
    /* start_GRAPHQL_GATEWAY_SERVICES */
    {
      type: "autocomplete",
      name: "selectType",
      message: "Select services template",
      choices: [
        {
          name: "typescript_nodejs-apollo-expressjs",
          value:
            "api|graphql|microservice|services|typescript_nodejs-apollo-expressjs"
        }
      ],
      when: answers => answers.selectType === "graphql_gateway_services"
    },
    /* api|graphql|microservice|services|typescript_nodejs-apollo-expressjs */
    {
      type: "autocomplete",
      name: "selectType",
      message: "What would you like to do?",
      choices:
        choices[
          "api|graphql|microservice|services|typescript_nodejs-apollo-expressjs"
        ],
      when: answers =>
        answers.selectType ===
        "api|graphql|microservice|services|typescript_nodejs-apollo-expressjs"
    }
    /* end_api|graphql|microservice|services|typescript_nodejs-apollo-expressjs */
    /* end_GPAPHQL_GATEWAY */
    /* end_GRAPHQL_MICROSERVICE */
    /* end_GRAPHQL */
    /* end_API_TYPE */
    /* end_RUN */
  ];
  const promptFunc = prompt => {
    return enquirer.prompt(prompt).then(thisPrompt => {
      var endPrompt = true;
      prompts.map((prompt, i) => {
        if (prompt.when(thisPrompt) && i !== 0) endPrompt = i;
      });
      if (endPrompt !== true) {
        return promptFunc(prompts[endPrompt]);
      } else {
        return thisPrompt;
      }
    });
  };

  return promptFunc(prompts[0]);
};
