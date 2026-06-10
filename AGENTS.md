# AGENTS.md

This repository is a small Bun, Vite, React, and TypeScript project used to
demonstrate Sikula's value on a real frontend task.

## Operating Model

- This repository is intended to be built as a Sikula demo. For feature work,
  prefer writing or refining a self-contained task under `.sikula/tasks/` and
  running `sikula run <task-file>` from the repository root.
- Do not bypass Sikula's review, security review, test-writing, and validation
  pipeline when evaluating whether a task is complete. Local Bun commands are
  useful for quick checks, but `.sikula/config.yaml` defines the acceptance
  gates for this project.
- Treat `.sikula/tasks/*.md` as product specifications for Sikula's
  analyst/planner/reviewer pipeline, not as hand-written implementation plans.
- Keep tasks self-contained. Sikula can read committed files in this repository,
  but it cannot fetch Jira, Figma, GitHub issues, private docs, or web URLs.
- In normal isolated `sikula run` mode, the worktree starts from `HEAD`.
  Commit task-relevant docs, fixtures, screenshots, or specs before running
  Sikula.
- The configured Sikula validation pipeline is the source of truth for this
  project. Do not duplicate validation commands in every task unless a task has
  an extra command-specific acceptance criterion.

## Project Scope

- Production app code belongs in `src/`.
- Tests belong in `tests/`.
- `.sikula/config.yaml`, `.sikula/guidelines.md`, this file, and
  `docs/sikula-demo.md` define the Sikula demo contract.
- `dist/`, `node_modules/`, `.sikula/state/`, and `.sikula/worktrees/` are
  generated or local runtime outputs. Do not use them as source material for new
  implementation decisions.

## Implementation Rules

- Preserve the stack: Bun, Vite, React, and TypeScript.
- Keep the app static and self-contained. Do not add runtime network requests,
  analytics, tracking, cookies, authentication, backend services, secrets, or
  required environment variables.
- Do not add dependencies, package scripts, routers, state-management libraries,
  UI frameworks, CSS frameworks, or external design systems unless a task
  explicitly requires that change.
- Prefer simple React function components, plain TypeScript data structures, and
  `src/styles.css` for styling.
- Preserve accessible semantic markup, readable contrast, responsive layout, and
  mobile-safe spacing.

## Sikula Task Writing

Good Sikula tasks should include:

- The user-visible goal.
- Current behavior and desired behavior.
- Business, UI, safety, compatibility, and data-contract requirements the
  codebase cannot infer.
- Exact user-visible copy only when wording is a requirement.
- Explicit out-of-scope boundaries.
- Acceptance criteria that describe observable behavior.

Avoid over-specifying:

- Exact files, component names, helper names, or implementation steps unless
  they are stable public contracts.
- Test-file edits just to remind Sikula to write tests; Sikula's TestWriterAgent
  owns test updates when enabled.
- Validation commands already covered by `.sikula/config.yaml`.
