# GPT3 CLI API

A simple CLI tool to interface with OpenAI's beta API.

## Requirements

Your API key and secret key must be defined in your environment under `OPENAI_KEY` and `OPENAI_SECRET_KEY` respectively.

## Installation

```sh
npm i -g gpt3
```

## Usage

You pass in the starter text as the first parameter, and the tool returns the completion.

```
> gpt3 "Once upon a time, there was a thing..."

"Once upon a time, there was a thing that did this, etc, foobar."
```