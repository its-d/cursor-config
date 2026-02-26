# Commands

This folder contains the full documentation for every command in the Cursor Command Suite. Each file covers what a command does, when to use it, how to use it, and what it produces.

---

## How Commands Work in Cursor

Commands in this suite are triggered by typing a `/` shortcut in Cursor's Composer (Agent mode). Each command is backed by a `.mdc` rule file in `docs/rules/` that tells Cursor exactly how to behave when that command is invoked.

Commands are **not** installed — they are loaded automatically when Cursor reads your `.cursor/rules/` folder.

---

## Setup Instructions

### Step 1 — Copy the rules into your project

Commands only work when their corresponding `.mdc` rule files are in `.cursor/rules/` at the root of your project. Copy them there:

```bash
# From your project root
mkdir -p .cursor/rules

# Copy all rule files from this suite
cp /path/to/cursor-suite/docs/rules/*.mdc .cursor/rules/
```

Or manually copy individual files if you only want specific commands.

### Step 2 — Verify Cursor sees the rules

1. Open Cursor in your project
2. Open **Cursor Settings** → **Rules**
3. You should see your `.cursor/rules/` files listed
4. If they don't appear, restart Cursor

### Step 3 — Switch Composer to Agent mode

Commands require **Agent mode** in Cursor's Composer. Make sure the Composer toggle is set to **Agent**, not **Normal**.

### Step 4 — Run a command

Type the command directly in Composer:

```
/analyze
/onboard
/planner build a user authentication flow
```

Cursor will load the matching `.mdc` rule and follow its instructions.

---

## Adding a New Command

1. Create a new documentation file in `docs/commands/` following the structure of any existing file
2. Create the matching `.mdc` rule file in `docs/rules/` — see `docs/rules/README.md` for structure guidance
3. Copy the new `.mdc` file into `.cursor/rules/` in your project
4. Add the command to the main `README.md` command reference table

---

## Command Index

| Command | Doc | Track |
|---|---|---|
| `/analyze` | [analyze.md](analyze.md) | Audit & Fix |
| `/fix-todo` | [fix-todo.md](fix-todo.md) | Audit & Fix |
| `/todo-security` | [todo-security.md](todo-security.md) | Audit & Fix |
| `/todo-tests` | [todo-tests.md](todo-tests.md) | Audit & Fix |
| `/todo-quality` | [todo-quality.md](todo-quality.md) | Audit & Fix |
| `/todo-improvements` | [todo-improvements.md](todo-improvements.md) | Audit & Fix |
| `/planner` | [planner.md](planner.md) | Feature Development |
| `/executor` | [executor.md](executor.md) | Feature Development |
| `/pr-prep` | [pr-prep.md](pr-prep.md) | Feature Development |
| `/onboard` | [onboard.md](onboard.md) | Onboarding & Understanding |
| `/explain` | [explain.md](explain.md) | Onboarding & Understanding |