import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/policy-brief", label: "Policy Brief" },
  { to: "/ad-campaign", label: "Ad Campaign" },
] as const;

export function SiteNav() {
  return (
    <header className="border-b-2 bg-primary text-primary-foreground">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-4">
        <Link to="/" className="font-display text-lg">⚡ The Right to Power</Link>
        <div className="flex gap-4 text-sm font-semibold">
          {links.map((l) => (
            <Link key={l.to} to={l.to} activeOptions={{ exact: true }}
              activeProps={{ className: "text-accent underline underline-offset-4" }}
              className="hover:text-accent">
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
