import moduleAlias from "module-alias";

import { config } from "dotenv";
import { resolve } from "path";

import Config from "./config";

moduleAlias.addAliases({
  "@@config": `${`${process.cwd()}/${Config.reagentBuild}`}/utils/config`
});

const envs = [
  {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(config as any)({
      debug: process.env.DEBUG,
      path: resolve(process.cwd(), Config.reagentEnvs, ".env")
    }),
    cfName: "secret"
  },
  {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(config as any)({
      debug: process.env.DEBUG,
      path: resolve(process.cwd(), Config.reagentEnvs, "public.env")
    }),
    cfName: "public"
  }
];
envs.map(env => {
  if (env.error) {
    // eslint-disable-next-line no-console
    console.error(env.error, `load:envs_${env.cfName}`);
  }
  return env;
});
