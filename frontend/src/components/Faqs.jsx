import React, { useState } from "react";

const Faqs = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    { question: "Can I change my plan later?", answer: "" },
    { question: "What is your cancellation policy?", answer: "" },
    { question: "Can other info be added to an invoice?", answer: "" },
    { question: "How does billing work?", answer: "" },
    { question: "How do I change my account email?", answer: "" },
  ];

  return (
    <div className="bg-white py-10 px-4 sm:px-8 lg:px-20">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-500 mt-4">
          Everything you need to know about the product and billing.
        </p>
      </div>

      {/* FAQ List */}
      <div className="flex flex-col items-center">
        <div className="w-full max-w-3xl space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-4"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <h3
                  className={`text-lg sm:text-xl font-medium ${
                    openQuestion === index ? "text-gray-900" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </h3>
                <span
                  className={`text-xl transform transition-transform ${
                    openQuestion === index ? "rotate-180" : ""
                  }`}
                >
                  {openQuestion === index ? "−" : "+"}
                </span>
              </div>
              {openQuestion === index && faq.answer && (
                <p className="mt-2 text-gray-500 text-sm sm:text-base">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
