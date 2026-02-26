# /pr-prep

**Track:** Feature Development
**Output:** `pr-prep.md` at project root
**Requires:** A branch with committed changes ready to be reviewed

---

## What It Does

Reads the current branch diff against the base branch and produces a structured PR description in `pr-prep.md`. The output covers what changed, why it changed, what was intentionally left out, how to test it, and any risks or side effects to be aware of. Designed for both the engineer opening the PR and the reviewer reading it.

---

## When To Use It

- Before opening a pull request
- When you want a clear, consistent PR description without writing it from scratch
- When working with non-technical reviewers who need plain English context

---

## How To Use It

1. Make sure your changes are committed on your branch
2. In Cursor, run:
   ```
   /pr-prep
   ```
3. Review `pr-prep.md` and copy the content into your PR description
4. Edit anything that needs more context before submitting

---

## Output Structure

```
pr-prep.md
├── PR Title (suggested)
├── What Changed
│   └── Plain English summary of every meaningful change
├── Why
│   └── The problem this solves or the feature this delivers
├── What Was Not Changed (and why)
│   └── Explicitly notes scope boundaries
├── How To Test
│   └── Step by step instructions for the reviewer
├── Risks and Side Effects
│   └── Anything that could break or needs extra attention
└── Related Files
    └── List of every file touched with a one-line description of the change
```

---

## Rules

- `/pr-prep` reads the actual diff — it does not rely on commit messages alone
- It never invents context — if something is unclear from the diff it will say so
- It does not open the PR — that is always done manually by the developer
- Output is a starting point, not a final draft — always review before submitting

---

## What Comes Next

Copy the content of `pr-prep.md` into your PR description on GitHub, GitLab, or wherever your team reviews code. Edit as needed, then open the PR.