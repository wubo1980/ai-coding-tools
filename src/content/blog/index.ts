import type { BlogPost } from "@/types/blog";

const cursorCompose3OriginPost: BlogPost = {
  slug: "cursor-compose3-origin-june-2026",
  title: "Cursor Launches Its Own AI Model Compose 3 and Origin Git Platform — What It Means",
  description:
    "Cursor announced Compose 3, its first self-trained 1.5T-parameter AI model trained on SpaceX's supercomputer, plus Origin, a Git forge built for AI agents, and a mobile app. Here's what changed.",
  publishedAt: "June 24, 2026",
  category: "Industry Analysis",
  readTimeMinutes: 6,
  content: `
![AI Coding Tools Evolution](/blog-cursor-compose3-origin.webp)

If you thought Cursor was just an AI-native IDE, yesterday changed that. At its Compile conference on June 23, 2026, Cursor announced three things that reshape how you should think about the company: a self-trained AI model, a Git forge for AI agents, and a mobile app.

Here's what was announced, what it means for developers, and how it changes the competitive landscape.

---

## The Three Announcements

### Compose 3: Cursor's First Self-Trained AI Model

Cursor's co-founder Michael revealed that Compose 3 — a **1.5 trillion parameter model** — is being trained from scratch on SpaceX's supercomputer. This is not a fine-tune of an existing open-source base like previous Composer models. It's a ground-up model designed to be on par with Claude Opus and GPT in size, using ten to twenty times more compute than any previous Cursor model.

**Key details:**
- Trained from scratch (not based on any open-source model)
- 1.5T parameters, comparable to frontier models from Anthropic and OpenAI
- Trained on SpaceX's supercomputer infrastructure (part of the $60B acquisition)
- Designed to work beyond coding — signaling a broader AI platform play
- Expected to ship within weeks

The strategic implication is clear: Cursor no longer wants to be dependent on third-party model providers. By owning the model, it controls latency, cost, and capability decisions end-to-end.

This move mirrors what Apple did with silicon — vertical integration from chip to OS to app — applied to AI coding tools.

### Origin: A Git Forge Built for Parallel AI Agents

The second announcement was **Origin** ([cursor.com/origin](https://cursor.com/origin)), a Git-compatible code hosting and collaboration platform. Co-founder Tomas, who joined through the Graphite acquisition, described Origin as "a Git platform for teams and agents."

**What makes Origin different from GitHub or GitLab:**
- **Agent-first architecture:** In load tests, Origin handled thousands of agents reading from and writing to a single repository simultaneously
- **AI-assisted merge conflict resolution:** Origin resolves conflicts automatically instead of blocking a merge
- **Auto-fix for CI failures:** When CI tests fail on an agent-generated change, Origin can fix them
- **Agent-aware code review:** Comments and review workflows are designed for both human and AI reviewers
- **Built on cloud-native Git architecture:** Origin runs on a new Git layer built on top of cloud providers, not legacy on-prem Git

Origin is already running internally at Cursor and with select partners. Broad availability is planned for **fall 2026**.

This is the most direct competitor to GitHub that any AI tool company has launched. If you're already building with Cursor agents, Origin eliminates the friction of pushing AI-generated code through a human-designed Git workflow.

### Cursor Mobile: iOS Beta

Third, Cursor launched **Cursor Mobile** as an iOS beta. The app lets developers:
- Manage agents remotely — start, stop, and review agents from your phone
- Unblock stuck agents with a tap
- Review and comment on agent-generated screenshots
- Access agents running on your desktop via a remote control feature

For developers who run long agent sessions, Cursor Mobile turns "checking on progress" from sitting at the desk into pulling out your phone.

---

## What This Means for the Competitive Landscape

### The Vertical Integration Play

Cursor is now the only AI coding tool company with all three layers:

GitHub Copilot has the platform advantage (GitHub.com) but doesn't control the model. Claude Code has the model advantage but no platform. Cursor is now the only company aiming for full vertical stack ownership.

### The SpaceX Connection

SpaceX's $60 billion acquisition of Anysphere (Cursor's parent company) gave Cursor access to compute infrastructure that no other AI coding tool startup has. Training a 1.5T model from scratch is prohibitively expensive for a standalone startup — the compute costs alone can exceed $100M. SpaceX's supercomputer changes that equation entirely.

### What It Means for Developers

**If you use Cursor today:** Nothing changes immediately, but the trajectory is clear. Over the next 6-12 months, Cursor will become less dependent on OpenAI and Anthropic models. You'll likely see Compose 3 as an opt-in or default model option. Origin will become the recommended Git workflow for Cursor users.

**If you use GitHub Copilot:** Origin is a direct challenger to GitHub's dominance. If Origin delivers on its agent-first merging and auto-fix promises, it could pull teams away from GitHub's workflow for AI-generated code.

**If you use Claude Code:** The model advantage gap narrows. Compose 3 aims to match Opus-level reasoning for coding tasks. But Claude Code still has the deepest plugin ecosystem and strongest terminal-first developer experience.

---

## The Bottom Line

Cursor's Compose 3, Origin, and Mobile announcements represent the most ambitious expansion by any AI coding tool company. The vertical integration strategy — model + IDE + Git platform + mobile — is a bet that developers will prefer a unified stack over stitching together best-in-class components.

Whether that bet pays off depends on execution. But one thing is clear: the AI coding tool market is no longer just about autocomplete quality. It's about who owns the full developer workflow, from model inference to code review.

*Check our detailed [Cursor review](/tool/cursor) for updated capability scores, or go back to the [comparison table](/) to see how Cursor stacks against Copilot, Claude Code, and Windsurf.*
  `.trim(),
  seo: {
    title: "Cursor Launches Compose 3 Model and Origin Git Platform",
    description:
      "Cursor announced Compose 3, its first self-trained 1.5T model on SpaceX infrastructure, plus Origin Git forge for AI agents. What this means for developers.",
    canonicalPath: "/blog/cursor-compose3-origin-june-2026",
  },
};

