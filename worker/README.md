# Ship It Compiler backend

The frontend is `stages/compiler.html`. It calls a small Cloudflare Worker so Judge0 credentials (if your instance needs them) are never exposed in GitHub Pages JavaScript.

## Deploy

1. Create a Cloudflare account and open **Workers & Pages**.
2. Create a Worker named `ship-it-compiler`.
3. Paste the complete contents of `worker/compiler-worker.js` into the Worker editor and deploy.
4. In Worker settings, optionally set:
   - `JUDGE0_URL`: defaults to `https://ce.judge0.com`.
   - `JUDGE0_AUTH_TOKEN`: only if your Judge0 instance requires it; store as a Secret, never as a plain frontend variable.
   - `ALLOWED_ORIGIN`: defaults to `https://jayeshkandoi.github.io`.
5. Copy the Worker URL (for example `https://ship-it-compiler.<your-subdomain>.workers.dev`).
6. Open Ship It → Compiler, paste the Worker URL, and click **Save backend URL**.

## Supported languages

Judge0 language IDs: C 50, C++ 54, Java 62, JavaScript (Node.js) 63, Python 3 71.

The Worker validates language IDs and request sizes, restricts browser origins, and polls asynchronous Judge0 submissions. Public Judge0 availability, quotas, and runtime policies are controlled by the chosen Judge0 host. For a production public site, use a dedicated Judge0 instance and add rate limiting/abuse monitoring.

## Test

Use the starter code in each language. For stdin, enter input in the Input panel. Press **Ctrl/Cmd + Enter** to run.
