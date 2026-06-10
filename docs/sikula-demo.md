# Sikula Demo Workflow

This project is intentionally small so the value of Sikula is visible without a large codebase.
Start with the [project README](../README.md) for the public overview,
installation link, and full walkthrough.

## What Sikula Demonstrates Here

- Analyst reads the repo and turns the task into implementation guidance.
- Planner keeps the work focused or splits it into ordered steps if needed.
- Implementer changes only `src/` production files.
- Reviewer checks completeness, semantic correctness, and scope drift independently from the implementer.
- Security reviewer checks that the static page did not gain network calls, telemetry, secrets, unsafe HTML, or unnecessary dependency risk.
- Test writer updates only `tests/`.
- Build/fix loop runs typecheck, tests, and production bundle validation before the branch is accepted.

## Primary Task

This repository is designed to demonstrate Sikula as the build and review
orchestrator. Agents should treat `.sikula/config.yaml` as the validation
contract and should use `sikula run` for feature execution instead of treating
manual local commands as sufficient acceptance.

Run:

```bash
sikula run .sikula/tasks/build-modern-web-example.md
```

Expected output is a normal git branch named like `sikula/build-modern-web-example-<task-id>` with a committed implementation. Sikula records that branch in the run state; it does not need to switch your current checkout automatically.

## What To Inspect After A Run

```bash
sikula status
git branch --show-current
git branch --list 'sikula/build-modern-web-example-*'
git diff main...sikula/build-modern-web-example-<task-id>
```

Also inspect `.sikula/state/` for the recorded task state. It contains the phase outputs, validation results, review/security findings, and final metadata that make the run auditable.

## Config Choices

- `allowed_write_paths` is limited to `src/` so production changes stay focused.
- `allowed_test_write_paths` is limited to `tests/` so generated tests are separated from app code.
- `run_review`, `run_security_review`, `run_test_writing`, `run_tests`, and `run_checks` are enabled to show the full quality pipeline.
- `.sikula/config.yaml` owns the concrete sync, typecheck, test, and production-build commands so task files stay focused on product behavior.
