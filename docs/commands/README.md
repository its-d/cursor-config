# Commands

This folder contains the full documentation for every command in the Cursor Command Suite. Each file covers what a command does, when to use it, how to use it, and what it produces.

---

## How Commands Work in Cursor

These are **named workflows, not registered slash commands.** Cursor does not automatically register `/analyze` or any other name as a shortcut — there is no slash command system that activates them.

What actually happens:

1. You copy the `.mdc` rule files into `.cursor/rules/` in your project
2. Cursor reads those files and makes their instructions available as context to the AI
3. You invoke a workflow by **describing what you want in Composer** — the rule file provides the AI with precise instructions on how to behave

The `/name` convention used throughout this suite (e.g. `/analyze`, `/planner`) is just a **naming shorthand** for referring to each workflow — not a command you type to trigger it.

---

## How To Invoke a Workflow

There are two reliable ways to run a workflow in Cursor Composer (Agent mode):

### Option 1 — Reference the rule by name with @

```
@analyze
@planner build a user authentication flow
@executor implement task 1
```

Using `@rulename` directly tells Cursor to load that specific rule file as context for the request.

### Option 2 — Describe the intent in plain English

```
Analyze this codebase and produce a repo-breakdown.md
Create an implementation plan for adding user authentication
Onboard me to this project
```

Cursor will pick up the matching rule based on its `description` field and apply its instructions.

Both approaches work. Option 1 is more explicit and reliable. Option 2 is more natural but depends on Cursor matching your intent to the right rule.

---

## Setup Instructions

### Step 1 — Copy the rules into your project

Workflows only work when their corresponding `.mdc` rule files are in `.cursor/rules/` at the root of your project:

```bash
mkdir -p .cursor/rules
cp /path/to/cursor-suite/docs/rules/*.mdc .cursor/rules/
```

Or copy only the rules for the workflows you want:

```bash
# Example: just the feature development track
cp /path/to/cursor-suite/docs/rules/planner.mdc .cursor/rules/
cp /path/to/cursor-suite/docs/rules/executor.mdc .cursor/rules/
cp /path/to/cursor-suite/docs/rules/pr-prep.mdc .cursor/rules/
```

### Step 2 — Verify Cursor sees the rules

1. Open Cursor in your project
2. Open **Cursor Settings** → **Rules**
3. Your `.cursor/rules/` files should be listed
4. If they don't appear, restart Cursor

### Step 3 — Switch Composer to Agent mode

Rules are applied in **Composer with Agent mode**. The Composer toggle must be set to **Agent**, not **Normal** — rules will not apply in Normal mode.

### Step 4 — Invoke a workflow

Use `@rulename` or describe the intent in plain English. Examples:

```
@analyze
@onboard
@planner build a user authentication flow
```

Or:

```
Analyze this codebase and produce a repo-breakdown.md
Generate an onboarding guide for this project
```

---

## Adding a New Workflow

1. Create a new documentation file in `docs/commands/` following the structure of any existing file
2. Create the matching `.mdc` rule file in `docs/rules/` — see `docs/rules/README.md` for structure guidance
3. Copy the new `.mdc` file into `.cursor/rules/` in your project
4. Add it to the main `README.md` command reference table

---

## Workflow Index

| Name | Doc | Track |
|---|---|---|
| `analyze` | [analyze.md](analyze.md) | Audit & Fix |
| `fix-todo` | [fix-todo.md](fix-todo.md) | Audit & Fix |
| `todo-security` | [todo-security.md](todo-security.md) | Audit & Fix |
| `todo-tests` | [todo-tests.md](todo-tests.md) | Audit & Fix |
| `todo-quality` | [todo-quality.md](todo-quality.md) | Audit & Fix |
| `todo-improvements` | [todo-improvements.md](todo-improvements.md) | Audit & Fix |
| `planner` | [planner.md](planner.md) | Feature Development |
| `executor` | [executor.md](executor.md) | Feature Development |
| `pr-prep` | [pr-prep.md](pr-prep.md) | Feature Development |
| `onboard` | [onboard.md](onboard.md) | Onboarding & Understanding |
| `explain` | [explain.md](explain.md) | Onboarding & Understanding |
