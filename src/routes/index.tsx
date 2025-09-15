import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";
import VerticalStepper from "~/components/widgets/vertical-stepper";
import MultipleSlides from "~/components/widgets/MultipleSlides";


export default component$(() => {
  return (
    <>
      
    <MultipleSlides/>
    <VerticalStepper/>
      
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