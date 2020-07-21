import axios from "axios";
import mapKeys from "lodash/mapKeys";

import { openAIConfiguration } from "../../config/openAIConfiguration";
import { CompletionResult } from "../../types/CompletionResult";
import { removeLastSentence } from "../string/removeLastSentence";
import { completionKeyTranslations } from "./literals/completionKeyTranslations";
import { CompletionOptions } from "./types/CompletionOptions";

export async function getCompletion(
  prompt: string,
  options: Partial<CompletionOptions> = {}
) {
  const translatedOptions = mapKeys(
    options,
    (_x, key) => completionKeyTranslations[key as keyof CompletionOptions]
  );

  const completionResult = (
    await axios.post(
      openAIConfiguration.engineCompletionEndpoint,
      {
        prompt,
        ...translatedOptions,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openAIConfiguration.secretKey}`,
        },
      }
    )
  ).data as CompletionResult;

  return removeLastSentence(prompt + completionResult.choices[0].text);
}