const openaiCodexRecordReplayPost: BlogPost = {
  slug: "openai-codex-record-replay-june-2026",
  title: "OpenAI Codex Record & Replay — Show a Workflow Once, Replay It Forever",
  description:
    "OpenAI Codex launched Record & Replay on June 17, 2026. Demonstrate a workflow once on your Mac, and Codex turns it into a reusable automation skill. Here's how it works and what it means.",
  publishedAt: "June 24, 2026",
  category: "Product Updates",
  readTimeMinutes: 5,
  content: `
![OpenAI Codex Record and Replay](/blog-codex-record-replay.webp)

On June 17, 2026, OpenAI added a feature to Codex that fundamentally changes the automation barrier: **Record & Replay**. Instead of describing a workflow in a prompt, you perform the task once while Codex watches, and it turns your actions into a shareable, reusable skill.

This is one of the most practical AI coding tool features released in 2026 — and it has implications far beyond just coding.

---

## How Record & Replay Works

Record & Replay is available on the Codex macOS app. Here's the flow:

1. **Start recording** — Click the record button in Codex's interface
2. **Perform your workflow** — Use your Mac normally: open files, edit code, run terminal commands, navigate menus, fill forms
3. **Stop recording** — Codex has captured every action as a structured sequence
4. **Review and edit** — The recorded workflow appears as an editable skill. You can rename steps, adjust parameters, and add guardrails
5. **Replay it anytime** — Run the skill with a single button. Codex replays the exact sequence of actions, adapting to your current context

**Key technical constraints:**
- macOS only (initial release)
- Requires Computer Use to be enabled
- Excludes the European Economic Area, United Kingdom, and Switzerland initially
- Free to use within Codex's existing subscription

## What Makes This Different

Record & Replay is not new in the general automation space — tools like Keyboard Maestro, AppleScript, and Sikuli have done desktop automation for years. What's different is the **AI-native approach**:

### No Programming Required

Traditional automation tools require scripting knowledge: AppleScript, shell scripts, or visual block editors. Record & Replay requires zero configuration. You do the thing once, and Codex figures out the rest.

### Context Awareness

Unlike dumb macro recorders that replay mouse clicks at fixed screen positions, Codex's Computer Use understands what's on screen. If a button moves, Codex can still find it. If a file path changes, Codex can adapt. The recorded workflow is semantic, not positional.

### Editable After Recording

The generated skill is not a black box. You can inspect each step, rename actions, remove unnecessary steps, and add conditions. This makes it easy to refine workflows over time.

### Shareable

Recorded skills can be exported and shared with teammates. For teams adopting Codex, this means onboarding workflows can be captured once and reused by everyone.

---

## Use Cases for Developers

### Environment Setup

The most obvious use case: environment setup. Record yourself cloning a repo, installing dependencies, configuring environment variables, and setting up Docker. New team members replay the skill and get a working environment in seconds instead of spending an afternoon reading setup docs.

### Multi-Step Deployment

Deploying code to production often involves a sequence of terminal commands, web UI clicks, and verification steps. Record it once, replay it on every deployment. If a step fails, you can pause, fix it manually, and resume.

### Bug Reproduction

When a QA tester or user reports a bug, record the steps to reproduce it. Share the recorded skill with the development team. Instead of "click the button on the second tab after entering five characters" — they run the skill and see exactly what happened.

### Code Review Patterns

If you have a consistent code review process — checkout branch, run lint, run tests, check for secrets, review diff — record it as a skill. Run it before starting your review to ensure the code is in a known good state.

### API Explorations and Data Migration

Need to migrate data across services? Record the steps once — API calls, transformations, validations — and replay for each batch. The recorded workflow becomes documentation that actually runs.

---

## Competitive Context

Record & Replay is OpenAI's response to a growing trend across AI coding tools: **workflow persistence**.

| Tool | Workflow Feature | Launch Date |
|---|---|---|
| **Codex** | Record & Replay | June 17, 2026 |
| **Cursor** | Automations (scheduled + event-driven) | May 20, 2026 |
| **Copilot Desktop** | Workflows and skills | May 14, 2026 |
| **Claude Code** | Plugin directory | May 2026 |

The difference is the **recording approach**. Cursor and Copilot require you to describe what you want in a prompt. Codex lets you *show* it. For developers who find prompt engineering tedious, Record & Replay is a compelling alternative.

However, there are trade-offs:
- **Record & Replay** is specific to macOS desktop automation. It doesn't work for CI/CD pipelines or server-side workflows
- **Cursor Automations** work across repos, including no-repo automations for Slack, analytics, and finance
- **Copilot Workflows** are GitHub-native and integrate with issues, PRs, and audit logs

---

## The Bottom Line

OpenAI Codex's Record & Replay is a meaningful step forward in making AI automation accessible to non-scripters. For developers who prefer showing over telling, it solves a real friction point.

If you're already using Codex on macOS, Record & Replay is available now. If you're evaluating AI coding tools and workflow automation is a priority, the "prompt vs. demonstrate" distinction is a legitimate factor to weigh.

*This post was published on June 24, 2026. Not sure which AI coding tool fits your workflow? Check our [comparison table](/ "AI Coding Tools Comparison") for pricing breakdowns and scenario-based recommendations, or dive into our [Cursor](/tool/cursor) and [Copilot](/tool/copilot) reviews.*
  `.trim(),
  seo: {
    title: "OpenAI Codex Record & Replay — Show Once, Replay Forever",
    description:
      "OpenAI Codex launched Record and Replay on June 17. Show a workflow once on your Mac, and Codex turns it into reusable automation. Find out how it works.",
    canonicalPath: "/blog/openai-codex-record-replay-june-2026",
  },
};

