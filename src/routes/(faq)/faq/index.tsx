import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import FAQAccordion from "~/components/widgets/FAQAccordion";
import FAQTabs from "~/components/widgets/FAQTabs";


import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
<FAQTabs/>
     
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