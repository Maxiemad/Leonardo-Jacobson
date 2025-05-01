
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection from './animated-section';

const FAQSection = () => {
  const faqs = [
    {
      question: "What is Presence?",
      answer: "Presence is a state of conscious awareness where you are fully present in the moment, free from thoughts about past or future. It is a direct experience of the here and now, where you are intimately connected with life as it is unfolding."
    },
    {
      question: "How do I begin my awakening journey?",
      answer: "Beginning your awakening journey starts with developing awareness of your present moment experience. Start by recognizing when you are lost in thought and gently bring yourself back to the present moment through your breath, bodily sensations, or simply being aware of your surroundings."
    },
    {
      question: "What can I expect from Leonard's retreats?",
      answer: "Leonard's retreats provide a supportive environment for deepening into presence. They typically include guided meditations, dialogues with Leonard, group sharing, and practices to help you become more present. Many participants experience profound shifts in consciousness and leave with practical tools to maintain presence in daily life."
    },
    {
      question: "Is spiritual awakening a one-time event?",
      answer: "Spiritual awakening is both an event and a process. You might have moments of profound realization, but fully embodying these realizations in everyday life is a journey that unfolds over time. It involves repeatedly returning to presence and gradually allowing it to transform every aspect of your life."
    },
    {
      question: "How can I access Leonard's Q&A sessions?",
      answer: "Leonard's Q&A sessions are available on his website. You can access them at https://www.leonardjacobson.com/teachings/Q-and-A where he addresses common questions about the awakening process."
    }
  ];

  return (
    <section className="py-20">
      <div className="container max-w-3xl mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-presence-800">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-700">
            Find answers to common questions about Leonard's teachings and the awakening process.
          </p>
        </AnimatedSection>

        <AnimatedSection className="bg-white rounded-xl shadow-md p-2">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="border-b last:border-b-0">
                <AccordionTrigger className="text-left py-6 px-4 hover:no-underline hover:bg-gray-50 rounded-lg text-presence-800">
                  <span className="font-medium text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-6 pt-2 text-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQSection;