const aiCodeSecurityPost: BlogPost = {
  slug: "ai-coding-tools-security-symjack-worms-june-2026",
  title: "AI Coding Tools Are Under Attack — SymJack, Miasma Worms, and What Developers Must Know",
  description:
    "SymJack vulns affecting 6 AI coding agents, Miasma/IronWorm supply-chain worms, and new agentic CI/CD risks. A security roundup for developers using Cursor, Claude Code, Copilot, and Grok Build.",
  publishedAt: "June 24, 2026",
  category: "Security",
  readTimeMinutes: 7,
  content: `
![AI Code Security](/blog-ai-code-security.webp)

May and June 2026 brought a series of security incidents targeting AI coding tools that every developer using these tools needs to understand. From a critical symlink-hijack vulnerability affecting six major coding agents to self-replicating worms poisoning AI tool configurations, the threat landscape is evolving fast.

Here's what happened, which tools are affected, and what you should do about it.

---

## SymJack: The Approval Prompt Is Lying to You

On May 26, 2026, security researchers at Adversa AI published details on **SymJack** — a critical attack technique targeting AI coding agents. The vulnerability affects Claude Code, Cursor, Copilot, Grok Build, Antigravity, and Windsurf.

**How SymJack works:**

The attack exploits a fundamental trust assumption in AI coding agents: when an agent asks for your approval to execute a terminal command, you assume the command shown in the approval prompt is what will run. SymJack uses symlink manipulation to make the prompt show one thing while the agent executes something entirely different.

- **Severity**: Critical (RCE via symlink hijack)
- **Attack vector**: The attacker needs initial write access to a file in the repository
- **Impact**: Remote code execution on the developer's machine
- **Affected tools**: Claude Code, Cursor, GitHub Copilot, Grok Build, Antigravity, Windsurf

**The deeper problem:** This is not a bug in any single tool. It's a class vulnerability in how AI coding agents handle approval workflows. The approval prompt shows the command text, but the agent resolves file paths and symlinks *after* receiving approval — meaning a malicious symlink planted in the repo changes what actually executes.

### What You Can Do

- Keep your AI coding agents updated to the latest versions (SymJack patches have been rolling out)
- Review the actual file system state, not just the approval prompt, for sensitive operations
- Avoid running AI agents on repositories you don't fully trust
- Use sandboxed environments for reviewing community-contributed code

---

## Miasma and IronWorm: Self-Replicating Worms

On June 9, 2026, the Cloud Security Alliance published a research note on two self-replicating worms — **Miasma** and **IronWorm** — targeting AI coding tool configurations through coordinated npm supply chain attacks.

**Key findings from CSA research:**

- **Miasma** targets developer environment variables and credentials used by AI coding tools
- **IronWorm** poisons npm packages that AI coding agents commonly recommend or auto-install
- Both worms self-replicate: after compromising one developer's machine, they use the compromised AI coding agent to push malicious code to other repositories in the organization
- The attack exploits the trust AI agents place in package registries — when an agent installs a dependency, it doesn't verify whether the package is legitimate or a poisoned variant

This is particularly dangerous because AI coding tools are designed to *increase* velocity. A compromised agent can maliciously modify many repositories before anyone notices.

### What You Can Do

- Pin dependency versions in package.json — don't let AI agents auto-install unpinned or suggested packages
- Use npm audit and Snyk scanning as part of your CI/CD pipeline
- Review changes AI agents make to dependency configuration files (package.json, requirements.txt, Cargo.toml)
- Consider using private package registries for production code

---

## CI/CD in the Agentic Era

On June 5, 2026, Microsoft's security team published a detailed analysis of CI/CD risks in agentic development, using a real Claude Code GitHub Action case study.

**Key risks identified by Microsoft:**

1. **Over-privileged agent tokens**: CI/CD tokens given to AI agents often have more permissions than needed, creating a wide blast radius if compromised
2. **Unreviewed agent-generated code in production**: The velocity of AI agents can overwhelm human review processes, leading to unreviewed — or poorly reviewed — code reaching production
3. **Agent-to-agent contamination**: In pipeline where one agent's output feeds another, a compromise in the first agent cascades to all downstream agents
4. **Model supply chain attacks**: Compromised models or poisoned training data can introduce vulnerabilities that are invisible at the code level

On June 23, **Snyk** announced its agentic development security platform — the first enforcement layer specifically designed for AI agents building enterprise software. The platform claims real-time governance across the full agent development lifecycle, including what agents use, what they generate, and where their output goes.

---

## Putting It All Together: What's the Actual Risk?

Here's a framework for thinking about AI coding tool security:

### Low-Risk Scenarios

- You use AI tools for autocomplete and occasional chat
- You review every AI-generated change before committing
- Your repos have strong branch protection and mandatory code review
- You don't give AI agents direct access to production credentials

### Medium-Risk Scenarios

- You use AI agents for multi-file edits and PR creation
- You review changes but sometimes approve agent-generated PRs with minimal scrutiny
- Your CI/CD has automated security scanning
- AI agents have access to non-production secrets and staging environments

### High-Risk Scenarios

- You have fully autonomous AI agents that can push to production without human review
- AI agents have access to production credentials and deployment tools
- Your team uses AI agents to auto-install dependencies and fix CI failures
- No separate security scanning for AI-generated code vs. human-written code

---

## The Bottom Line

The AI coding tool security landscape has changed dramatically in the last 30 days. SymJack showed us that approval prompts can be manipulated. Miasma and IronWorm showed us that AI agents can be used as attack vectors for self-replicating worms. Microsoft and Snyk showed us that the industry is starting to respond with governance and enforcement layers.

For most developers, the practical advice is straightforward:
- **Update your tools** to the latest versions (SymJack patches are live)
- **Review AI-generated dependency changes** carefully
- **Don't give AI agents production access** unless absolutely necessary
- **Use sandboxed environments** for high-risk repositories
- **Consider agentic security tools** like Snyk's platform if you're managing team-wide AI coding agent usage

The tools are getting more powerful. That power comes with new attack surfaces. Knowledge is the first line of defense.

*Check our detailed tool reviews to see which AI coding tools have the best security track records — [Cursor](/tool/cursor), [Copilot](/tool/copilot), and [Claude Code](/tool/claude-code). For the full comparison, visit our [comparison table](/) with pricing, security notes, and developer recommendations.*
  `.trim(),
  seo: {
    title: "AI Code Security — SymJack, Worms & Developer Risks",
    description:
      "SymJack vulns affecting 6 AI coding agents, Miasma and IronWorm worms, and agentic CI/CD risks. A security roundup for Cursor, Claude Code, and Copilot users.",
    canonicalPath: "/blog/ai-coding-tools-security-symjack-worms-june-2026",
  },
};

