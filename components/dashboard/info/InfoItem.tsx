"use client";

import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function InfoItem(props: any) {
  const info = props.data;

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="flex items-start gap-3 text-left font-bold w-5/6">
            <div className="text-primary">{info?.id}. </div>
            <p>{info?.title}</p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="text-left pl-6">{info?.text}</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
