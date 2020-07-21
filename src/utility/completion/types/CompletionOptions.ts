export type CompletionOptions = {
  engine: string;
  maxTokens: number;
  temperature: number;
  topProbability: number;
  numChoices: number;
  logProbabilities: number;
  stop: string | string[];
};