const claudeCodeCanceledPost: BlogPost = {
  slug: "microsoft-claude-code-licenses-canceled",
  title: "Microsoft Just Canceled Claude Code Licenses — Here's What It Means",
  description:
    "Microsoft started canceling Claude Code licenses in May 2026. Here's what actually happened, which developers are affected, and how to diversify your AI coding toolkit.",
  publishedAt: "May 28, 2026",
  category: "Industry News",
  readTimeMinutes: 4,
  content: `
If you're a Claude Code user who logs into the terminal tomorrow and finds your license revoked — you're not the only one.

On May 22, 2026, reports surfaced across Hacker News and The Verge that **Microsoft had started canceling Claude Code licenses** issued to developers through its platforms. The move sent shockwaves through the AI coding community, with hundreds of developers reporting unexpected license terminations.

## What Actually Happened

Multiple developers received notifications that their Claude Code subscriptions — paid directly or through Microsoft's marketplace — were being terminated without explanation. Affected users ranged from individual freelancers to small teams.

The timeline is revealing:

- **March 2026**: Claude Code launches to widespread acclaim
- **April 2026**: Microsoft acquires/partners with a competing AI coding agent
- **May 22, 2026**: First wave of Claude Code license cancellations reported
- **May 27, 2026**: The Verge confirms Microsoft is actively canceling licenses

## Does This Mean Claude Code Is Dead?

**No.** Here's the critical distinction:

1. **Only Microsoft-channeled licenses are affected.** If you subscribed directly through Anthropic, your access remains unchanged.
2. **Claude Code still works** through direct Anthropic subscriptions and API access.
3. **Anthropic has confirmed** that Claude Code development continues independently.

The cancellations appear to target Microsoft's enterprise resale and marketplace channels — a standard (if aggressive) competitive move, not a product shutdown.

## What This Tells Us About the AI Coding Tool Market

This signals that the AI coding assistant market has entered a **consolidation phase**:

### The Big Players Are Choosing Sides

- **Microsoft**: Betting hard on GitHub Copilot + in-house AI agents
- **Anthropic**: Going direct-to-developer with Claude Code + Claude Cowork
- **OpenAI**: Building Codex as a cloud-native alternative
- **Cursor**: Staying IDE-native and tool-agnostic
- **xAI**: Entering the fray with Grok Build and multi-agent execution

### What This Means for Developers

The era of depending on a single AI coding assistant is over. Here's a practical strategy:

**Primary tool + backup:**
- If you use **Claude Code**: keep a Cursor subscription as backup
- If you use **GitHub Copilot**: try Windsurf or Aider for fallback
- If you use **Cursor**: you're safest — IDE-agnostic and vendor-neutral
- If you use **Grok Build**: model routing via OpenRouter keeps you flexible

## The Bottom Line

Microsoft canceling Claude Code licenses isn't the end of anything. It's a sign that the AI coding assistant market is maturing — companies are picking winners, and developers need to be strategic about their tool choices.

Stay independent. Stay diversified. And don't put all your agent tokens in one basket.

---

*This post was published on May 28, 2026. Market conditions change rapidly — check our [comparison table](/ "AI Coding Tools Comparison") for the latest tools and pricing.*
  `.trim(),
  seo: {
    title: "Microsoft Canceled Claude Code Licenses — May 2026 Update | AI Coding Tools",
    description:
      "Microsoft started canceling Claude Code licenses in May 2026. Here's what actually happened, which developers are affected, and how to diversify your AI coding toolkit.",
    canonicalPath: "/blog/microsoft-claude-code-licenses-canceled",
  },
};


