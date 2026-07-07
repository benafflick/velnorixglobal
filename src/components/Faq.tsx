"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I track my shipment?",
    answer:
      "Simply enter your tracking number on our homepage to receive real-time updates from collection to final delivery. Every shipment is monitored throughout its journey.",
  },
  {
    question: "How long does international shipping take?",
    answer:
      "Delivery times vary depending on the destination and shipping service selected. Estimated delivery windows are provided when your shipment is processed.",
  },
  {
    question: "What happens if my shipment is delayed?",
    answer:
      "If unexpected delays occur due to weather, customs, or operational reasons, your tracking page will be updated immediately with the latest shipment status.",
  },
  {
    question: "Can I change my delivery address after shipping?",
    answer:
      "Address modifications may be possible before the shipment reaches the final delivery stage. Please contact our support team as soon as possible for assistance.",
  },
  {
    question: "Do you provide customer support?",
    answer:
      "Yes. Our customer support team is available 24 hours a day, 7 days a week to assist with tracking inquiries, shipment updates and delivery support.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-5xl px-6">
        {/* Heading */}

        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#1E3A8A]">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-6xl">
            Everything you need
            <br />
            to know.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Find answers to the most common questions about tracking, shipping,
            delivery and customer support.
          </p>
        </div>

        {/* FAQ */}

        <div className="mt-20 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between px-8 py-7 text-left"
              >
                <h3 className="text-lg font-semibold text-slate-900 md:text-xl">
                  {faq.question}
                </h3>

                <ChevronDown
                  size={24}
                  className={`transition-transform duration-300 ${
                    active === index ? "rotate-180 text-[#1E3A8A]" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  active === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-slate-100 px-8 pb-7 pt-6">
                    <p className="leading-8 text-slate-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
