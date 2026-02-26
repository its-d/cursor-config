# /todo-improvements

**Track:** Audit & Fix
**Output:** Updates `repo-breakdown.md` (checks off completed improvement items)
**Requires:** `repo-breakdown.md` at project root (run `/analyze` first)

---

## What It Does

Works through only the 💡 Improvements items in the Section 6 Todo Checklist of `repo-breakdown.md`, one at a time, in order: QUICK WIN → MEDIUM EFFORT → LARGE EFFORT. All other categories are left completely untouched. Each completed item is checked off in `repo-breakdown.md`.

---

## When To Use It

- When the codebase is stable and security, tests, and quality have been addressed
- When you want to work through quick wins before a sprint planning session
- When a senior developer wants to tackle longer-term architectural improvements
- Use after `/todo-security`, `/todo-tests`, and `/todo-quality` for a full improvement cycle

---

## How To Use It

1. Make sure `repo-breakdown.md` exists at the project root
2. In Cursor, run:
   ```
   /todo-improvements
   ```
3. The command will count all unchecked improvement items and report them before starting
4. Confirm to begin — it will not touch any file until you say yes

---

## Execution Order

Always processes in this order:

1. QUICK WIN — under 30 minutes, low risk, no new dependencies
2. MEDIUM EFFORT — requires planning and testing, moderate risk *(will pause and ask before proceeding)*
3. LARGE EFFORT — significant rework, high risk *(will pause and ask before proceeding)*

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
- Never touches Security, Tests, or Code Quality items
- Always pauses before MEDIUM EFFORT and LARGE EFFORT items and waits for explicit confirmation
- Never installs a new dependency without asking first
- After every change, runs existing tests — reverts if any break

---

## What Comes Next

- Run `/analyze` again to see how the improvements affected the overall codebase health
- Run `/fix-todo` at any point to work through everything remaining across all categories