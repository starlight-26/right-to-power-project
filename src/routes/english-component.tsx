import { createFileRoute } from "@tanstack/react-router";

import artwork from "@/assets/into-the-wild-artwork.png.asset.json";

export const Route = createFileRoute("/english-component")({
  head: () => ({
    meta: [
      { title: "English Component — Into the Wild | The Right to Power" },
      { name: "description", content: "Cutting Off Connection: our Into the Wild analysis and artwork connecting McCandless’s journey with access to affordable energy." },
      { property: "og:title", content: "English Component — Into the Wild | The Right to Power" },
      { property: "og:description", content: "Cutting Off Connection: our Into the Wild analysis and artwork connecting McCandless’s journey with access to affordable energy." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: EnglishComponent,
});

function EnglishComponent() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">English Component · Into the Wild</p>
      <h1 className="text-4xl leading-tight md:text-6xl">Cutting Off Connection</h1>
      <figure className="mt-10">
        <a href={artwork.url} target="_blank" rel="noopener noreferrer" aria-label="Open Cutting Off Connection artwork full size">
          <img src={artwork.url} width={995} height={768} alt="Cutting Off Connection artwork: reaching hands and city buildings on the left, a man walking toward a forest on the right, and scissors cutting a telephone cord between them." className="block h-auto w-full" />
        </a>
      </figure>
      <article aria-label="Into the Wild analysis" className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed">
        <p>Today, energy is a vital resource families rely on every day. Still, many low income families do not have the financial resources to power basic daily needs from telephonic communication to keeping their house heated. In 2024, about 43.6 million U.S. households struggled with paying their energy bills (Columbia University, Energy Policy Institute). Without these basic resources, many families struggle to survive. Our artwork suggests that access to clean affordable energy is crucial as it allows for the usage of modern necessities such as reliable communication.</p>
        <p>The split composition artwork depicts an urban setting with buildings on the left which represents the contemporary society that McCandless leaves behind when he ventures into the wilderness which is represented by the trees on the right. Additionally, there are bright hands reaching from the left towards the man, mirroring the people McCandless left behind in abandoning his modern life. Furthermore, there is a landline phone on the urban side while its wire is being cut by scissors as it stretches into the woods. By leaving his past life behind and pursuing a life in nature, he is cutting off his ability to communicate with the modern world.</p>
        <p>We learn in chapter three of Into the Wild that McCandless chose to leave his modern lifestyle, forsaking his family, in order to travel to a place with no access to energy or modern comforts. He suffers greatly due to his choice, with chapter two demonstrating how he died from starvation, lacking the energy to regulate his temperature in the harsh Alaskan Wilderness. While McCandless voluntarily chose this life, many American households didn’t but still face the same issues. His struggles mirror the “Heat-or-Die” dilemma that low-income families face as they must choose between paying for heat or food during cold winter months. This supports our position within the PBL as it demonstrates how affordable energy is a necessity for people in the current age.</p>
      </article>
    </main>
  );
}