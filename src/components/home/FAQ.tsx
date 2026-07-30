import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I apply for a job?",
      answer:
        "Browse careers, open the details page, and click the Apply button to submit your application.",
    },
    {
      question: "How does AI Recommendation work?",
      answer:
        "Our AI analyzes your skills, interests, and experience to recommend suitable career paths.",
    },
    {
      question: "Is CareerPilot AI free to use?",
      answer:
        "Yes. All core features including AI Recommendation and AI Cover Letter Generator are free to use.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (

    <section className="mx-auto max-w-5xl px-4 py-20">
      <h2 className="text-center text-4xl font-bold text-violet-700"> Frequently Asked Questions </h2>
      <p className="mt-4 text-center text-gray-500">  Find answers to the most common questions </p>

      <div className="mt-10 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border border-gray-200"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="flex w-full items-center justify-between bg-white px-6 py-5 text-left font-semibold hover:bg-violet-50"
            >
              <span>{faq.question}</span>

              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="bg-gray-50 px-6 py-4 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;