import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Right to Power" },
      { name: "description", content: "A project based learning assignment on The Right to Power." },
      { property: "og:title", content: "The Right to Power" },
      { property: "og:description", content: "A project based learning assignment on The Right to Power." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
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
      <section aria-labelledby="about-the-cause" className="mt-12 border-t-2 pt-8">
        <h2 id="about-the-cause" className="text-2xl md:text-3xl">About the Cause</h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed">
          From air conditioning in homes to powering electronics like phones, energy has become a necessary resource in modern life. Yet in 2024, approximately 43.6 million U.S. households struggled with paying energy bills (Columbia University, Energy Policy Institute). This demonstrates the disparity in access to essential energy, forcing households to choose between paying utility bills and meeting other needs. As energy has become increasingly necessary for daily life, equal access must be addressed as a matter of public welfare. The Power to the People Policy calls on the federal government to protect energy as a natural right by guaranteeing equitable access through reforms to existing assistance programs and utility protections while prioritizing financial sustainability.
        </p>
      </section>
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
