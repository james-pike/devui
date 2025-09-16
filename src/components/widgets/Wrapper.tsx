import { component$, Slot } from '@builder.io/qwik';

export const Wrapper = component$(() => {
  return (
    <div class="py-10 md:py-14">
      <Slot />
    </div>
  );
});