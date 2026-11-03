import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ad-campaign")({
  head: () => ({
    meta: [
      { title: "Ad Campaign — The Right to Power" },
      { name: "description", content: "Our ad campaign for The Right to Power project." },
      { property: "og:title", content: "Ad Campaign — The Right to Power" },
      { property: "og:description", content: "Our ad campaign for The Right to Power project." },
    ],
  }),
  component: AdCampaign,
});

function AdCampaign() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <h1 className="text-4xl md:text-6xl">Ad Campaign</h1>
      <div className="mt-10 border-2 border-dashed bg-card p-8 text-muted-foreground">
        Add your ads here — send me your posters, videos, or slogans and I'll add them.
      </div>
    </main>
  );
}
