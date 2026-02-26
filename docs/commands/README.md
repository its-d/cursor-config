# Commands

This folder contains the full documentation for every workflow in the Cursor Command Suite. Each file covers what it does, when to use it, how to use it, and what it produces.

---

## How Commands Actually Work in Cursor

Cursor has a real slash command system introduced in v1.6. Commands are **plain `.md` files stored in `.cursor/commands/`** at the root of your project. When you type `/` in Cursor's chat input, the IDE scans that folder and lists every file as a selectable command — the filename becomes the command name.

This is separate from `.cursor/rules/*.mdc` files, which are persistent context rules. Both work together in this suite:

- **`.cursor/commands/*.md`** → the actual slash commands you invoke by typing `/`
- **`.cursor/rules/*.mdc`** → detailed behavior rules that reinforce how each command should act

---

## Setup Instructions

### Step 1 — Copy the commands into your project

```bash
mkdir -p .cursor/commands
cp /path/to/cursor-config/.cursor/commands/*.md .cursor/commands/
```

This is what registers the actual slash commands. Without this step, nothing appears when you type `/`.

### Step 2 — Copy the rules into your project (recommended)

```bash
mkdir -p .cursor/rules
cp /path/to/cursor-config/docs/rules/*.mdc .cursor/rules/
```

Rules aren't required for commands to appear, but they significantly improve how reliably Cursor follows the intended behavior for each command.

### Step 3 — Verify both are visible in Cursor

1. Open Cursor in your project
2. Open **Cursor Settings** → **Rules** — your `.mdc` files should be listed
3. Type `/` in Composer — your commands should appear in the dropdown
4. If nothing appears, restart Cursor

### Step 4 — Switch Composer to Agent mode

Commands work best in **Agent mode**. Set the Composer toggle to **Agent** before running any command.

### Step 5 — Run a command

Type `/` in Composer and select from the list, or type the name directly:

```
/analyze
/onboard
/planner
/executor
```

---

## Adding a New Command

1. Create a new `.md` file in `.cursor/commands/` — the filename is the command name
2. Write the prompt instructions as clear markdown (see the existing command files as templates)
3. Optionally create a matching `.mdc` rule file in `docs/rules/` for stricter behavior enforcement
4. Create a documentation file in `docs/commands/` following the structure of existing files
5. Add it to the main `README.md` command reference table

---

## Command Index

| Command | Invoked as | Doc | Track |
|---|---|---|---|
| analyze | `/analyze` | [analyze.md](analyze.md) | Audit & Fix |
| fix-todo | `/fix-todo` | [fix-todo.md](fix-todo.md) | Audit & Fix |
| todo-security | `/todo-security` | [todo-security.md](todo-security.md) | Audit & Fix |
| todo-tests | `/todo-tests` | [todo-tests.md](todo-tests.md) | Audit & Fix |
| todo-quality | `/todo-quality` | [todo-quality.md](todo-quality.md) | Audit & Fix |
| todo-improvements | `/todo-improvements` | [todo-improvements.md](todo-improvements.md) | Audit & Fix |
| planner | `/planner` | [planner.md](planner.md) | Feature Development |
| executor | `/executor` | [executor.md](executor.md) | Feature Development |
| pr-prep | `/pr-prep` | [pr-prep.md](pr-prep.md) | Feature Development |
| onboard | `/onboard` | [onboard.md](onboard.md) | Onboarding & Understanding |
| explain | `/explain` | [explain.md](explain.md) | Onboarding & Understanding |