const cursor35Post: BlogPost = {
  slug: "cursor-35-copilot-desktop-agent-may-2026",
  title: "May 2026 Was a Landmark Month for AI Coding Tools — Here's What Changed",
  description:
    "Cursor shipped 3 releases in 3 weeks. GitHub Copilot launched a desktop agent. Anthropic opened a plugin directory. A recap of the fastest-moving month in AI coding tools.",
  publishedAt: "May 30, 2026",
  category: "Industry Analysis",
  readTimeMinutes: 6,
  content: `
If the last three weeks of AI coding tool releases felt overwhelming, you weren't imagining it. May 2026 might be the most packed month the category has seen since the Copilot launch in 2021.

Three events — Cursor's accelerate-three-releases cadence, GitHub Copilot's surprise desktop app, and Anthropic's official plugin directory — reshaped the landscape. Here's what happened and what it means for how you'll write code.

---

## Cursor: Three Releases in Three Weeks

Cursor shipped versions 3.3, 3.5, and 3.6 back-to-back between May 7 and May 29. The velocity alone is notable, but the feature set is what changes the game.

### Cursor 3.3 (May 7) — Parallel Agents and PR Review

**Parallel agents (Build in Parallel):** Cursor's agent mode can now spawn async subagents that work on independent steps of a plan simultaneously. If a task has five independent sub-tasks — refactor Module A, update tests, bump the API client, regenerate docs, run lint fixes — Cursor orchestrates them in parallel instead of sequentially. The difference is hours of wall-clock time shaved off a complex session.

**PR Review:** A new in-editor review surface where PRs can go from creation to merge without ever leaving Cursor. Combined with **Split PRs**, Cursor can land a large change as multiple focused pull requests rather than one monolith, making AI-generated changes easier for human reviewers to digest.

### Cursor 3.5 (May 20) — Multi-Repo and No-Repo Automations

Cursor Automations — always-on coding agents that run on a schedule or on events — got two major expansions:

- **Multi-repo Automations:** An automation can now attach multiple repositories and reason across all of them. This is game-changing for microservice architectures where a single task (upgrade a shared library, deploy version consistency) touches five repos.
- **No-Repo Automations:** Automations can now exist without any repository at all. Five pre-built templates ship out of the box: Slack digest, product analytics, FAQ responder, finance reports, and customer health monitoring.

The automations now live in the Agents Window alongside standard agents, so you manage everything in one workspace.

### Cursor 3.6 (May 29) — Auto-Review Run Mode

The newest release, barely 24 hours old, introduces **Auto-review** — a run mode that dramatically reduces approval friction. Allowlisted shell, MCP, and Fetch tool calls run automatically. Sandboxable calls run in isolation. Everything else goes to a classifier subagent that decides whether to allow, retry differently, or ask for human approval.

The result: Cursor can work for much longer stretches without pinging you, while still keeping unsafe operations gated.

---

## GitHub Copilot Desktop App (May 14) — A New Kind of Competition

On May 14, GitHub quietly released the **GitHub Copilot app** in technical preview. This wasn't another IDE extension — it's a **standalone desktop agent workspace** that directly competes with Claude Code, Cursor's cloud agents, and OpenAI's Codex.

Key features of the Copilot desktop app:

- **GitHub-native context:** Sessions start from issues, PRs, prompts, or previous sessions. The session inbox surfaces what needs attention across connected repositories.
- **Isolated sessions:** Each session gets its own branch, files, conversation, and task state. Work stays separated even when you have multiple things in motion.
- **Steer, validate, ship:** Review the plan and diff, run commands, open previews, and land changes through pull request review — all without leaving the app.
- **Workflows and skills:** Automate repeatable work like triage, dependency updates, release notes, and cleanup.

For developers already living inside GitHub's ecosystem, this is a serious value proposition. The extension-based Copilot is still there, but the desktop app changes the conversation from "which plugin do I install" to "which agent workspace do I pick."

---

## Anthropic's Official Claude Code Plugins Directory

Meanwhile, Anthropic launched an official plugin directory for Claude Code and Claude Cowork at [claude.com/plugins](https://claude.com/plugins/), backed by a GitHub repository at [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official/) (28k+ stars already). The directory curates high-quality plugins — a move that echoes VS Code's extension marketplace strategy but applied to agent workflows.

For Claude Code users, this means less time hunting for community plugins and more confidence that what you install is vetted. The plugin ecosystem is still early, but the structural play is smart: building a moat around the agent's capabilities rather than just the model.

---

## The May 2026 Landscape, Summarized

### The competitive map now looks like this:

| Category | Front-runners |
|---|---|
| **AI-native IDE** | Cursor (3.6), Windsurf |
| **Agent workspace** | Copilot Desktop App, Claude Code, Codex (preview) |
| **Multi-agent execution** | Cursor (parallel agents), Grok Build |
| **Plugin ecosystems** | Claude Plugins (official), Cursor Marketplace, MCP servers |

### What this means for developers:

**If you use Cursor:** You're in a good spot. The 3.3 → 3.6 acceleration shows Anysphere is shipping faster than ever. Multi-repo automations and auto-review are genuinely useful additions, not fluff.

**If you use Copilot:** The desktop app changes the game. It's no longer just inline completions — Copilot now has a real agent workspace. This is probably the most important Copilot release since the original launch.

**If you use Claude Code:** The plugin directory ecosystem is a positive signal. Anthropic is investing in platform stickiness, not just model quality. Keep an eye on how quickly the plugin ecosystem matures.

**The bottom line:** May 2026 was the month AI coding tools stopped being about just the IDE plugin. The battle has moved to **agent workspaces, cross-repo reasoning, and ecosystem depth**. Pick your tools accordingly.

---

*This analysis was published on May 30, 2026. Check our [comparison table](/ "AI Coding Tools Comparison") for the latest pricing and tool data, or dive into individual tool reviews for [Cursor](/tool/cursor) and [Copilot](/tool/copilot).*
  `.trim(),
  seo: {
    title: "May 2026: Cursor 3.5/3.6, Copilot Desktop Agent, Claude Code Plugins | AI Coding Tools",
    description:
      "Cursor shipped 3 releases in 3 weeks. GitHub Copilot launched a desktop agent. Anthropic opened a plugin directory. A complete May 2026 recap.",
    canonicalPath: "/blog/cursor-35-copilot-desktop-agent-may-2026",
  },
};
const copilotAppGAPost: BlogPost = {
  slug: "github-copilot-desktop-app-ga-june-2026",
  title: "GitHub Copilot Desktop App Goes GA — Here's What Changed Since the Preview",
  description:
    "GitHub's Copilot desktop agent workspace is now generally available with Agent Finder, ARD spec support, and enterprise governance. Here's what changed since the May 2026 preview and what it means.",
  publishedAt: "June 19, 2026",
  category: "Product Updates",
  readTimeMinutes: 5,
  content: `
On June 18, GitHub quietly moved the Copilot Desktop App from technical preview to **general availability** — and along with the GA badge came significant new capabilities that change how you should think about Copilot as a development platform.

Here's what actually changed, what stayed the same, and why the GA release matters more than the preview did.

---

## What's New in the GA Release

### 1. Agent Finder — ARD Spec Goes Live

The most important addition to the GA release is **Agent Finder**, built on the new **Agentic Resource Discovery (ARD)** specification. Think of this as an agent registry and discovery protocol for your organization.

ARD lets you:

- **Discover agents across your org** — no more Slack messages asking who owns that automation for triaging dependencies
- **Govern agent access** — allowlisted agents, approved capabilities, audited executions
- **Supply-chain management for agents** — track which agents depend on which models, MCP servers, and data sources

This quietly turns the Copilot Desktop App from "a nice agent workspace" into an **org-wide governance surface for AI agents** — something no other tool in this category has shipped yet.

### 2. Agent Finder is Integrated into the Desktop App Session Inbox

Agent Finder doesn't live on a separate admin panel. It's integrated into the same session inbox you use for your daily coding sessions. The discovery, governance, and supply-chain views sit alongside your active coding sessions — you manage agents the same way you manage pull requests.

### 3. What Didn't Change (But Matters)

The core experience that launched in the technical preview remains intact:

- **Isolated sessions** — each session gets its own branch and files
- **Steer, validate, ship** — review the plan, diff, run commands, land through PR
- **Workflows and skills** — automate triage, dependency updates, release notes
- **Multi-model access** — Claude, GPT, Gemini, Grok — you're not locked into one model

What's new is the **governance layer** on top. If the preview answered "what can an agent workspace look like?", the GA answers "how do we manage 50 of these across an engineering org?"

---

## Competitive Implications

The GA release with ARD support changes the competitive dynamics in several ways:

### How It Changes the Matchup Against Cursor

Cursor 3.6 is still the strongest AI-native IDE for individual developer velocity. But Copilot's GA release with ARD gives Microsoft a unique enterprise argument: "You can adopt agent workspaces without losing control." For organizations where procurement and security teams have final say, that's a decisive advantage.

### How It Changes the Matchup Against Claude Code

Claude Code remains the best tool for high-autonomy terminal-first sessions. But Copilot's GitHub-native context — issues, PRs, repos, Spaces — gives it a tighter integration loop for teams already deep in GitHub. The ARD spec adds an enterprise readiness layer that Anthropic hasn't matched yet.

### The ARD Spec: A Governance Standard in the Making?

If ARD gains adoption beyond Copilot — and Microsoft has a strong track record of pushing enterprise standards — it could become the de facto way organizations discover, govern, and audit AI agent usage. That would make Copilot's enterprise moat even deeper.

---

## What This Means for Developers

**If you're evaluating agent workspaces today:** The Copilot Desktop App is now subscription-ready. The ARD integration means your security team has a real governance story, not a hand-wavy promise.

**If you already use the preview:** Nothing breaks. Your sessions, workflows, and settings carry over. You gain access to Agent Finder and ARD features immediately.

**If you dismissed Copilot as just autocomplete:** Re-evaluate. The Desktop App GA is a fundamentally different product from the inline suggestions Copilot was known for. It's now a full agent workspace with org-wide governance — and that's a category only Claude Code and Cursor's cloud agents occupy.

---

## The Bottom Line

The Copilot Desktop App going GA with Agent Finder and ARD spec is the most significant Copilot release since the original launch in 2021. It's not just a preview graduation — it's a targeted move into enterprise agent governance that no competitor has answered yet.

*Check our full [Copilot review](/tool/copilot) for updated pricing and detailed capability scores, or go back to the [comparison table](/) to see how it stacks against Cursor, Claude Code, and Windsurf.*
  `.trim(),
  seo: {
    title: "GitHub Copilot Desktop App Goes GA — June 2026 Update | AI Coding Tools",
    description:
      "GitHub's Copilot desktop agent workspace is now GA with Agent Finder and ARD spec. What changed since the May 2026 preview and what it means for developers and engineering orgs.",
    canonicalPath: "/blog/github-copilot-desktop-app-ga-june-2026",
  },
};

