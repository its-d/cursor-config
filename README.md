# Cursor Command Suite

A set of Cursor commands designed to help developers work faster, onboard quicker, and ship better code using agentic AI. Each command has a single responsibility and produces a markdown file as its output so context is always persistent across sessions.

---

## How It Works

Commands are organized into three tracks. Each track covers a different phase of the development lifecycle. You can use commands from different tracks in the same session — they are designed to complement each other.

```
cursor-suite/
├── README.md
├── docs/
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
/planner [describe feature] → review plan → /executor [implement task 1] → verify → /executor [implement task 2] → /pr-prep
```

---

### 🧭 Track 3 — Onboarding & Understanding

Use these commands when joining a new codebase or trying to understand unfamiliar code. Designed for both new developers and experienced engineers picking up an existing project.

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

**Every command produces a markdown file.** This means context is never lost between sessions. An Executor can pick up where it left off by reading the implementation plan. A new developer can read `onboard.md` before their first standup.

**Commands never do more than one thing.** `/analyze` only audits. `/fix-todo` only fixes. This makes it easy to know which command to reach for and easy to trust what it will and won't touch.

**The Planner never writes code. The Executor never changes the plan.** This separation prevents the most common failure mode of agentic AI — executing before thinking, or overthinking instead of executing.

---

## Getting Started

### Step 1 — Install Repomix

Several commands in this suite (`/analyze`, `/onboard`) require a repomix file — a single AI-friendly file containing your entire codebase. Install it once globally:

```bash
# Using npm
npm install -g repomix

# Using yarn
yarn global add repomix

# Using Homebrew (macOS/Linux)
brew install repomix
```

Or run without installing using npx (always uses the latest version):

```bash
npx repomix@latest
```

### Step 2 — Generate a repomix file

Navigate to your project root and run:

```bash
repomix
```

This generates `repomix-output.xml` in your current directory. For large codebases, use compression to reduce token count:

```bash
repomix --compress
```

To include only specific files:

```bash
repomix --include "src/**/*.ts,**/*.md"
```

### Step 3 — Run your first command

```bash
/analyze   # Full codebase audit
/onboard   # Developer onboarding guide
```

Point the command at your `repomix-output.xml` when prompted.

### Step 4 — Act on the output

```bash
/todo-security    # Fix critical issues first
/todo-tests       # Add missing test coverage
/fix-todo         # Work through everything
```

---

## Command Reference

Full documentation for each command is in the `docs/` folder.

- [/analyze](docs/analyze.md)
- [/fix-todo](docs/fix-todo.md)
- [/todo-security](docs/todo-security.md)
- [/todo-tests](docs/todo-tests.md)
- [/todo-quality](docs/todo-quality.md)
- [/todo-improvements](docs/todo-improvements.md)
- [/planner](docs/planner.md)
- [/executor](docs/executor.md)
- [/pr-prep](docs/pr-prep.md)
- [/onboard](docs/onboard.md)
- [/explain](docs/explain.md)