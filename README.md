# Cursor Command Suite

A set of Cursor commands designed to help developers work faster, onboard quicker, and ship better code using agentic AI. Each command has a single responsibility and produces a markdown file as its output so context is always persistent across sessions.

---

## How It Works

Commands are organized into three tracks. Each track covers a different phase of the development lifecycle. You can use commands from different tracks in the same session — they are designed to complement each other.

```
cursor-suite/
├── README.md
├── .cursor/
│   └── rules/              ← copy .mdc files here to activate commands in your project
└── docs/
    ├── commands/
    │   ├── README.md       ← how to set up and add commands
    │   ├── analyze.md
    │   ├── fix-todo.md
    │   ├── todo-security.md
    │   ├── todo-tests.md
    │   ├── todo-quality.md
    │   ├── todo-improvements.md
    │   ├── planner.md
    │   ├── executor.md
    │   ├── pr-prep.md
    │   ├── onboard.md
    │   └── explain.md
    ├── rules/
    │   ├── README.md       ← how to set up, install, and write rules
    │   ├── analyze.mdc
    │   ├── fix-todo.mdc
    │   ├── todo-security.mdc
    │   ├── todo-tests.mdc
    │   ├── todo-quality.mdc
    │   ├── todo-improvements.mdc
    │   ├── planner.mdc
    │   ├── executor.mdc
    │   ├── pr-prep.mdc
    │   ├── onboard.mdc
    │   └── explain.mdc
    └── mcp/
        └── README.md       ← how to set up and add MCPs
```

---

## Getting Started

### Step 1 — Install Repomix

Several commands (`/analyze`, `/onboard`) require Repomix to pack your codebase into AI-friendly context. Install it once globally:

```bash
npm install -g repomix
# or
brew install repomix
```

Or skip install entirely and use npx:

```bash
npx repomix@latest
```

### Step 2 — Copy the rules into your project

Commands only work when their `.mdc` rule files are in `.cursor/rules/` at the root of your project:

```bash
mkdir -p .cursor/rules
cp /path/to/cursor-suite/docs/rules/*.mdc .cursor/rules/
```

See [docs/rules/README.md](docs/rules/README.md) for detailed setup, how to install only specific commands, and how to write new rules.

### Step 3 — Configure MCPs (optional but recommended)

MCPs give commands direct access to GitHub, Jira, Slack, and other tools. See [docs/mcp/README.md](docs/mcp/README.md) for setup configs with step-by-step instructions for each.

### Step 4 — Open Cursor in Agent mode and run a command

```
/analyze          → full codebase audit
/onboard          → developer onboarding guide
/planner [task]   → implementation plan for a feature
```

---

## Tracks

### 🔍 Track 1 — Audit & Fix

Use these commands when you need to understand the current state of a codebase and systematically fix what's wrong. Start with `/analyze` then use `/fix-todo` or the scoped variants to execute fixes.

| Command | Output File | Description |
|---|---|---|
| `/analyze` | `repo-breakdown.md` | Full codebase audit covering tests, vulnerabilities, code quality, and improvements |
| `/fix-todo` | updates `repo-breakdown.md` | Works through every item in the audit checklist in priority order |
| `/todo-security` | updates `repo-breakdown.md` | Scoped fix pass — 🔴 security items only, CRITICAL → HIGH → MEDIUM → LOW |
| `/todo-tests` | updates `repo-breakdown.md` | Scoped fix pass — 🧪 missing and partial tests only |
| `/todo-quality` | updates `repo-breakdown.md` | Scoped fix pass — 🔧 code quality items only |
| `/todo-improvements` | updates `repo-breakdown.md` | Scoped fix pass — 💡 improvement items only |

**Typical flow:**
```
/analyze → review repo-breakdown.md → /todo-security → /todo-tests → /fix-todo
```

---

### 🏗️ Track 2 — Feature Development

Use these commands when building new features. The Planner thinks and documents. The Executor implements. They communicate through shared markdown files so you can switch between them freely across sessions.

| Command | Output File | Description |
|---|---|---|
| `/planner` | `docs/implementation-plan/{task-slug}.md` | Breaks down a feature request into a step-by-step implementation plan |
| `/executor` | updates `docs/implementation-plan/{task-slug}.md` | Executes one task at a time from the implementation plan |
| `/pr-prep` | `pr-prep.md` | Generates a PR description summarizing what changed, why, and what to test |

**Typical flow:**
```
/planner [describe feature] → review plan → /executor → verify → /executor → /pr-prep
```

---

### 🧭 Track 3 — Onboarding & Understanding

Use these commands when joining a new codebase or trying to understand unfamiliar code.

| Command | Output File | Description |
|---|---|---|
| `/onboard` | `onboard.md` | Plain English guide to a codebase for a developer joining the project |
| `/explain` | `explain.md` | Deep dive on a specific file or function — what it does, why it exists, how it connects |

**Typical flow:**
```
/onboard → read onboard.md → /explain [specific file] → /planner [start building]
```

---

## Shared Conventions

**Every command produces a markdown file.** Context is never lost between sessions. An Executor can pick up where it left off by reading the implementation plan. A new developer can read `onboard.md` before their first standup.

**Commands never do more than one thing.** `/analyze` only audits. `/fix-todo` only fixes. This makes it clear which command to reach for and easy to trust what it will and won't touch.

**The Planner never writes code. The Executor never changes the plan.** This separation prevents the most common failure mode of agentic AI — executing before thinking, or overthinking instead of executing.

**TDD is enforced for all new code.** The Executor writes failing tests before writing implementation. The test must fail first to prove it's real.

---

## Docs

| Section | Description |
|---|---|
| [docs/commands/README.md](docs/commands/README.md) | How to set up commands, use them in Cursor, and add new ones |
| [docs/rules/README.md](docs/rules/README.md) | How to install rule files, how rules work, and how to write new ones |
| [docs/mcp/README.md](docs/mcp/README.md) | MCP setup configs with credentials guidance for every recommended server |

---

## Command Reference

| Command | Doc |
|---|---|
| `/analyze` | [docs/commands/analyze.md](docs/commands/analyze.md) |
| `/fix-todo` | [docs/commands/fix-todo.md](docs/commands/fix-todo.md) |
| `/todo-security` | [docs/commands/todo-security.md](docs/commands/todo-security.md) |
| `/todo-tests` | [docs/commands/todo-tests.md](docs/commands/todo-tests.md) |
| `/todo-quality` | [docs/commands/todo-quality.md](docs/commands/todo-quality.md) |
| `/todo-improvements` | [docs/commands/todo-improvements.md](docs/commands/todo-improvements.md) |
| `/planner` | [docs/commands/planner.md](docs/commands/planner.md) |
| `/executor` | [docs/commands/executor.md](docs/commands/executor.md) |
| `/pr-prep` | [docs/commands/pr-prep.md](docs/commands/pr-prep.md) |
| `/onboard` | [docs/commands/onboard.md](docs/commands/onboard.md) |
| `/explain` | [docs/commands/explain.md](docs/commands/explain.md) |