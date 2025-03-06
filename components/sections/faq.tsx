"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What exactly do you do?",
    answer:
      "I provide AI education and consulting to help business owners and decision-makers understand how AI can benefit their operations. Instead of selling AI tools, I guide you through the strategic process, allowing you to explore AI opportunities, assess potential ROI, and avoid common pitfalls. When you're ready to implement AI, I connect you with trusted agency partners specializing in execution.",
  },
  {
    question: "Is this consultation a sales call?",
    answer:
      "No. My discovery call is 100% educational and strategy-focused—it's about understanding your business and discussing how AI could be applied. If AI isn't a good fit for you, I'll tell you. If it is, I'll provide recommendations and, if needed, introduce you to implementation partners.",
  },
  {
    question: "Will I receive AI implementation services from you?",
    answer:
      "I don't build or sell AI tools myself—I focus on education and strategy. However, I work with a network of AI implementation experts who can handle the technical side. If you decide to move forward with AI, I can connect you with the right professionals for the job.",
  },
  {
    question: "How do I know if AI is right for my business?",
    answer:
      "AI is not a one-size-fits-all solution. That's why I offer consulting—to help you determine if and where AI could make a real impact on your business. If AI isn't the right fit for your current needs, I'll tell you honestly rather than push unnecessary solutions.",
  },
  {
    question: "What happens after the consultation?",
    answer:
      "After the discovery call, you'll receive a personalized AI Discovery Report (PDF) summarizing our discussion, outlining potential AI opportunities, and providing recommendations. From there, you can decide whether to move forward with AI on your own, book a deeper strategy session, or work with one of my implementation partners.",
  },
  {
    question: "How much does it cost?",
    answer:
      "The initial discovery call is free, so you can explore AI possibilities risk-free. If you need a more in-depth AI strategy consultation, I offer paid sessions tailored to your business needs.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "AI can be applied across many industries, including e-commerce, SaaS, finance, customer service, real estate, and more. If you're not sure whether AI applies to your industry, book a call, and we'll explore the possibilities together.",
  },
  {
    question: "I'm new to AI—will this be too technical for me?",
    answer:
      "Not at all! My goal is to make AI easy to understand and help business leaders make informed, strategic decisions without overwhelming technical jargon.",
  },
  {
    question: "How do I book a consultation?",
    answer:
      "Booking is easy—just click the button below to schedule a free discovery call. You'll pick a time that works for you, and we'll meet via video or voice call to discuss your AI needs.",
  },
]

export default function Faq() {
  return (
    <section className="py-24 relative">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            className="heading-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h2>
          <motion.p
            className="paragraph max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything you need to know about our AI consulting services
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-russian-violet/30">
                <AccordionTrigger className="text-white hover:text-blue-violet transition-colors text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-cool-gray">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

