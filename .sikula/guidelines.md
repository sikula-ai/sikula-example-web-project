# Development Guidelines

## Project Shape

- This is a small static Web demo built with Bun, Vite, React, and TypeScript.
- Keep the app inspectable as a starter project. Prefer simple components and plain CSS over framework or dependency additions.
- Runtime code belongs in `src/`. Tests belong in `tests/`.
- The page is static and self-contained. Do not add runtime network requests, remote fonts, remote images, analytics, cookies, authentication, backend services, or required environment variables.
- Treat `dist/`, `node_modules/`, `.sikula/state/`, and `.sikula/worktrees/` as generated/local outputs, not source-of-truth implementation context.
- Do not add or change dependencies, package scripts, build tooling, or config files unless the task explicitly asks for that.

## React and TypeScript

- Use function components and explicit, readable data structures when repeated UI content is needed.
- Keep user-visible copy concise and suitable for a public demo page.
- Preserve semantic HTML: one main landmark, sensible heading order, descriptive section labels, and accessible link/button text.
- Avoid `dangerouslySetInnerHTML` and direct DOM mutation unless a task explicitly requires it and the safety case is clear.
- Keep component logic deterministic and renderable in a server-side test environment.

## Styling

- Use `src/styles.css` for global styles in this starter.
- Keep layouts responsive without horizontal overflow at common mobile and desktop viewport widths.
- Use durable CSS constraints such as `minmax()`, `clamp()`, `max-width`, and flexible grid/flex layouts.
- Maintain readable color contrast and visible focus states for interactive elements.
- Do not rely on external visual assets for the runtime page.
- Keep visual structure restrained and inspectable. Avoid decorative radial/orb backgrounds, bokeh blobs, excessive nested cards, and purely ornamental effects that do not help the demo communicate the stack.
- Keep cards compact with border radius no larger than `8px` unless a task explicitly asks for a different visual direction.
- Do not use negative letter spacing. Use normal spacing and font weight/size for hierarchy.
- Prefer stable dimensions and spacing that cannot shift when text wraps.

## Testing

- Use `bun:test` and server-side rendering via `react-dom/server` for lightweight component assertions.
- Tests should verify durable behavior and public copy, not fragile implementation details.
- Add tests when UI requirements introduce stable labels, content, or semantic structure.
- If a task adds browser-only behavior such as console logging, keep it small and isolated so it can be verified without adding a browser test framework.
- Do not assert CSS class names, exact markup order, exact marketing copy, or implementation-only text unless the task explicitly defines them as stable contracts.
- Tests should assert durable user-observable contracts. Avoid raw rendered-HTML string assertions for prose copy unless the exact text or markup is explicitly part of the task contract. Prefer normalized text checks, short stable labels, roles/landmarks available in the current test surface, or narrower assertions around explicit requirements such as `Hello, world!`.
- Prefer assertions for user-observable outcomes: stack is identified, placeholder copy is gone, the health signal exists, local-only navigation remains local, and static/no-network constraints are preserved within the available test surface.
- When repeated content is required, test the required count or role only if the task makes that count or role part of the acceptance contract.

## Validation

- `.sikula/config.yaml` is the source of truth for install, typecheck, test, and
  production-build validation.
- Task files should normally say the configured Sikula validation pipeline must
  remain green instead of repeating command names.
- Do not add new scripts, dependencies, or generated tracked files unless the task explicitly requires them.
