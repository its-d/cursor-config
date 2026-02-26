# /todo-security

**Track:** Audit & Fix
**Output:** Updates `repo-breakdown.md` (checks off completed security items)
**Requires:** `repo-breakdown.md` at project root (run `/analyze` first)

---

## What It Does

Works through only the 🔴 Security items in the Section 6 Todo Checklist of `repo-breakdown.md`, one at a time, in strict severity order: CRITICAL → HIGH → MEDIUM → LOW. All other categories are left completely untouched. Each completed item is checked off in `repo-breakdown.md`.

---

## When To Use It

- Immediately after `/analyze` when you want to fix security issues before anything else
- When a security review has flagged issues that need addressing before the next release
- When you don't have time for a full `/fix-todo` pass but need to clear critical vulnerabilities

---

## How To Use It

1. Make sure `repo-breakdown.md` exists at the project root
2. In Cursor, run:
   ```
   /todo-security
   ```
3. The command will count all unchecked security items and report them before starting
4. Confirm to begin — it will not touch any file until you say yes

---

## Execution Order

Always processes in this order:

1. CRITICAL
2. HIGH
3. MEDIUM
4. LOW

---

## Item States

| Symbol | Meaning |
|---|---|
| `- [ ]` | Unchecked — not yet addressed |
| `- [x] ✅` | Completed successfully |
| `- [~] ❌ BLOCKED` | Could not be completed — includes explanation and manual steps |
| `- [-] ⏭ SKIPPED` | Skipped at user request |

---

## Hard Rules

- Never works on more than one item at a time
- Never touches Tests, Code Quality, or Improvements items
- Never installs a dependency without explicit user confirmation
- If a fix is uncertain, marks it blocked rather than guessing
- Adds a `// fix-security:` comment above every change it makes

---

## What Comes Next

- Run `/todo-tests` to address missing and partial test coverage
- Run `/todo-quality` to clean up code quality issues
- Run `/fix-todo` to work through all remaining categories in one pass
- Run `/analyze` again to verify the security state of the codebase has improved