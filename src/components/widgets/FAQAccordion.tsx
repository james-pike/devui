import { component$ } from '@builder.io/qwik';
import { Accordion } from '../ui/Accordion';
import { Card } from '../ui/Card';
import Heading from './Heading';
import { Wrapper } from './Wrapper';

export default component$(() => {
  return (
    
            <Card.Root class="p-4 pt-2">
    <Accordion.Root class="w-full">
      <Accordion.Item>
        <Accordion.Trigger header="h2">Is it accessible?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It adheres to the WAI-ARIA design pattern.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>Is it styled?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It comes with default styles that matches the other components&apos;
          aesthetic.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>Is it animated?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It's animated by default, but you can disable it if you prefer.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
    
    </Card.Root> 
    
  );
});
