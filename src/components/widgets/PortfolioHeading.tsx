import { component$ } from '@builder.io/qwik';
import { Separator } from '../ui/Separator';
export default component$(() => {
  return (
    <div>
      <div class="space-y-1 pt-3">
        <h4 class="text-md font-medium leading-none">Design Services</h4>
        <p class="text-sm text-muted-foreground">Our designs explore color, font, styles, headings, vector graphics, animations, including a full design system.</p>
      </div>
      <Separator class="mt-3 mb-4" />
      <div class="flex h-5 items-center space-x-4 text-sm">
        <div>Colors</div>
        <Separator orientation="vertical" />
        <div>Fonts</div>
        <Separator orientation="vertical" />
        <div>Headings</div>
      </div>
    </div>
  );
});
