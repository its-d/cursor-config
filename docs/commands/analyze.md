# /analyze

**Track:** Audit & Fix
**Output:** `repo-breakdown.md` at project root
**Requires:** A repomix file of the codebase

---

## What It Does

Performs a full audit of a codebase and produces a single `repo-breakdown.md` file containing six sections: repository summary, test coverage, vulnerabilities, code quality, improvements, and a complete todo checklist. Every finding is tied to an exact filename and line number. The todo checklist is structured to be executed line by line by `/fix-todo` or the scoped `/todo-*` commands.

---

## When To Use It

- When joining a new codebase for the first time
- Before starting a major feature to understand the current state
- As part of a code review process
- Any time you want a full picture of what needs fixing

---

## How To Use It

### 1. Install Repomix

```bash
# Using npm
npm install -g repomix

# Using yarn
yarn global add repomix

# Using Homebrew (macOS/Linux)
brew install repomix

# Or run without installing (always latest)
npx repomix@latest
```

### 2. Generate a repomix file

Navigate to your project root and run:

```bash
repomix
```

This generates `repomix-output.xml` in your current directory. For large codebases use compression:

```bash
repomix --compress
```

To include only specific files:

```bash
repomix --include "src/**/*.ts,**/*.md"
```

### 3. Run /analyze

In Cursor, run:

```
/analyze
```

When prompted, provide the `repomix-output.xml` file. Wait for `repo-breakdown.md` to be generated — do not interrupt.

### 4. Review the output

Open `repo-breakdown.md` and review before running any fix commands.

---

## Output Structure

```
repo-breakdown.md
├── 1. Repository Summary
├── 2. Test Coverage
│   ├── Currently Tested
│   ├── Missing Coverage
│   └── Partial Coverage
├── 3. Vulnerabilities
│   ├── Critical
│   ├── High
│   ├── Medium
│   └── Low
├── 4. Code Quality
│   ├── Dead Code
│   ├── Complexity Issues
│   ├── Best Practice Violations
│   └── Documentation Gaps
├── 5. Improvements
│   ├── Quick Wins
│   ├── Medium Effort
│   └── Large Effort
└── 6. Todo Checklist
    ├── 🔴 Security
    ├── 🧪 Tests
    ├── 🔧 Code Quality
    └── 💡 Improvements
```

---

## Rules

- `/analyze` reads the entire repomix file before writing a single word of output
- It never asks clarifying questions mid-analysis
- Every finding must reference an exact filename and line number
- The todo checklist is the source of truth for all follow-on fix commands

---

## What Comes Next

- Run `/fix-todo` to work through all checklist items in priority order
- Run `/todo-security` to fix only security issues first
- Run `/onboard` to generate a developer guide from the same codebase