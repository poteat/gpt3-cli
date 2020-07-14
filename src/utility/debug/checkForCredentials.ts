import { openAIConfiguration } from "../../config/openAIConfiguration";

export function checkForCredentials() {
  if (typeof openAIConfiguration.key !== "string") {
    throw new TypeError("Missing OpenAI key credential");
  }

  if (typeof openAIConfiguration.secretKey !== "string") {
    throw new TypeError("Missing OpenAI secret key credential");
  }
}
