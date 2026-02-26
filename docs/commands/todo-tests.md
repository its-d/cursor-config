# /todo-tests

**Track:** Audit & Fix
**Output:** Updates `repo-breakdown.md` (checks off completed test items)
**Requires:** `repo-breakdown.md` at project root (run `/analyze` first)

---

## What It Does

Works through only the 🧪 Tests items in the Section 6 Todo Checklist of `repo-breakdown.md`, one at a time, in order: MISSING coverage first, then PARTIAL coverage. All other categories are left completely untouched. Each completed item is checked off in `repo-breakdown.md`.

---

## When To Use It

- When a PR review flagged missing or insufficient test coverage
- After shipping a feature quickly and now catching up on tests
- When onboarding to a codebase and want to understand it better by writing tests for it
- When you want a dedicated test pass without touching security or code quality

---

## How To Use It

1. Make sure `repo-breakdown.md` exists at the project root
2. In Cursor, run:
   ```
   /todo-tests
   ```
3. The command will count all unchecked test items and report them before starting
4. Confirm to begin — it will not touch any file until you say yes

---

## Execution Order

Always processes in this order:

1. MISSING — files and functions with no tests at all
2. PARTIAL — functions that only cover the happy path with no edge cases or failure states

---

## Test File Placement

All test files are placed in a single `/tests` folder at the project root, mirroring the source file structure. For example, `src/utils/parser.ts` gets a test at `tests/utils/parser.test.ts`. This rule has no exceptions.

---

## Item States

| Symbol | Meaning |
|---|---|
| `- [ ]` | Unchecked — not yet addressed |
| `- [x] ✅` | Completed successfully |
| `- [~] ❌ BLOCKED` | Could not be completed — includes explanation and manual steps |
| `- [-] ⏭ SKIPPED` | Skipped at user request |

---

## Hard Rules

- Never works on more than one item at a time
- Never touches Security, Code Quality, or Improvements items
- Never introduces a new testing framework — uses whatever is already in the project
- Never modifies production code unless a failing test reveals a genuine bug
- If a bug is found while writing tests, stops and reports it before continuing

---

## What Comes Next

- Run `/todo-security` if security items haven't been addressed yet
- Run `/todo-quality` to clean up code quality issues
- Run `/fix-todo` to work through all remaining categories in one pass
- Run `/analyze` again to verify test coverage has improved