const { appendObjTo } = require("./_helpers");
let choices = [
  {
    name: "Development",
    value:
      "run|api|graphql|microservice|typescript_nodejs-apollo-expressjs|run_development",
    run:
      "cd {project}/api/graphql/microservice/gateway/typescript_nodejs-apollo-expressjs && npm run dev"
  }
];

if (!process.env._ETHOR) {
  choices = appendObjTo(choices, [
    {
      name: "Build",
      value:
        "run|api|graphql|microservice|typescript_nodejs-apollo-expressjs|run_build",
      run:
        "cd {project}/api/graphql/microservice/gateway/typescript_nodejs-apollo-expressjs && npm run build"
    },
    {
      name: "Start",
      value:
        "run|api|graphql|microservice|typescript_nodejs-apollo-expressjs|run_start",
      run:
        "cd {project}/api/graphql/microservice/gateway/typescript_nodejs-apollo-expressjs && npm run start"
    },
    {
      name: "Test",
      value:
        "run|api|graphql|microservice|typescript_nodejs-apollo-expressjs|run_test",
      run:
        "cd {project}/api/graphql/microservice/gateway/typescript_nodejs-apollo-expressjs && npm run test"
    },
    {
      name: "Install dependencies (all)",
      value:
        "run|api|graphql|microservice|typescript_nodejs-apollo-expressjs|run_install_dependencies_all",
      run:
        "cd {project}/api/graphql/microservice/gateway/typescript_nodejs-apollo-expressjs && npm run install_all"
    },
    {
      name: "Install dependencies (dev)",
      value:
        "run|api|graphql|microservice|typescript_nodejs-apollo-expressjs|run_install_dependencies_dev",
      run:
        "cd {project}/api/graphql/microservice/gateway/typescript_nodejs-apollo-expressjs && npm run install_dev"
    },
    {
      name: "Install dependencies (prod)",
      value:
        "run|api|graphql|microservice|typescript_nodejs-apollo-expressjs|run_install_dependencies_prod",
      run:
        "cd {project}/api/graphql/microservice/gateway/typescript_nodejs-apollo-expressjs && npm run install_prod"
    },
    {
      name: "Clean cache",
      value:
        "run|api|graphql|microservice|typescript_nodejs-apollo-expressjs|run_clean_cache",
      run:
        "cd {project}/api/graphql/microservice/gateway/typescript_nodejs-apollo-expressjs && npm run clean_cache"
    },
    {
      name: "Lint",
      value:
        "run|api|graphql|microservice|typescript_nodejs-apollo-expressjs|run_lint",
      run:
        "cd {project}/api/graphql/microservice/gateway/typescript_nodejs-apollo-expressjs && npm run lint"
    }
  ]);
}
module.exports = choices;
