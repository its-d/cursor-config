# /todo-quality

**Track:** Audit & Fix
**Output:** Updates `repo-breakdown.md` (checks off completed code quality items)
**Requires:** `repo-breakdown.md` at project root (run `/analyze` first)

---

## What It Does

Works through only the 🔧 Code Quality items in the Section 6 Todo Checklist of `repo-breakdown.md`, one at a time, in order: DEAD CODE → BEST PRACTICE → COMPLEXITY → DOCS. All other categories are left completely untouched. Each completed item is checked off in `repo-breakdown.md`.

---

## When To Use It

- When you want a cleanup pass before a release without touching security or tests
- When the codebase has accumulated dead code and technical debt that needs clearing
- When documentation gaps are slowing down new developers
- After a fast-paced feature sprint to tidy up what was left behind

---

## How To Use It

1. Make sure `repo-breakdown.md` exists at the project root
2. In Cursor, run:
   ```
   /todo-quality
   ```
3. The command will count all unchecked quality items and report them before starting
4. Confirm to begin — it will not touch any file until you say yes

---

## Execution Order

Always processes in this order:

1. DEAD CODE — unused functions, variables, imports, unreachable blocks
2. BEST PRACTICE — unsafe casts, missing error handling, magic numbers, naming inconsistencies
3. COMPLEXITY — long functions, deep nesting, too many parameters
4. DOCS — missing JSDoc, unexplained logic blocks

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
- Never touches Security, Tests, or Improvements items
- Before deleting dead code, searches the entire codebase to confirm it is genuinely unused
- After any complexity refactor, runs existing tests — reverts entirely if any break
- Never renames something based on style preference alone — only fixes clear, unambiguous inconsistencies

---

## What Comes Next

- Run `/todo-improvements` to address longer-term improvement items
- Run `/fix-todo` to work through all remaining categories in one pass
- Run `/analyze` again to verify code quality has improved