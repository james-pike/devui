import { component$, Slot } from '@builder.io/qwik';

export const Wrapper = component$(() => {
  return (
    <div class="py-8 md:py-12">
      <Slot />
    </div>
  );
});