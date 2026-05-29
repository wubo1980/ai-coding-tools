import Link from "next/link";

/**
 * Renders the four hub cards under the hero section.
 */
export function ModelHubCards() {
  const cards = [
    {
      title: "AI Coding Tools",
      description:
        "Compare AI coding assistants by pricing, capability, and workflow fit.",
      href: "/",
      icon: <ToolsIcon />,
    },
    {
      title: "AI Models",
      description:
        "Benchmarks, pricing, and task-specific recommendations for frontier models.",
      href: "/models",
      icon: <ModelsIcon />,
    },
    {
      title: "Skills & Plugins",
      description:
        "Agent skills, IDE plugins, and workflow extensions - side-by-side.",
      href: "/skills",
      icon: <SkillsIcon />,
    },
    {
      title: "MCP Platforms",
      description:
        "Model Context Protocol tools, servers, and integration platforms.",
      href: "/mcp",
      icon: <McpIcon />,
    },
  ];

  return (
    <div className="mt-10 grid w-full gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <Link
          key={card.title}
          href={card.href}
          className="group rounded-[28px] border border-white/10 bg-[#121723] p-5 text-left transition hover:border-[#10b981]/40 hover:bg-[#141b29]"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-[#7ef3bf]">
            {card.icon}
          </div>
          <h2 className="mt-5 text-lg font-semibold text-white">{card.title}</h2>
          <p className="mt-3 text-sm leading-7 text-zinc-400">{card.description}</p>
          <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#7ef3bf]">
            Explore
            <span className="transition group-hover:translate-x-1">{"->"}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

/**
 * Renders the tools hub icon.
 */
function ToolsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 7h14M5 12h14M5 17h10" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Renders the models hub icon.
 */
function ModelsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Renders the skills hub icon.
 */
function SkillsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 7h10v10H7z" />
      <path d="M3 12h2M19 12h2M12 3v2M12 19v2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Renders the MCP hub icon.
 */
function McpIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M8 8h8v8H8z" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" strokeLinecap="round" />
    </svg>
  );
}
