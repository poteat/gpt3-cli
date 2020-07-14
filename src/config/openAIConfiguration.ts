export const openAIConfiguration = {
  engineCompletionEndpoint:
    "https://api.openai.com/v1/engines/davinci/completions",
  key: process.env.OPENAI_KEY,
  secretKey: process.env.OPENAI_SECRET_KEY,
};
