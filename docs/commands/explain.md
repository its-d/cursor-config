# /explain

**Track:** Onboarding & Understanding
**Output:** `explain.md` at project root
**Requires:** A specific file or function to explain

---

## What It Does

Reads a specific file or function and produces a plain English explanation of what it does, why it exists, how it connects to the rest of the codebase, and what would break if it were removed or changed. Goes deeper than a summary — it explains the reasoning behind the code, not just what the code does.

---

## When To Use It

- When you're reading unfamiliar code and need context fast
- Before modifying a file you didn't write
- When onboarding and `/onboard` gave you the overview but you need to go deeper
- When a code review surfaces something you don't fully understand

---

## How To Use It

In Cursor, run:
```
/explain
```

Then specify what you want explained:
```
/explain src/auth/token.service.ts
```
or
```
/explain the validateUserPermissions function in src/auth/permissions.ts
```

You can also ask it to explain a concept across multiple files:
```
/explain how authentication works end to end in this codebase
```

---

## Output Structure

```
explain.md
├── What This Is
│   └── One paragraph plain English description
├── Why It Exists
│   └── The problem it solves and why it was built this way
├── How It Works
│   └── Step by step walkthrough of the logic
├── How It Connects
│   └── What calls it, what it calls, what it depends on
├── What Would Break If You Changed It
│   └── Side effects and downstream dependencies
└── Things To Know Before Editing It
    └── Gotchas, assumptions baked in, areas requiring care
```

---

## Rules

- Explains reasoning, not just syntax — "why" matters as much as "what"
- Never invents context — if the purpose of something is unclear from the code, it says so
- Keeps explanations readable for both the author of the code and someone seeing it for the first time
- Each run overwrites `explain.md` — if you need to keep previous explanations, rename or copy the file first

---

## What Comes Next

- Run `/planner` if you now have enough context to start building on top of this code
- Run `/analyze` if the explanation revealed potential quality or security issues
- Run `/onboard` if you want a full project overview rather than a deep dive on one area