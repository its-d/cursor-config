# /executor

**Track:** Feature Development
**Output:** Updates `docs/implementation-plan/{task-slug}.md` (progress, feedback, lessons learned)
**Requires:** A completed implementation plan from `/planner`

---

## What It Does

Implements one task at a time from a Planner-generated implementation plan. After completing each task it updates the Project Status Board, reports what was done, and waits for the user to verify before moving to the next task. The Executor never changes the plan — it only executes it.

---

## When To Use It

- After `/planner` has produced a reviewed and approved implementation plan
- When you're ready to write code for a specific task
- When picking up work across sessions — just reference the plan file to get back up to speed

---

## How To Use It

In Cursor, run:
```
/executor implement task 1 in @{task-slug}.md
```

Reference the specific task and the plan file. After each task completes, the Executor will report its status and wait for your confirmation before proceeding.

---

## Execution Approach

- One task at a time — never proceeds to the next task without user confirmation
- Follows Test Driven Development (TDD) where applicable — writes tests before implementation
- Works in small vertical slices — builds something testable at each step
- Reports blockers immediately rather than attempting to work around them

---

## How It Updates the Plan File

After completing or being blocked on a task, the Executor updates these sections in the implementation plan:

**Project Status Board** — marks tasks as complete, in progress, or blocked

**Current Status / Progress Tracking** — brief note on what was done and what's next

**Executor's Feedback or Assistance Requests** — flags anything that needs human input or Planner review

**Lessons Learned** — documents any errors encountered and how they were resolved, with a timestamp

---

## Rules

- Never alters the plan — only the Planner can change the plan
- Never runs git commands — the user handles all git operations
- Never proceeds past a blocker by guessing — reports it and waits
- Never installs a dependency without asking first
- Task completion is announced by the user or Planner, not the Executor

---

## Picking Up Across Sessions

Because all progress is tracked in the implementation plan file, you can start a new Cursor session and get back up to speed instantly:

```
/executor continue work on @{task-slug}.md
```

The Executor will read the file, find the last completed task, and resume from there.

---

## What Comes Next

After all tasks are complete and verified, run `/pr-prep` to generate a PR description before opening a pull request.