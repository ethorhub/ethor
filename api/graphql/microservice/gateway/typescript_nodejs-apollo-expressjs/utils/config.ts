/* eslint-disable @typescript-eslint/no-explicit-any */
import { parse } from "dotenv";

import { resolve } from "path";
import { readFileSync } from "fs";

const Config = {
  reagentEnvs: "../../../../..",
  reagentBuild: process.env.NODE_ENV === "production" ? "build" : ""
};
(Config as any).env = parse(
  readFileSync(
    resolve(process.cwd(), (Config as any).reagentEnvs, "public.env")
  )
);

export default Config;
