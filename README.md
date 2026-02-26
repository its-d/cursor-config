# Cursor Command Suite

A set of Cursor commands designed to help developers work faster, onboard quicker, and ship better code using agentic AI. Each command has a single responsibility and produces a markdown file as its output so context is always persistent across sessions.

---

## How It Works

Commands are organized into three tracks. Each track covers a different phase of the development lifecycle.

```
cursor-suite/
├── README.md
├── .cursor/
│   ├── commands/           ← .md files = real slash commands (type / to invoke)
│   │   ├── analyze.md
│   │   ├── fix-todo.md
│   │   ├── todo-security.md
│   │   ├── todo-tests.md
│   │   ├── todo-quality.md
│   │   ├── todo-improvements.md
│   │   ├── planner.md
│   │   ├── executor.md
│   │   ├── pr-prep.md
│   │   ├── onboard.md
│   │   └── explain.md
│   └── rules/              ← .mdc files = behavior rules (reinforce each command)
│       ├── analyze.mdc
│       ├── fix-todo.mdc
│       └── ...
└── docs/
    ├── commands/
    │   ├── README.md       ← setup instructions and command index
    │   └── *.md            ← detailed doc for each command
    ├── rules/
    │   ├── README.md       ← how rules work and how to write them
    │   └── *.mdc           ← rule source files
    └── mcp/
        └── README.md       ← MCP setup configs
```

**Two files per command:**

- `.cursor/commands/analyze.md` — the prompt that runs when you type `/analyze`
- `.cursor/rules/analyze.mdc` — the behavior rules that enforce how it should act

Commands work without the rules, but the rules make them significantly more reliable.

---

## Getting Started

### Step 1 — Install Repomix

Several commands (`/analyze`, `/onboard`) require Repomix to pack your codebase into AI-friendly context:

```bash
npm install -g repomix
# or
brew install repomix
```

### Step 2 — Copy commands into your project

This registers the actual slash commands — without this, nothing appears when you type `/`:

```bash
mkdir -p .cursor/commands
cp /path/to/cursor-config/docs/commands/*.md .cursor/commands/
```

### Step 3 — Copy rules into your project (recommended)

Rules enforce correct behavior for each command:

```bash
mkdir -p .cursor/rules
cp /path/to/cursor-config/docs/rules/*.mdc .cursor/rules/
```

### Step 4 — Open Cursor in Agent mode and type /

```
/analyze          → full codebase audit
/onboard          → developer onboarding guide
/planner          → implementation plan for a feature
```

See [docs/commands/README.md](docs/commands/README.md) for full setup details.

---

## Tracks

### 🔍 Track 1 — Audit & Fix

Start with `/analyze` then use `/fix-todo` or the scoped variants to execute fixes.

| Command | Output File | Description |
|---|---|---|
| `/analyze` | `repo-breakdown.md` | Full codebase audit covering tests, vulnerabilities, code quality, and improvements |
| `/fix-todo` | updates `repo-breakdown.md` | Works through every item in the audit checklist in priority order |
| `/todo-security` | updates `repo-breakdown.md` | Scoped pass — 🔴 security items only, CRITICAL → HIGH → MEDIUM → LOW |
| `/todo-tests` | updates `repo-breakdown.md` | Scoped pass — 🧪 missing and partial tests only |
| `/todo-quality` | updates `repo-breakdown.md` | Scoped pass — 🔧 code quality items only |
| `/todo-improvements` | updates `repo-breakdown.md` | Scoped pass — 💡 improvement items only |

**Typical flow:**
```
/analyze → review repo-breakdown.md → /todo-security → /todo-tests → /fix-todo
```

---

### 🏗️ Track 2 — Feature Development

The Planner thinks and documents. The Executor implements. They communicate through a shared markdown file.

| Command | Output File | Description |
|---|---|---|
| `/planner` | `docs/implementation-plan/{task-slug}.md` | Breaks down a feature into a step-by-step implementation plan |
| `/executor` | updates `docs/implementation-plan/{task-slug}.md` | Executes one task at a time from the plan |
| `/pr-prep` | `pr-prep.md` | Generates a PR description summarizing what changed, why, and what to test |

**Typical flow:**
```
/planner [describe feature] → review plan → /executor → verify → /executor → /pr-prep
```

---

### 🧭 Track 3 — Onboarding & Understanding

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

**Workflows never do more than one thing.** `analyze` only audits. `fix-todo` only fixes. This makes it clear which command to reach for and easy to trust what it will and won't touch.

**The Planner never writes code. The Executor never changes the plan.** This separation prevents the most common failure mode of agentic AI — executing before thinking, or overthinking instead of executing.

**TDD is enforced for all new code.** The Executor writes failing tests before writing implementation. The test must fail first to prove it's real.

---

## Docs

| Section | Description |
|---|---|
| [docs/commands/README.md](docs/commands/README.md) | How to set up commands, how slash commands work, and how to add new ones |
| [docs/rules/README.md](docs/rules/README.md) | How rules work, how to install them, and how to write new ones |
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