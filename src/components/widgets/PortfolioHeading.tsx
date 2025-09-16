import { component$ } from '@builder.io/qwik';
import { Separator } from '../ui/Separator';
export default component$(() => {
  return (
    <div>
      <div class="space-y-1">
        <h4 class="text-md font-medium leading-none">Portfolio</h4>
        <p class="text-sm text-muted-foreground">Browse past client case studies.</p>
      </div>
      <Separator class="mt-3 mb-4" />
      <div class="flex h-5 items-center space-x-4 text-sm">
        <div>Customizable</div>
        <Separator orientation="vertical" />
        <div>Accessible</div>
        <Separator orientation="vertical" />
        <div>Optimized for you</div>
      </div>
    </div>
  );
});
