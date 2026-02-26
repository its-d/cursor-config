# /onboard

**Track:** Onboarding & Understanding
**Output:** `onboard.md` at project root
**Requires:** A repomix file of the codebase

---

## What It Does

Reads a codebase and produces a plain English guide written specifically for a developer joining the project. Covers what the project does, how to run it locally, how it is structured, where the important logic lives, what to read first, and what to watch out for. Designed to replace the "ask a senior dev" step that slows down every onboarding.

---

## When To Use It

- When a new developer is joining the team
- When you're picking up an unfamiliar codebase
- When the project has no documentation or the existing docs are out of date
- Run it after `/analyze` if you want both a quality audit and an onboarding guide

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

### 3. Run /onboard

In Cursor, run:

```
/onboard
```

When prompted, provide the `repomix-output.xml` file and answer:
- What languages and frameworks does the team use? (comma separated if unknown)
- Is this for a brand new developer or an experienced engineer joining mid-project?

### 4. Share the output

Review `onboard.md` and share it with the new team member before their first day.

---

## Output Structure

```
onboard.md
├── What This Project Does
│   └── Plain English, no jargon
├── Tech Stack
│   └── Languages, frameworks, key dependencies
├── How To Run It Locally
│   └── Step by step setup instructions
├── Project Structure
│   └── What each folder and key file does
├── Where To Start
│   └── Which files to read first and in what order
├── How Features Are Built
│   └── The pattern the codebase follows for adding new functionality
├── Things To Watch Out For
│   └── Known quirks, gotchas, and areas that need care
└── Who Owns What
    └── If determinable from the code — which areas have clear ownership
```

---

## Rules

- Written for humans, not machines — no bullet dumps, no jargon without explanation
- Adjusted based on the experience level provided — a junior developer gets more context than a senior one
- Never assumes knowledge of the codebase — explains everything from scratch
- If something is unclear from the code, it says so rather than inventing an explanation

---

## What Comes Next

- Share `onboard.md` with the new developer before their first day
- Run `/explain` to dive deeper into any specific file or function
- Run `/analyze` to get a full quality audit alongside the onboarding guide