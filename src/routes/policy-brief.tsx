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
      <article aria-label="Power to the People policy brief" className="mt-10 space-y-6 text-lg leading-relaxed">
        <p>
          Implementing the Power to the People Policy (P Cubed) will make power more accessible to those across the United States. P Cubed promotes the expansion of existing energy assistance programs in order to give more struggling families basic energy and utility necessities. This will be executed by using the existing budget for energy as categorical grants to states. A condition of the categorical grant will be that funded programs will provide progressive utility aid that favors low-income households. This ensures that those most in need get the most attention from assistance programs. Furthermore, P Cubed will require applications and documentation for related programs to be streamlined. Many households, particularly those of immigrants, elderly, disabled, and children, struggle with or avoid filling out complicated and taxing application procedures (APPRISE Incorporated). By expediting the application process, P Cubed encourages more eligible households to get the assistance they need and qualify for.
        </p>
        <p>
          Critics may argue that recognizing energy as a natural right would place unsustainable financial burdens on the federal government, increasing public spending and potentially worsening the national debt. However, the Power to the People Policy does not provide unlimited or free energy for all citizens. Instead, it establishes a minimum standard of energy access through targeted assistance and reforms to existing programs. By requiring a sustainable funding plan, the federal government can address energy insecurity without creating additional financial obligations.
        </p>
      </article>
      <div className="mt-10 border-t border-foreground/15 pt-8">
        <a
          href="https://docs.google.com/document/d/1Xzg0Kmzq0wMKhpJiPPJaZOMYK9hzhpQ1Nb6cf_ovxro/edit?usp=drivesdk"
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 border-2 border-foreground bg-accent px-6 py-3 font-display text-sm uppercase tracking-wider shadow-brutal transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none sm:w-auto"
        >
          Read the Full Paper <span aria-hidden="true">↗</span>
        </a>
        <p className="mt-4 text-sm text-muted-foreground">Expands on the policy brief and includes sources.</p>
      </div>
    </main>
  );
}
