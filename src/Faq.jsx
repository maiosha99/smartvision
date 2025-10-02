import React, { useState } from 'react';
import './Faq.css';

const faqData = [
  {
    question: "What types of software do you build?",
    answer: "We build mobile apps, web platforms, internal tools, and scalable cloud-based systems tailored to your needs.",
  },
  {
    question: "Can I request a custom feature?",
    answer: "Absolutely! We specialize in building custom solutions that align with your exact business requirements.",
  },
  {
    question: "How long does a project usually take?",
    answer: "It depends on the project scope, but typically ranges from 4 to 12 weeks depending on complexity.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes! We provide full maintenance and support services post-launch to ensure your product runs smoothly.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
            <div className="faq-question" onClick={() => toggle(index)}>
              {item.question}
              <span className="faq-toggle">{openIndex === index ? '−' : '+'}</span>
            </div>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
