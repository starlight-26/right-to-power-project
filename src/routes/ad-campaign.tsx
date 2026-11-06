import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

import darkPoster from "@/assets/dont_keep_us_in_the_dark_poster_portrait.png.asset.json";
import lightPoster from "@/assets/power_to_the_people_poster_portrait.png.asset.json";
import lightCarousel from "@/assets/with-without-power-light.png.asset.json";
import transportCarousel from "@/assets/with-without-power-transport.png.asset.json";
import communicationCarousel from "@/assets/with-without-power-communication.png.asset.json";
import heatingCarousel from "@/assets/with-without-power-heating.png.asset.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/ad-campaign")({
  head: () => ({
    meta: [
      { title: "Ad Campaign — The Right to Power" },
      {
        name: "description",
        content:
          "An Instagram awareness carousel and posters about equitable access to energy.",
      },
      { property: "og:title", content: "Ad Campaign — The Right to Power" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      {
        property: "og:description",
        content:
          "An Instagram awareness carousel and posters about equitable access to energy.",
      },
    ],
  }),
  component: AdCampaign,
});

const instagramSlides = [
  {
    src: lightCarousel.url,
    alt: "With power: a desk lamp lights an open book. Without: candles light a dark room.",
    name: "Light",
  },
  {
    src: transportCarousel.url,
    alt: "With power: a person drives a car. Without: a person walks on a wooden path.",
    name: "Transportation",
  },
  {
    src: communicationCarousel.url,
    alt: "With power: a smartphone makes an emergency call. Without: two tin cans connected by string.",
    name: "Communication",
  },
  {
    src: heatingCarousel.url,
    alt: "With power: hands warm in front of an electric heater. Without: a person wraps up in a blanket and hat.",
    name: "Heating",
  },
];

const posters = [
  {
    src: darkPoster.url,
    alt: "Poster reading don't keep us in the DARK over an unlit light bulb on a black background",
    name: "Don't Keep Us in the Dark",
    note: "The problem: an unlit bulb for the millions of households that cannot keep the lights on.",
  },
  {
    src: lightPoster.url,
    alt: "Poster reading POWER to the people over a glowing light bulb on a cream background",
    name: "Power to the People",
    note: "The answer: a lit bulb for the same households once energy becomes affordable.",
  },
];

function InstagramCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div className="mx-auto mt-8 max-w-xl">
      <Carousel setApi={setApi} opts={{ loop: false }} aria-label="Instagram awareness ad carousel">
        <CarouselContent className="ml-0">
          {instagramSlides.map((slide, index) => (
            <CarouselItem key={slide.name} className="pl-0" aria-label={`${index + 1} of ${instagramSlides.length}`}>
              <img
                src={slide.src}
                alt={slide.alt}
                loading={index === 0 ? "eager" : "lazy"}
                className="block aspect-square w-full border-2 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-3 h-10 w-10 border-2 bg-background/90" />
        <CarouselNext className="right-3 h-10 w-10 border-2 bg-background/90" />
      </Carousel>

      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="text-sm font-medium" aria-live="polite">
          {current + 1} / {instagramSlides.length} · {instagramSlides[current].name}
        </p>
        <div className="flex gap-2" aria-label="Choose a carousel slide">
          {instagramSlides.map((slide, index) => (
            <button
              key={slide.name}
              type="button"
              aria-label={`Show slide ${index + 1}: ${slide.name}`}
              aria-current={current === index ? "true" : undefined}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-3 w-3 rounded-full border-2 border-primary transition-colors",
                current === index ? "bg-primary" : "bg-transparent",
              )}
            />
          ))}
        </div>
      </div>
      <p className="mt-3 text-center text-sm text-muted-foreground">
        Swipe on a phone, or use the arrows to view all four slides.
      </p>
    </div>
  );
}

function AdCampaign() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        The Right to Power
      </p>
      <h1 className="text-4xl md:text-6xl">Ad Campaign</h1>

      <section className="mt-12" aria-labelledby="instagram-heading">
        <h2 id="instagram-heading" className="text-center font-display text-3xl">
          Instagram Awareness Ad
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          A four-slide carousel contrasting everyday life with power and without it.
        </p>
        <InstagramCarousel />
      </section>

      <section className="mt-16" aria-labelledby="posters-heading">
        <h2 id="posters-heading" className="font-display text-3xl">Campaign Posters</h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Two posters that say the same thing from opposite ends — one in the dark,
          one in the light.
        </p>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
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
                <h3 className="font-display text-xl">{poster.name}</h3>
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
      </section>
    </main>
  );
}