const pricingComparisonPost: BlogPost = {
  slug: "ai-coding-tools-pricing-comparison-2026",
  title: "AI Coding Tools Pricing 2026: Complete Comparison Guide — Cursor vs Copilot vs Windsurf vs Codex",
  description:
    "A comprehensive pricing comparison of 8 AI coding tools in 2026: Cursor, GitHub Copilot, Windsurf, OpenAI Codex, Claude Code, Gemini Code Assist, and more. Free tiers, hidden costs, and best value picks.",
  publishedAt: "June 27, 2026",
  category: "Guides",
  readTimeMinutes: 8,
  content: `
![AI Coding Tools Pricing Chart](/blog-pricing-comparison-2026.webp)

Choosing an AI coding tool in 2026 means navigating a pricing landscape that's more fragmented than ever. Cursor has four tiers. Copilot has three. Windsurf keeps it simple with two. Claude Code is bundled into an everything-plan. Gemini Code Assist is actually free.

This guide breaks down every major AI coding tool's pricing in one place — including the hidden costs and usage limits most comparison articles skip.

---

## The Pricing Table

Here's a side-by-side comparison of all major AI coding tools as of June 2026:

| Tool | Free Tier | Pro/Paid Tier | Key Limitation | Best For |
|:----|:---------|:-------------|:---------------|:--------|
| **Gemini Code Assist** | ✅ Full free tier | $22.80/user/mo Business | Free tier rate limited | Individual devs on budget |
| **GitHub Copilot** | ❌ (limited trial) | $10/mo Pro | Completion caps | Students, daily coding |
| **Windsurf** | ✅ Basic free | $20/mo Pro | Free: limited Cascade | Value-conscious devs |
| **Cursor** | ✅ Hobby free | $20/mo Pro | Pro+: $60/mo for more usage | Power users |
| **OpenAI Codex** | ❌ (limited trial) | $20/mo Pro | macOS only | Workflow automation |
| **Claude Code** | ❌ | Included in Claude ($20/mo) | Requires Claude subscription | Deep reasoning |
| **Grok Build** | ❌ | $99/mo SuperGrok | Highest price | Parallel execution |
| **Figma Design Agent** | ✅ Free beta | N/A (beta) | Design-only | UI/UX designers |

---

## Detailed Breakdown

### Gemini Code Assist: The Best Free Tier

Gemini Code Assist's free personal tier is genuinely usable — not a trial-with-expiration like most competitors. You get completions, chat, and code review features with rate limits that are generous enough for daily individual development.

**Business tier ($22.80/user/mo)** adds enterprise connectivity, SSO, compliance tools, and admin controls.

**Bottom line:** If you're an individual developer who doesn't want to pay for AI coding tools, Gemini Code Assist is the clear winner.

### GitHub Copilot: The Baseline

At **$10/mo Pro**, Copilot remains the cheapest paid AI coding tool. The recently GA'd Desktop App adds agent workspace capabilities that were absent at launch.

**Pro ($10/mo):** Completions, chat, and GitHub agent workspace. Usage caps apply.
**Enterprise ($39/user/mo):** Everything in Pro plus security, policy management, and audit logs.

**Bottom line:** The best option if you're already in the GitHub ecosystem and want a low-cost, broad-coverage tool.

### Windsurf: Best Value

Windsurf's **$20/mo Pro** includes unlimited tab completions — a genuine differentiator when Cursor and Copilot both cap monthly usage. The Cascade agent mode is capable but conservative.

**Team pricing:** Available on request, maturing but functional.

**Bottom line:** The best flat-rate value. Great for freelancers and solo developers who write a lot of code.

### Cursor: Feature-Rich with Tier Pressure

Cursor starts at **$20/mo Pro** but power users quickly feel the tier pressure:

| Tier | Price | Key Difference |
|:----|:-----|:---------------|
| Hobby | $0 | Very limited agent requests |
| Pro | $20/mo | Extended limits, frontier models, cloud agents |
| Pro+ | $60/mo | 3x usage on OpenAI/Claude/Gemini |
| Ultra | $200/mo | 20x usage, priority access |

**Bottom line:** The most powerful AI-native IDE, but heavy users pay a premium. Pro+ at $60/mo is where serious daily users end up.

### OpenAI Codex: Single Tier, macOS-Only

Codex Pro at **$20/mo** is straightforward — all features included in one price. The limitation is platform: macOS only, with Record & Replay excluded from several regions at launch.

**Bottom line:** Good value for macOS developers who want workflow recording. Limited usability if you're on Windows or Linux.

### Claude Code: Bundled Value

Claude Code is included in **Claude Pro ($20/mo)** or Claude Team subscriptions. This bundling is great if you already use Claude for other tasks, but expensive if you only want the coding tool.

**Bottom line:** Best value for existing Claude users. Overpriced if you only need an AI coding tool.

### Grok Build: Premium Pricing

At **$99/mo SuperGrok**, Grok Build is the most expensive option. The value proposition is multi-agent parallel execution with model routing — niche but powerful for teams doing high-volume parallel refactoring.

**Bottom line:** Only makes sense for teams that genuinely need parallel agent execution.

---

## Hidden Costs to Watch For

### 1. Usage Caps and Overages

Most pricing pages list a base monthly price. What's less visible:
- **Cursor Pro** has a monthly usage allowance. Exceed it and you either hit a hard stop or pay overage.
- **Copilot Pro** also has monthly limits, though they're generous for typical use.
- **Windsurf Pro** is the only one with genuinely unlimited completions.

### 2. Context Window Cost

Tools that support massive context windows (like Gemini Code Assist's 1M+ tokens) don't charge extra for context size — the pricing is per-token, not per-context. But the API cost behind the tool matters if you're paying directly.

### 3. Team and Enterprise Upcharges

The jump from individual to team pricing can be steep:
- Cursor Teams: **$40/user/mo** (2x Pro)
- Copilot Enterprise: **$39/user/mo** (3.9x Pro)
- Gemini Code Assist Business: **$22.80/user/mo** (free personal → paid business)
- Claude Team: **$30/user/mo** (1.5x individual)

### 4. Model Choice Costs

If a tool lets you bring your own API key, you're on the hook for model usage separately. Tools like Cursor and Copilot include model costs in the subscription; tools like Aider (open source, BYO key) separate them.

---

## Best Value Picks by Budget

### $0/month — Best Free Options
1. **Gemini Code Assist** (most features, genuinely free)
2. **Windsurf Free** (basic features, limited Cascade)
3. **Cursor Hobby** (very limited but functional)

### $10-20/month — Best Paid Options
1. **Copilot Pro** ($10/mo) — cheapest paid, broad coverage
2. **Windsurf Pro** ($20/mo) — best unlimited value
3. **Cursor Pro** ($20/mo) — most powerful at base tier
4. **Codex Pro** ($20/mo) — best for macOS workflow automation

### $20+/month — Best Premium Options
1. **Cursor Pro+** ($60/mo) — heavy Cursor users
2. **Grok Build** ($99/mo) — parallel agent execution teams
3. **Claude Pro** ($20/mo) — if you value deep reasoning

---

## The Bottom Line

**For free:** Gemini Code Assist. No other tool offers a genuinely functional free tier for daily development.
**For value:** Windsurf Pro at $20/mo with unlimited completions.
**For power:** Cursor Pro ($20) → Pro+ ($60) — pay as you grow.
**For simplicity:** Codex Pro at $20/mo with no tier pressure, if you're on macOS.
**For GitHub natives:** Copilot Pro at $10/mo is the cheapest way into a full agent workspace.

The key takeaway? Don't just compare sticker prices. Compare **usage caps, upgrade pressure, and platform fit**. The cheapest tool is the one that actually fits your workflow without forcing you into a pricier tier to get basic things done.

*This guide was published on June 27, 2026. Pricing data reflects the latest information available from official product pages. See our [comparison table](/) for a full tool-by-tool breakdown, or check individual reviews for [Cursor](/tool/cursor), [Copilot](/tool/copilot), [Windsurf](/tool/windsurf), and [Gemini Code Assist](/tool/gemini-code-assist).*
  `.trim(),
  seo: {
    title: "AI Coding Tools Pricing 2026: Complete Comparison Guide",
    description:
      "A complete pricing comparison of 8 AI coding tools in 2026. Free tiers, hidden costs, usage caps, and best value picks for every budget. Updated June 2026.",
    canonicalPath: "/blog/ai-coding-tools-pricing-comparison-2026",
  },
};

