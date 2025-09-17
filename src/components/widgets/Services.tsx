import { component$,  useStyles$ } from '@builder.io/qwik';

import { Wrapper } from './Wrapper';

import styles from './carousel.css?inline';
import ServicesTabs from './ServicesTabs';

export default component$(() => {
  useStyles$(styles);

 

  return (
    <>
      <Wrapper>
    
       
       
     <ServicesTabs/>
  
      </Wrapper>
    </>
  );
});