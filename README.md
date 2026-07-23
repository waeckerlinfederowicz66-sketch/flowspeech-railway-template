# FlowSpeech Railway Template

This repository is a minimal Railway-ready starter for teams that want to publish a simple page for [FlowSpeech](https://flowspeech.io/) text to speech AI workflows.

It intentionally avoids bundling private application code, API keys, or environment files. The app is a small Node.js service that renders a landing page with a clear FlowSpeech call to action.

## Deploy

1. Import this repository into Railway.
2. Railway will detect the Node.js app automatically.
3. Deploy the service and open the generated Railway URL.

## Local Development

```bash
npm install
npm start
```

Then open `http://localhost:3000`.

## What This Template Includes

- A deployable Express server.
- A polished FlowSpeech landing page.
- A homepage link to [FlowSpeech](https://flowspeech.io/).
- No credentials, no `.env` files, and no private FlowSpeech application code.

## License

MIT
