import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.type("html").send(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>FlowSpeech Railway Template</title>
    <meta name="description" content="Deploy a minimal FlowSpeech landing page on Railway and connect visitors to FlowSpeech text to speech AI.">
    <style>
      :root {
        color-scheme: light;
        --ink: #121417;
        --muted: #5f6672;
        --line: #dfe4ea;
        --panel: #ffffff;
        --accent: #ee705d;
        --accent-strong: #cf4e3f;
        --bg: #f7f8fa;
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        background: var(--bg);
        color: var(--ink);
      }
      main {
        min-height: 100vh;
        display: grid;
        place-items: center;
        padding: 48px 20px;
      }
      .shell {
        width: min(1040px, 100%);
        display: grid;
        grid-template-columns: 1.05fr 0.95fr;
        gap: 32px;
        align-items: center;
      }
      .hero, .panel {
        background: var(--panel);
        border: 1px solid var(--line);
        border-radius: 8px;
        box-shadow: 0 18px 55px rgba(18, 20, 23, 0.08);
      }
      .hero {
        padding: 48px;
      }
      .eyebrow {
        color: var(--accent-strong);
        font-weight: 700;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0;
      }
      h1 {
        margin: 14px 0 18px;
        font-size: clamp(42px, 7vw, 72px);
        line-height: 0.94;
        letter-spacing: 0;
      }
      p {
        color: var(--muted);
        font-size: 18px;
        line-height: 1.65;
        margin: 0;
      }
      .cta {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 48px;
        margin-top: 28px;
        padding: 0 22px;
        border-radius: 8px;
        background: var(--accent);
        color: #fff;
        font-weight: 800;
        text-decoration: none;
      }
      .panel {
        padding: 28px;
      }
      .wave {
        height: 180px;
        border-radius: 8px;
        border: 1px solid var(--line);
        background:
          radial-gradient(circle at 18% 50%, rgba(238, 112, 93, 0.95), transparent 18%),
          radial-gradient(circle at 45% 50%, rgba(238, 112, 93, 0.65), transparent 22%),
          radial-gradient(circle at 72% 50%, rgba(238, 112, 93, 0.35), transparent 20%),
          linear-gradient(135deg, #17202b, #293443);
      }
      .list {
        display: grid;
        gap: 14px;
        margin-top: 22px;
      }
      .item {
        padding: 16px;
        border: 1px solid var(--line);
        border-radius: 8px;
        background: #fbfcfd;
      }
      .item strong {
        display: block;
        margin-bottom: 4px;
      }
      .item span {
        color: var(--muted);
        line-height: 1.45;
      }
      @media (max-width: 780px) {
        .shell { grid-template-columns: 1fr; }
        .hero { padding: 32px 24px; }
      }
    </style>
  </head>
  <body>
    <main>
      <section class="shell" aria-label="FlowSpeech Railway template">
        <div class="hero">
          <div class="eyebrow">Railway template starter</div>
          <h1>FlowSpeech text to speech AI</h1>
          <p>
            A lightweight deployable page for teams that want a clean starting point for
            FlowSpeech narration, voice workflow documentation, or demo routing on Railway.
          </p>
          <a class="cta" href="https://flowspeech.io/" rel="noopener">Try FlowSpeech</a>
        </div>
        <aside class="panel">
          <div class="wave" role="img" aria-label="Stylized voice waveform"></div>
          <div class="list">
            <div class="item">
              <strong>Fast Railway deploy</strong>
              <span>Uses a minimal Node.js service and Railway's PORT environment variable.</span>
            </div>
            <div class="item">
              <strong>No secrets included</strong>
              <span>The template links users to FlowSpeech without storing API keys or private project files.</span>
            </div>
            <div class="item">
              <strong>Useful for TTS demos</strong>
              <span>Customize the copy, add examples, or connect it to a backend when you are ready.</span>
            </div>
          </div>
        </aside>
      </section>
    </main>
  </body>
</html>`);
});

app.listen(port, () => {
  console.log(`FlowSpeech Railway template listening on ${port}`);
});
