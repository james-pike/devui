import { component$,  useStyles$ } from '@builder.io/qwik';

import { Wrapper } from './Wrapper';

import styles from './carousel.css?inline';
import ServicesTabs from './ServicesTabs';
import { Card } from '../ui/Card';

export default component$(() => {
  useStyles$(styles);

 

  return (
    <>
      <Wrapper>
    
    <Card.Root class="bg-primary/5">
        <Card.Header class="bg-white/10 text-center">
<Card.Title class="text-xl">
Our Services
    </Card.Title>
    <Card.Description class="text-lg">
Premium web design, development, branding and marketing.
    </Card.Description>


        </Card.Header>
       
     <ServicesTabs/>
  
     </Card.Root>
      </Wrapper>
    </>
  );
});