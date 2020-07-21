#!/usr/bin/env node
import { argv } from "yargs";

import { getCompletion } from "../utility/completion/getCompletion";
import { checkForCredentials } from "../utility/debug/checkForCredentials";
import { removeLastSentence } from "../utility/string/removeLastSentence";
import { replaceNewlineEscapes } from "../utility/string/replaceNewlineEscapes";

checkForCredentials();

const prompt = replaceNewlineEscapes(argv._[0]);

if (typeof prompt !== "string") {
  throw new TypeError("Missing prompt as first CLI parameter");
} else {
  (async () => {
    const completion = await getCompletion(prompt);
    const cleaned = removeLastSentence(prompt + completion);

    console.log(`\n${cleaned}`);
  })().catch((error) => {
    throw error;
  });
}
