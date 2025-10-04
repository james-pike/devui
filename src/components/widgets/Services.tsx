import { component$,  useStyles$ } from '@builder.io/qwik';

import { Wrapper } from './Wrapper';

import styles from './carousel.css?inline';
import Custom from './Custom';
import { Card } from '../ui/Card';
import Heading from './Heading';

export default component$(() => {
  useStyles$(styles);

 

  return (
    <>
      <Wrapper>
<Card.Root>
  <Card.Header>
    {/* <img src='' class="h-24 bg-primary"></img> */}
    <Heading/>

  </Card.Header>

  <Card.Content>


<Custom/>
  </Card.Content>
         </Card.Root>    

  
      </Wrapper>
    </>
  );
});