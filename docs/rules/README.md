# Rules

Rules are `.mdc` files that define the actual prompt instructions making each command behave correctly and consistently. Without rules, commands are just documentation — rules are what enforce the behavior inside Cursor.

All rule files live here in `docs/rules/`. To activate them in a project, they must be copied into `.cursor/rules/` at the root of that project.

---

## How Rules Work

Cursor reads `.mdc` files in `.cursor/rules/` and makes them available as persistent context during AI interactions. Each rule file is scoped to a specific command via its `description` field and an `alwaysApply: false` flag — meaning Cursor only loads a rule when the relevant command is invoked, not on every interaction.

Rules complement the command docs in `docs/commands/` — the docs describe intended behavior, the rules enforce it.

---

## Setup Instructions

### Step 1 — Create the rules folder in your project

```bash
mkdir -p .cursor/rules
```

### Step 2 — Copy rule files into your project

Copy all rules at once:

```bash
cp /path/to/cursor-suite/docs/rules/*.mdc .cursor/rules/
```

Or copy only the rules for the commands you want:

```bash
# Example: just the feature development track
cp /path/to/cursor-suite/docs/rules/planner.mdc .cursor/rules/
cp /path/to/cursor-suite/docs/rules/executor.mdc .cursor/rules/
cp /path/to/cursor-suite/docs/rules/pr-prep.mdc .cursor/rules/
```

### Step 3 — Verify Cursor sees the rules

1. Open Cursor in your project
2. Open **Cursor Settings** → **Rules**
3. Your `.cursor/rules/` files should be listed there
4. If they don't appear, restart Cursor

### Step 4 — Use Agent mode

Rules are applied in **Composer with Agent mode**. Make sure the Composer is set to Agent before running commands. Rules will not apply in Normal mode.

---

## Adding a New Rule

1. Create a new `.mdc` file in `docs/rules/` using the structure below
2. Write the rule instructions (see the Writing Rules section)
3. Copy the file to `.cursor/rules/` in your project
4. Create a matching doc in `docs/commands/` describing the command's intended behavior
5. Add the rule to the status table at the bottom of this file

---

## Writing Rules

Every `.mdc` file must start with a frontmatter block:

```
---
description: One sentence describing when and why this rule applies
alwaysApply: false
---
```

`alwaysApply: false` means Cursor loads this rule on demand, not for every interaction. Always use this unless you want the rule applied to the entire session.

### Rule Structure

A well-written rule contains these sections in order:

```
## Role
One paragraph. Who is the AI in this context? What is its job? What is its mindset?

## Absolute Rules
Hard constraints. NEVER / ALWAYS. These must be unambiguous and enforceable.
- NEVER modify files outside the scope of this command
- NEVER run git commands
- NEVER install dependencies without explicit user confirmation

## Permitted Actions
What the AI is explicitly allowed to do. Be specific.
- Read any file in the codebase
- Search the codebase and CLI (read-only: cd, ls, find, grep, cat)
- Search the internet for documentation and references
- Edit source files as required by the current task

## Pre-Flight
Steps the AI must complete before touching anything. Usually: verify required files exist,
read them fully, report to the user, wait for confirmation.

## Core Behavior
Step-by-step instructions for the main task. Be as specific as possible — the more precise
the rule, the less the AI improvises.

## Output / Checkbox States (if applicable)
Exact format for any output files or checkbox updates.

## After Completing
Exact message the AI should send to the user when done.
```

### Writing Principles

- **Absolute rules** use NEVER or ALWAYS — no gray areas
- **Permitted actions** define the sandbox explicitly — anything not listed is implicitly off-limits
- **Step-by-step beats prose** — numbered steps are harder for the AI to skip than paragraphs
- **Explicit scope isolation** — if a rule must not touch certain files or categories, say it directly
- **One task at a time** — every rule should enforce completion and verification before moving to the next item
- **Reference specific file paths and formats** — vague instructions produce vague behavior

---

## Rule Files

```
docs/rules/
├── analyze.mdc
├── fix-todo.mdc
├── todo-security.mdc
├── todo-tests.mdc
├── todo-quality.mdc
├── todo-improvements.mdc
├── planner.mdc
├── executor.mdc
├── pr-prep.mdc
├── onboard.mdc
└── explain.mdc
```

---

## Status

| Rule | Status | Command Doc |
|---|---|---|
| `analyze.mdc` | ✅ Written | [analyze.md](../commands/analyze.md) |
| `fix-todo.mdc` | ✅ Written | [fix-todo.md](../commands/fix-todo.md) |
| `todo-security.mdc` | ✅ Written | [todo-security.md](../commands/todo-security.md) |
| `todo-tests.mdc` | ✅ Written | [todo-tests.md](../commands/todo-tests.md) |
| `todo-quality.mdc` | ✅ Written | [todo-quality.md](../commands/todo-quality.md) |
| `todo-improvements.mdc` | ✅ Written | [todo-improvements.md](../commands/todo-improvements.md) |
| `planner.mdc` | ✅ Written | [planner.md](../commands/planner.md) |
| `executor.mdc` | ✅ Written | [executor.md](../commands/executor.md) |
| `pr-prep.mdc` | ✅ Written | [pr-prep.md](../commands/pr-prep.md) |
| `onboard.mdc` | ✅ Written | [onboard.md](../commands/onboard.md) |
| `explain.mdc` | ✅ Written | [explain.md](../commands/explain.md) |