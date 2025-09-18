import { component$ } from '@builder.io/qwik';
import { Accordion } from '../ui/Accordion';
import { Card } from '../ui/Card';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default component$<FAQAccordionProps>(({ faqs }) => {
  return (
    <Card.Root class="p-4 pt-2">
      <Accordion.Root class="w-full">
        {faqs.map((faq, index) => (
          <Accordion.Item key={index}>
            <Accordion.Trigger 
              header={index === 0 ? "h2" : undefined}
              class="text-left" // Add this class to enforce left alignment
            >
              {faq.question}
            </Accordion.Trigger>
            <Accordion.Content>
              {faq.answer}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Card.Root> 
  );
});