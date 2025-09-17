import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";
import VerticalStepper from "~/components/widgets/vertical-stepper";
import MultipleSlides from "~/components/widgets/MultipleSlides";
import Reviews from "~/components/widgets/Reviews";
import Services from "~/components/widgets/Services";
import FAQTabs from "~/components/widgets/FAQTabs";


export default component$(() => {
  return (
    <>
    <Services/>
      <VerticalStepper/>
    <MultipleSlides/>
    
      <Reviews/>
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