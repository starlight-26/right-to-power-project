import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/policy-brief")({
  head: () => ({
    meta: [
      { title: "Policy Brief — The Right to Power" },
      { name: "description", content: "Our policy brief for The Right to Power project." },
      { property: "og:title", content: "Policy Brief — The Right to Power" },
      { property: "og:description", content: "Our policy brief for The Right to Power project." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PolicyBrief,
});

function PolicyBrief() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-4xl md:text-6xl">Policy Brief</h1>
      <div className="mt-10 border-2 border-dashed bg-card p-8 text-muted-foreground">
        Add your policy brief here — paste the text or send me the file and I'll add it.
      </div>
    </main>
  );
}
