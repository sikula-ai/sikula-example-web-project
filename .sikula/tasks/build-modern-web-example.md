# Build a Modern Web Example

## Goal

Turn the current minimal Bun, Vite, React, and TypeScript starter into a nice,
simple, modern web example that demonstrates good frontend judgment without
becoming a large application.

The finished app should feel polished and intentional when opened in a browser,
while remaining easy for a developer to understand as a starter project.

Include a small deterministic `Hello, world!` runtime health signal that confirms
the app starts successfully and is visible to the user on the rendered web page.
The exact presentation is not important as long as it does not distract from the
page or require network access.

## Current Behavior

The repository contains a minimal Vite React TypeScript app with a single page
that identifies the stack and explains that the fuller requirements live in this
task file.

## Desired Behavior

The app should render a responsive landing page for a fictional modern web
starter. It should include:

- A visually distinctive hero section with a clear headline and concise body
  copy.
- A small set of feature or principle cards that explain the value of the stack.
- A lightweight call-to-action area suitable for a starter/demo page.
- Styling that looks modern and deliberate on desktop and mobile.
- Accessible semantic markup, including sensible heading order, readable text
  contrast, and useful labels where interactive controls are present.

No specific component split, visual motif, layout pattern, or copy is required.
Choose the simplest implementation that satisfies the goal and remains easy to
review.

Copy examples, CSS class names, component structure, and exact markup order are
not stable contracts unless this task explicitly calls them out as required
behavior.

The page should remain static and self-contained. It must not depend on runtime
network requests, remote assets, analytics, authentication, a backend service, or
environment variables.

## Stack and Tooling Contract

The project should continue to use:

- Bun as the package manager and script runner.
- Vite as the frontend dev server and production bundler.
- React with TypeScript for the UI.

The app should remain small enough that a new developer can inspect the source
quickly. Add structure only when it improves clarity. Avoid introducing a router,
state-management library, UI framework, CSS framework, backend, API client, or
external design system unless there is a clear need within this task.

## Safety and Scope Boundaries

Do not add:

- Live network calls.
- Analytics, tracking, cookies, or telemetry.
- Authentication, account flows, payments, or forms that submit data.
- Secrets, private keys, tokens, or required environment variables.
- Backend services, databases, queues, or serverless functions.
- External font or image requests at runtime.

Any demo interaction should be local-only and deterministic.

## User-Visible Requirements

The final page should communicate that this is a modern frontend starter using
Bun, Vite, React, and TypeScript. Wording does not need to be exact, but it
should be concise, clear, and suitable for a public demo page.

The layout must work well at common mobile and desktop viewport widths. Content
should not overflow horizontally, and interactive targets should be reasonably
sized for touch input if any are added.

## Acceptance Criteria

- The configured Sikula validation pipeline remains green.
- Opening the app through the Vite dev server shows the completed landing page,
  not the placeholder copy from the starter.
- The implementation includes a deterministic `Hello, world!` health signal that
  is visible to the user on the rendered web page and can be verified without
  adding a browser-only test framework.
- The implementation remains static and does not perform runtime network calls.
- The project continues to use Bun, Vite, React, and TypeScript.
