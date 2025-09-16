import { component$,  useStyles$ } from '@builder.io/qwik';

import { Wrapper } from './Wrapper';

import styles from './carousel.css?inline';
import { Separator } from '../ui/Separator';
import ServicesTabs from './ServicesTabs';
import { Card } from '../ui/Card';

export default component$(() => {
  useStyles$(styles);

 

  return (
    <>
      <Wrapper>
    
    <Card.Root>
        <Card.Header>
<Card.Title>
Our Services
    </Card.Title>
    <Card.Description>
Premium web design, development, branding and marketing.
    </Card.Description>


        </Card.Header>
       
     <ServicesTabs/>
  
     </Card.Root>
      </Wrapper>
    </>
  );
});