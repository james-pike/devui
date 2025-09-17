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
    
    <Card.Root class=" max-w-3xl mx-auto">
        <Card.Header class=" text-center bg-primary/5">
<Card.Title class="text-xl">
Our Services
    </Card.Title>
    <Card.Description class="text-md">
Premium web design, development, branding and marketing.
    </Card.Description>


        </Card.Header>
       
     <ServicesTabs/>
  
     </Card.Root>
      </Wrapper>
    </>
  );
});