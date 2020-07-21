import { CompletionOptions } from "../types/CompletionOptions";

export const completionKeyTranslations: Record<
  keyof CompletionOptions,
  string
> = {
  engine: "engine",
  maxTokens: "max_tokens",
  temperature: "temperature",
  topProbability: "top_p",
  numChoices: "n",
  logProbabilities: "logprobs",
  stop: "stop",
};
