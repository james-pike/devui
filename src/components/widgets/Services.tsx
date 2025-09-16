import { component$, useSignal, useComputed$, useStyles$ } from '@builder.io/qwik';

import { Wrapper } from './Wrapper';
import Heading from './Heading';

import styles from './carousel.css?inline';
import { Separator } from '../ui/Separator';
import ServicesTabs from './ServicesTabs';

export default component$(() => {
  useStyles$(styles);

 

  return (
    <>
      <Wrapper>
            <div>
      <div class="space-y-1">
        <h4 class="text-md font-medium leading-none">Our Services</h4>
        <p class="text-sm text-muted-foreground">Premium web design, development, branding and marketing.</p>
      </div>
      <Separator class="mt-3 mb-4" />

  
    </div>
     <ServicesTabs/>
      </Wrapper>
    </>
  );
});