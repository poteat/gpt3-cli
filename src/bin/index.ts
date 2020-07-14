#!/usr/bin/env node
import { argv } from "yargs";

import { getCompletion } from "../utility/completion/getCompletion";
import { checkForCredentials } from "../utility/debug/checkForCredentials";

checkForCredentials();

const prompt = argv._[0];

if (typeof prompt !== "string") {
  throw new TypeError("Missing prompt as first CLI parameter");
} else {
  (async () => {
    const completion = await getCompletion(prompt);
    console.log(completion);
  })().catch((error) => {
    throw error;
  });
}
