# /planner

**Track:** Feature Development
**Output:** `docs/implementation-plan/{task-slug}.md`
**Requires:** A description of the feature or change you want to build

---

## What It Does

Breaks down a feature request into a step-by-step implementation plan with clearly defined tasks, success criteria, and a project status board. The plan is written to a markdown file that persists across sessions. The Executor reads this file to know exactly what to build and in what order. The Planner never writes code — its only job is to think and document.

---

## When To Use It

- Before starting any new feature or significant change
- When a task feels too large or unclear to just start building
- When you want a reviewable plan before any code is written
- When handing off work to another developer or session

---

## How To Use It

In Cursor, run:
```
/planner [describe what you want to build]
```

Example:
```
/planner I need to add user authentication with email and password. 
Users should be able to sign up, log in, and reset their password. 
The app uses React on the frontend and Node/Express on the backend.
```

The Planner will ask clarifying questions if needed, then produce the implementation plan file.

---

## Output Structure

```
docs/implementation-plan/{task-slug}.md
├── Background and Motivation
├── Key Challenges and Analysis
├── High-level Task Breakdown
│   └── Each task includes: description, success criteria, notes
├── Project Status Board
│   └── Todo list updated by the Executor as work progresses
├── Current Status / Progress Tracking
├── Executor's Feedback or Assistance Requests
└── Lessons Learned
```

---

## Rules

- The Planner never writes or executes code
- Tasks in the breakdown must be as small as possible with clear, verifiable success criteria
- If a task has both UI and API work, UI is always planned first
- The Planner asks the user for clarification rather than assuming
- Plans are never rewritten from scratch — they are appended and updated

---

## Working With the Executor

Once the plan is reviewed and approved, switch to the Executor to begin implementation:
```
/executor implement task 1 in @{task-slug}.md
```

The Planner and Executor communicate exclusively through the implementation plan file. Do not rely on chat history to carry context between roles — always reference the file.

---

## What Comes Next

- Review the generated plan in `docs/implementation-plan/{task-slug}.md`
- Make any changes or clarifications before handing to the Executor
- Run `/executor` to begin implementing task 1