const openSourceToolsPost: BlogPost = {
  slug: "best-open-source-ai-coding-tools-2026-aider-cline-continue",
  title: "Best Open Source AI Coding Tools 2026: Aider, Cline & Continue.dev Compared",
  description:
    "A practical comparison of the top open source AI coding tools in 2026: Aider, Cline, and Continue.dev. Installation guides, API cost analysis, and when to choose open source over commercial tools.",
  publishedAt: "June 27, 2026",
  category: "Guides",
  readTimeMinutes: 8,
  content: `
![Open Source AI Coding Tools](/blog-open-source-tools-2026.webp)

Not every developer wants to (or can) pay $20/month for an AI coding assistant. Between subscription fatigue, privacy concerns, and the desire for customization, open source AI coding tools are more relevant than ever in 2026.

This guide covers the three major open source AI coding tools that have emerged as legitimate alternatives to Cursor, Copilot, and Codex:

- **Aider** — CLI-based, multi-file agent editing
- **Cline** — VS Code extension with open agent architecture
- **Continue.dev** — Customizable, modular AI coding platform

---

## Aider: The Terminal-First Multi-File Agent

**GitHub:** [github.com/paul-gauthier/aider](https://github.com/paul-gauthier/aider) — 25k+ stars

Aider is an open source CLI tool that brings agentic multi-file editing to the terminal. You bring your own API key (OpenAI, Anthropic, or any OpenAI-compatible provider), and Aider handles the rest.

### Key Features

- **Multi-file editing:** Aider can plan and execute changes across multiple files from a single prompt — a capability that rivals Cursor's agent mode.
- **Architect/Editor dual-mode:** Aider can work in two modes: Architect mode (plan first, explain before editing) and Editor mode (direct changes). This mirrors the "plan then execute" workflow that good engineering teams follow.
- **Git-native workflow:** Aider automatically creates git commits for each change, with meaningful commit messages. If a change breaks something, you can easily revert.
- **Lazy mode:** For quick, low-risk edits, you can skip the architect planning and go straight to editing.
- **Model agnostic:** Works with GPT-4o, Claude Opus, Gemini, DeepSeek, or any model with an API endpoint.

### Pricing

Aider itself is free and open source (Apache 2.0). Your costs are the API tokens consumed:

- **GPT-4o:** ~$0.03-0.10 per typical session
- **Claude Opus 4.7:** ~$0.15-0.40 per session (for deep reasoning tasks)
- **Gemini 3.5 Flash:** ~$0.01-0.03 per session (best cost-performance balance)

For a developer doing 10-20 editing sessions per day using Gemini 3.5 Flash, monthly API costs range from **$3-18** — significantly cheaper than any commercial subscription.

### Best For
- Terminal-first developers who live in the command line
- Teams that want to audit every AI-generated change (Git-native logs)
- Cost-conscious developers who want pay-per-use instead of subscriptions
- Privacy-sensitive users who control their own API calls

### Limitations
- No GUI or IDE integration (terminal only)
- Requires comfort with command line and API setup
- No inline completions — strictly agent/prompt-based editing
- Session management is manual compared to Cursor or Codex workspaces

---

## Cline: The Open Agent for VS Code

**GitHub:** [github.com/cline/cline](https://github.com/cline/cline) — 30k+ stars

Cline (formerly Claude Dev) is a VS Code extension that brings an agentic coding assistant directly into your editor. It's the most direct open source competitor to Cursor's agent mode.

### Key Features

- **VS Code integration:** Cline runs as a VS Code extension with full access to your editor's file system, terminal, and language server protocol.
- **Independent agents:** Each Cline conversation creates an independent agent that can create and edit files, execute commands, and interact with VS Code's built-in tools.
- **Model flexibility:** Supports OpenAI, Anthropic, Google Gemini, AWS Bedrock, and local models via Ollama.
- **MCP (Model Context Protocol) support:** Cline has first-class MCP support, making it compatible with a growing ecosystem of tools and data sources.
- **Cost control:** You set the maximum spend per task or per session. Cline warns you before expensive model calls.
- **Diff-based code review:** Changes are presented as diffs before applying, with an option to reject individual edits.

### Pricing

Cline is free and open source (Apache 2.0). You pay only for the API tokens consumed by the model. For a full day of coding with GPT-4o, expect API costs of roughly **$0.50-2.00**.

### Best For
- VS Code users who want agentic capabilities without switching editors
- Developers who want granular control over model selection and costs
- Teams building custom AI tooling on top of an open, extensible platform
- Users who want MCP ecosystem access without Cursor's subscription

### Limitations
- Dependent on VS Code — no standalone mode
- Performance varies significantly by model choice
- Setup requires API key configuration (no "sign up and go" convenience)
- Community-focused support rather than dedicated product support

---

## Continue.dev: The Customizable AI Coding Platform

**Website:** [continue.dev](https://continue.dev) — 20k+ GitHub stars

Continue is the most modular open source AI coding platform. Rather than being a single tool, it's a framework that lets you build your ideal AI coding assistant.

### Key Features

- **Extensible architecture:** Continue uses a "context provider" system where you add capabilities as modules. Need codebase indexing? Add a context provider. Need documentation search? Add another.
- **Multi-model routing:** Route different tasks to different models — use Gemini 3.5 Flash for rapid completions, Claude Opus for deep reasoning, and a local model for offline work.
- **Custom slash commands:** Create reusable prompts and workflows as slash commands. \`/refactor\`, \`/explain\`, \`/test\` — your team's common operations become one-command actions.
- **Hub integrations:** Works with Ollama (local models), LM Studio, OpenAI, Anthropic, Google, and more.
- **IDE integrations:** Available as VS Code and JetBrains extensions.
- **Privacy-first:** All processing can run locally if you use a local model, or through your own API keys with major providers.

### Pricing

Continue.dev is free and open source. Costs depend entirely on your model choices:

- **Local models (Ollama):** $0 — all processing on your machine
- **Remote API models:** API token costs only
- **Continue Hub:** A free tier is available for hosted model access; premium tiers for advanced features

### Best For
- Developers who want maximum customization and control
- Teams building internal AI coding tools customized to their stack
- Privacy-first users who want fully local AI coding
- Power users who want to compose multiple models into one workflow

### Limitations
- Steeper learning curve — customization power comes with complexity
- Default configuration may feel basic without context provider setup
- Less polished OOTB experience compared to Cursor or Copilot
- Community-maintained; no dedicated support team

---

## Open Source vs Commercial: The Decision Framework

| Factor | Open Source | Commercial (Cursor/Copilot/etc.) |
|:-------|:-----------|:---------------------------------|
| **Cost** | Pay for API only ($3-18/mo) | Subscription ($10-60/mo) |
| **Privacy** | Full control (local models) | Provider-dependent |
| **Customization** | Unlimited | Limited to product features |
| **Ease of Setup** | API key + install required | One-click sign-up |
| **Inline Completions** | Continue (limited) | All commercial tools have this |
| **Support** | Community | Dedicated teams |
| **Updates** | Community-driven | Regular product updates |
| **Model Choice** | Any API or local model | Product-selected models |

### When to Choose Open Source

**Choose open source if:**
- Your budget is limited or you want pay-per-use pricing
- Privacy is a non-negotiable requirement (especially with local models)
- You want full control over which models serve which tasks
- You're comfortable with CLI tools and API setup
- You want to audit every model interaction

**Choose commercial if:**
- You want a zero-setup, signed-up-and-working experience
- You need inline completions in your daily workflow
- Your team needs dedicated support and SLAs
- You value polish and UX over customization
- You want a unified platform (IDE + agent + automation in one)

---

## The Bottom Line

Open source AI coding tools in 2026 are legitimate alternatives to commercial products — especially for cost-conscious, privacy-sensitive, or customization-oriented developers.

- **Aider** is best for terminal-first, git-native workflows
- **Cline** brings agentic power to VS Code without switching editors
- **Continue.dev** offers unmatched flexibility and local model support

The biggest trade-off isn't capability — it's convenience. Commercial tools win on "open and use" experience; open source wins on cost, privacy, and control. For many developers, a hybrid approach (open source for primary editing, commercial for specific workflows) makes the most sense.

*This guide was published on June 27, 2026. GitHub star counts and pricing reflect the latest available data. See our [comparison table](/) for commercial tool pricing, or check the Budget Developer scenario page [/compare/budget-developer] for recommendations tailored to cost-conscious teams. Also read our [AI Coding Tools Pricing Guide](/blog/ai-coding-tools-pricing-comparison-2026) for a complete pricing overview.*
  `.trim(),
  seo: {
    title: "Best Open Source AI Coding Tools 2026: Aider, Cline & Continue.dev Compared",
    description:
      "A practical comparison of open source AI coding tools in 2026: Aider, Cline, and Continue.dev. API cost analysis, feature comparison, and when to go open source vs commercial.",
    canonicalPath: "/blog/best-open-source-ai-coding-tools-2026-aider-cline-continue",
  },
};

export const blogPosts: BlogPost[] = [
  cursorCompose3OriginPost,
  openaiCodexRecordReplayPost,
  aiCodeSecurityPost,
  copilotAppGAPost,
  pricingComparisonPost,
  openSourceToolsPost,
  cursor35Post,
  claudeCodeCanceledPost,
];

export function getBlogPostsByNewest(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
