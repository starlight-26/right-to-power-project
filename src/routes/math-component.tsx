import { createFileRoute } from "@tanstack/react-router";

import mathGraph from "@/assets/math-analysis-pbl.jpeg.asset.json";

export const Route = createFileRoute("/math-component")({
  head: () => ({
    meta: [
      { title: "Math Component — Energy Insecurity by Income | The Right to Power" },
      {
        name: "description",
        content:
          "Our Math Component analysis uses a step graph to show how household energy insecurity changes across annual income levels.",
      },
      {
        property: "og:title",
        content: "Math Component — Energy Insecurity by Income | The Right to Power",
      },
      {
        property: "og:description",
        content:
          "Our Math Component analysis uses a step graph to show how household energy insecurity changes across annual income levels.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: MathComponent,
});

function MathComponent() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        The Right to Power · Math Component
      </p>
      <h1 className="text-4xl leading-tight md:text-6xl">Energy Insecurity by Income</h1>
      <article
        aria-label="Energy insecurity mathematical analysis"
        className="mt-10 max-w-3xl text-lg leading-relaxed"
      >
        <p>
          To better visualize how energy insecurity is affecting U.S. citizens at different income levels, we converted data from the U.S. Energy Information Administration (Table HC11.1 Household Energy Insecurity, 2024) into a graphical representation (as shown in the figure below). The x-axis represents the income of the American in 10,000 dollars per year. The y-axis represents the percent of households in that income bracket that experiences energy insecurity (EI). In order to ensure better representation of the data, we excluded income brackets with one-sided limits and used each 2-sided limit to create a step function to represent each value range. As shown by the general shape of the graph, the derivative/slope is negative, meaning that the y-value (percentage experiencing EI) decreases as the x-value (annual income) increases. This effectively visually and statistically demonstrates the relationship between annual income and the ability to pay, and therefore access, energy.
        </p>
      </article>
      <figure className="mt-10 border-2 bg-card">
        <a
          href={mathGraph.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open energy insecurity step graph full size"
        >
          <img
            src={mathGraph.url}
            width={1920}
            height={1080}
            alt="Step graph showing household energy insecurity decreasing as annual income rises, with red horizontal segments, green endpoints, and the source data table at left."
            className="block h-auto w-full"
          />
        </a>
      </figure>
    </main>
  );
}
