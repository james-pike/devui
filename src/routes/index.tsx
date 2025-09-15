import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";
import Hero from "~/components/widgets/Hero";

import LandingCards from "~/components/LandingCards";
import VerticalStepper from "~/components/widgets/vertical-stepper";
import Custom from "~/components/widgets/Custom";


export default component$(() => {
  return (
    <>
      <Hero />
      <Custom/>
    <VerticalStepper/>
      <LandingCards/>
      
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};