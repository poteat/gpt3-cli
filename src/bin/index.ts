#!/usr/bin/env node
import { argv } from "yargs";

import { getCompletion } from "../utility/completion/getCompletion";
import { checkForCredentials } from "../utility/debug/checkForCredentials";
import { replaceNewlineEscapes } from "../utility/string/replaceNewlineEscapes";

checkForCredentials();

const prompt = replaceNewlineEscapes(argv._[0]);

if (typeof prompt !== "string") {
  throw new TypeError("Missing prompt as first CLI parameter");
} else {
  (async () => {
    const completion = await getCompletion(prompt);
    console.log(`\n${completion}`);
  })().catch((error) => {
    throw error;
  });
}
