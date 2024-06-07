import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FaqSection({ data }) {
  return (
    <>
      <Accordion collapsible>
        {data?.map((faq, index) => (
          <AccordionItem value={"item-" + index}>
            <AccordionTrigger>{faq?.question}</AccordionTrigger>
            <AccordionContent>{faq?.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

export default FaqSection;
