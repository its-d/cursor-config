# MCPs (Model Context Protocol Servers)

MCPs extend what Cursor can do by giving it direct access to external tools and services without leaving the editor. Each MCP below is categorized by purpose, with install config included where available.

---

## How MCPs Work

An MCP server is a small process that exposes a set of tools over a standard protocol. Cursor connects to these servers and makes their tools available to the AI during a session. Instead of copy-pasting between GitHub, Jira, Slack, and your editor — the AI can query them directly as part of a workflow.

---

## Setup Instructions

### Step 1 — Open MCP settings in Cursor

1. Open **Cursor Settings**
2. Navigate to **MCP**
3. Click **+ Add new global MCP server**

### Step 2 — Paste the server configuration

Each MCP below includes a JSON config block. Paste it into the MCP settings input. Cursor stores these globally, so you only need to configure each MCP once — it will be available in all your projects.

### Step 3 — Add required credentials

Most MCPs need an API key or token. The config blocks below show exactly which environment variables to set and where to get them.

### Step 4 — Restart Cursor

After adding an MCP, restart Cursor to activate it. You should see the server listed under **MCP** in settings with a green connected indicator.

### Step 5 — Verify it works

Open Composer in Agent mode and ask a question that requires the MCP — for example, if you've added the GitHub MCP: "What are the open PRs on this repo?" Cursor will route the request through the MCP automatically.

---

## Adding a New MCP

1. Find the MCP server package on npm or GitHub
2. Add its config block to Cursor Settings → MCP
3. Set any required environment variables
4. Restart Cursor and verify the connection
5. Add a row to the status table at the bottom of this file

---

## Version Control

### GitHub
The official GitHub MCP. Manage repos, branches, PRs, issues, and commits directly from Cursor.

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your_token_here"
      }
    }
  }
}
```

**Get a token:** GitHub → Settings → Developer Settings → Personal Access Tokens → Generate new token. Scopes needed: `repo`, `read:org`.

**What it enables:** Create branches, open PRs, query issues, read file contents — without leaving Cursor. Pairs directly with `/pr-prep` and `/planner`.

---

### GitLab
Community MCP for GitLab repos, MRs, and issues.

```json
{
  "mcpServers": {
    "gitlab": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-gitlab"],
      "env": {
        "GITLAB_PERSONAL_ACCESS_TOKEN": "your_token_here",
        "GITLAB_API_URL": "https://gitlab.com/api/v4"
      }
    }
  }
}
```

**Get a token:** GitLab → User Settings → Access Tokens. Scopes needed: `api`, `read_repository`.

**What it enables:** Query merge requests, issues, pipelines, and repo contents. Same value as the GitHub MCP for GitLab-hosted projects.

---

## Time & Dates

### Time MCP
Lightweight MCP that gives Cursor accurate current time, date, and timezone conversions. No API key required.

```json
{
  "mcpServers": {
    "time": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-time"]
    }
  }
}
```

**What it enables:** Accurate timestamps in implementation plans and lesson logs in `/executor`. Removes the need for the AI to guess the current date.

---

## Documentation

### Context7
Pulls up-to-date, version-specific library documentation directly into Cursor. No API key required.

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"]
    }
  }
}
```

**What it enables:** Ask "how do I use useEffect in React 19?" and get current docs, not training data. Significantly reduces hallucinated API usage. Pairs with `/executor` to reduce incorrect library calls.

---

### GitMCP
Connects to any GitHub repository and uses it as a live documentation source. Useful for internal libraries or any repo without a dedicated docs site.

```json
{
  "mcpServers": {
    "gitmcp": {
      "command": "npx",
      "args": ["-y", "gitmcp"]
    }
  }
}
```

**What it enables:** Point it at any GitHub repo and query its README, docs, and code as reference material. Useful when working with internal packages.

---

## Codebase Context

### Repomix
Packs entire repos into AI-friendly context on demand. When used as an MCP, commands like `/analyze` and `/onboard` can pull codebase context without a manually generated file.

```json
{
  "mcpServers": {
    "repomix": {
      "command": "npx",
      "args": ["-y", "repomix", "--mcp"]
    }
  }
}
```

**What it enables:** `/analyze` and `/onboard` can pack and query the codebase automatically without requiring a pre-generated `repomix-output.xml` file.

---

## Communication & Collaboration

### Slack
Query channels, summarize threads, and draft messages without leaving Cursor.

```json
{
  "mcpServers": {
    "slack": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-slack"],
      "env": {
        "SLACK_BOT_TOKEN": "your_bot_token_here",
        "SLACK_TEAM_ID": "your_team_id_here"
      }
    }
  }
}
```

**Get a token:** Create a Slack App at api.slack.com → OAuth & Permissions → Bot Token Scopes: `channels:read`, `channels:history`, `chat:write`. Install app to workspace and copy the Bot User OAuth Token.

**What it enables:** Reference team discussions and decisions when planning features. Useful context for `/planner` when a feature has been discussed in a thread.

---

### Microsoft Teams
Community MCP for Teams integration — read messages, reference discussions, and draft responses.

- Search `microsoft-teams MCP` on [github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) for the latest maintained implementation
- Config varies by implementation — check the repo README for setup steps

**What it enables:** Same value as the Slack MCP for Teams-based organizations.

---

## Project Management

### Jira / Confluence (Atlassian)
Connect to Jira tickets and Confluence docs directly. Reference open issues when building implementation plans.

```json
{
  "mcpServers": {
    "atlassian": {
      "command": "npx",
      "args": ["-y", "mcp-atlassian"],
      "env": {
        "JIRA_URL": "https://your-org.atlassian.net",
        "JIRA_USERNAME": "your_email@example.com",
        "JIRA_API_TOKEN": "your_token_here"
      }
    }
  }
}
```

**Get a token:** Atlassian → Account Settings → Security → Create and manage API tokens.

**What it enables:** `/planner` can pull ticket details directly. `/pr-prep` can reference the Jira ticket being resolved.

---

### Linear
For teams using Linear instead of Jira.

```json
{
  "mcpServers": {
    "linear": {
      "command": "npx",
      "args": ["-y", "@linear/mcp-server"],
      "env": {
        "LINEAR_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

**Get a key:** Linear → Settings → API → Personal API keys → Create key.

---

## Filesystem

### Filesystem (Official)
Gives Cursor direct read/write access to local files and directories with granular permission controls.

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/path/to/your/project"
      ]
    }
  }
}
```

Replace `/path/to/your/project` with the absolute path to the directory you want Cursor to access. You can add multiple paths as additional arguments.

**What it enables:** Read, write, edit, search, and manage files directly. Useful for commands that need to create or update multiple files across a project structure.

---

## Status

| MCP | Category | Config Ready | Notes |
|---|---|---|---|
| GitHub | Version Control | ✅ | Requires personal access token |
| GitLab | Version Control | ✅ | Requires personal access token |
| Time | Time & Dates | ✅ | No API key needed |
| Context7 | Documentation | ✅ | No API key needed |
| GitMCP | Documentation | ✅ | No API key needed |
| Repomix | Codebase Context | ✅ | No API key needed |
| Slack | Communication | ✅ | Requires bot token — see setup above |
| Microsoft Teams | Communication | 🔲 | Check MCP directory for latest implementation |
| Jira / Confluence | Project Management | ✅ | Requires Atlassian API token |
| Linear | Project Management | ✅ | Requires Linear API key |
| Filesystem | Filesystem | ✅ | Set allowed directory path in args |