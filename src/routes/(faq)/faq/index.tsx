import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import FAQ2 from "~/components/widgets/FAQ2";
import FAQAccordion from "~/components/widgets/FAQAccordion";
import VerticalStepper from "~/components/widgets/vertical-stepper";


import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
<FAQAccordion/>
     
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