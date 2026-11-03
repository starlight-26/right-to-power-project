import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Right to Power" },
      { name: "description", content: "A project based learning assignment on The Right to Power." },
      { property: "og:title", content: "The Right to Power" },
      { property: "og:description", content: "A project based learning assignment on The Right to Power." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-20">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">Project Based Learning</p>
      <h1 className="text-5xl leading-tight md:text-8xl">
        The Right <span className="bg-accent px-2">to Power</span>
      </h1>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <Link to="/policy-brief" className="border-2 bg-card p-6 transition-transform hover:-translate-y-1">
          <h2 className="text-2xl">Policy Brief →</h2>
          <p className="mt-2 text-muted-foreground">Read our research and recommendations.</p>
        </Link>
        <Link to="/ad-campaign" className="border-2 bg-card p-6 transition-transform hover:-translate-y-1">
          <h2 className="text-2xl">Ad Campaign →</h2>
          <p className="mt-2 text-muted-foreground">See how we're spreading the message.</p>
        </Link>
      </div>
    </main>
  );
}
