# GPT3 CLI API

A simple NodeJS wrapper library and CLI to interface with OpenAI's Beta API. Written in Typescript.

## Requirements

When using the CLI, the API key and secret key must be defined in your environment under `OPENAI_KEY` and `OPENAI_SECRET_KEY` respectively.

When using this package as a library, you may either provide the keys in the environment as above, or provide them as a final `auth` parameter.

## Installation

If CLI:

```sh
npm i -g gpt3
```

If programmatic:

```
npm i gpt3
```

## CLI Usage

You pass in the starter text as the first parameter, and the tool returns the completion.

```
> gpt3 "Once upon a time, there was a thing..."

"Once upon a time, there was a thing that did this, etc, foobar."
```

## Programmatic Usage

```ts
import { getCompletion } from "gpt3";

const result = await getCompletion("Once upon a time, ");

// etc.
```

## Limitations and Future Work

Features not supported, but which I eventually plan to:
* Streaming
* Simple filtering, optional clean-up logic
* Automatic truth checking
* Search API
* Fine-tuning API (Once it comes out)
* Pre-selected prompt generation logic