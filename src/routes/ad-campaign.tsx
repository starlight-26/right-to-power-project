import { createFileRoute } from "@tanstack/react-router";

import darkPoster from "@/assets/dont_keep_us_in_the_dark_poster_portrait.png.asset.json";
import lightPoster from "@/assets/power_to_the_people_poster_portrait.png.asset.json";

export const Route = createFileRoute("/ad-campaign")({
  head: () => ({
    meta: [
      { title: "Ad Campaign — The Right to Power" },
      {
        name: "description",
        content:
          "Two posters asking the public not to keep households in the dark on energy costs.",
      },
      { property: "og:title", content: "Ad Campaign — The Right to Power" },
      {
        property: "og:description",
        content:
          "Two posters asking the public not to keep households in the dark on energy costs.",
      },
    ],
  }),
  component: AdCampaign,
});

const posters = [
  {
    src: darkPoster.url,
    alt:
      "Poster reading don't keep us in the DARK over an unlit light bulb on a black background",
    name: "Don't Keep Us in the Dark",
    note: "The problem: an unlit bulb for the millions of households that cannot keep the lights on.",
  },
  {
    src: lightPoster.url,
    alt:
      "Poster reading POWER to the people over a glowing light bulb on a cream background",
    name: "Power to the People",
    note: "The answer: a lit bulb for the same households once energy becomes affordable.",
  },
];

function AdCampaign() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        The Right to Power
      </p>
      <h1 className="text-4xl md:text-6xl">Ad Campaign</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Two posters that say the same thing from opposite ends — one in the dark,
        one in the light.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {posters.map((poster) => (
          <figure key={poster.name} className="border-2 bg-card">
            <a href={poster.src} target="_blank" rel="noopener noreferrer">
              <img
                src={poster.src}
                alt={poster.alt}
                loading="lazy"
                className="block w-full border-b-2 object-cover"
              />
            </a>
            <figcaption className="p-5">
              <h2 className="font-display text-xl">{poster.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{poster.note}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-10 text-sm text-muted-foreground">
        Both posters quote the same two sources: a definition of energy
        insecurity from Hernández et al., and the 2024 figure that almost a third
        of U.S. households experienced it, from the U.S. Energy Information
        Administration.
      </p>
    </main>
  );
}
