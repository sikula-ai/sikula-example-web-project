# sikula-example-web-project

This is a small Bun, Vite, React, and TypeScript project used to demonstrate
how Sikula works on a real frontend task.

The app itself is intentionally simple. The important part is the Sikula setup:

- `.sikula/config.yaml` defines the agent scope and validation gates.
- `.sikula/tasks/build-modern-web-example.md` is a self-contained feature request.
- `.sikula/guidelines.md` and `AGENTS.md` give agents project-specific rules.
- `.sikula/state/` records auditable run state after Sikula executes a task.
- `docs/sikula-demo.md` provides a compact reference for the demo workflow.

The intended path is:

```text
task file -> sikula run -> generated branch -> review state -> inspect diff
```

Local Bun commands are useful for quick checks, but the configured Sikula
pipeline is the source of truth for task completion in this demo.

## What This Demonstrates

Sikula turns a product-style task into an implementation workflow with explicit
analysis, planning, code changes, tests, review, security review, and validation.
This repository keeps the codebase small so those phases are easy to inspect.

In one run, Sikula should:

- Read the task, project guidelines, and relevant source files.
- Plan a focused implementation.
- Change only the allowed production files for app code.
- Write or update tests in the configured test surface.
- Run independent review and security review.
- Validate the result with the commands in `.sikula/config.yaml`.
- Commit the accepted result on a generated task branch.

## Get Sikula

Sikula is available from the main GitHub repository:

```text
https://github.com/sikula-ai/sikula
```

Use that repository for installation instructions, releases, and source code.
This example project is designed to be used alongside that repo as a small,
inspectable demonstration of what Sikula does during a normal task run.

## Local Commands

Install dependencies:

```bash
bun install
```

Run local checks:

```bash
bun run typecheck
bun run test
bun run build
```

Run the app during manual inspection:

```bash
bun run dev
```

After a production build, inspect it through Vite's preview server:

```bash
bun run build
bun run preview
```

Do not use a direct `file://` open of `dist/index.html` as the main production
check. Vite emits absolute asset paths by default, so the built app should be
served over HTTP.

## Run the Sikula Demo

From this repository root:

```bash
sikula run .sikula/tasks/build-modern-web-example.md
```

Sikula should create an isolated task branch named like:

```text
sikula/build-modern-web-example-<task-id>
```

That branch should contain the implementation commit after the configured
pipeline has accepted the task.

## Inspect A Run

Check Sikula's summary:

```bash
sikula status
```

Check which branch you are on:

```bash
git branch --show-current
```

Inspect the generated implementation:

```bash
git diff main...HEAD
```

If your default branch is named differently, replace `main` with that branch
name.

Inspect the recorded run state:

```bash
ls .sikula/state
```

Each run writes a JSON file named with its task id. The state file is useful
when you want to audit what Sikula did, including phase outputs, validation
results, reviewer findings, security review results, and final metadata.

For example:

```bash
cat .sikula/state/<task-id>.json
```

The generated branch, git diff, test changes, and state file together show the
main value of the demo: Sikula does not just produce code; it leaves behind an
inspectable record of how the task was analyzed, implemented, reviewed, and
validated.

## Try Another Task

To experiment, add another self-contained task under `.sikula/tasks/` and run:

```bash
sikula run .sikula/tasks/<task-file>.md
```

Good tasks describe user-visible behavior, constraints, out-of-scope boundaries,
and acceptance criteria. They should not need private docs, external URLs, Jira,
Figma, or GitHub issues because Sikula runs from the repository context.

## License

This example project is licensed under the GNU Affero General Public License
v3.0 only. See `LICENSE` for the full license text.
