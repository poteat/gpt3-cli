import axios from "axios";

import { openAIConfiguration } from "../../config/openAIConfiguration";
import { CompletionResult } from "../../types/CompletionResult";
import { removeLastSentence } from "../string/removeLastSentence";

export async function getCompletion(prompt: string) {
  const completionResult = (
    await axios.post(
      openAIConfiguration.engineCompletionEndpoint,
      {
        prompt,
        max_tokens: 100,
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
