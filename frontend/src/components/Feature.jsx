import React from "react";
import { MessageSquare, Zap, BarChart2, MessageCircle, Tool, Smile } from "react-feather";

const Feature = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Share team inboxes",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      icon: Zap,
      title: "Deliver instant answers",
      description:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
      icon: BarChart2,
      title: "Manage your team with reports",
      description:
        "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.",
    },
    {
      icon: MessageCircle,
      title: "Connect with customers",
      description:
        "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
    },
    {
      icon: Tool,
      title: "Connect the tools you already use",
      description:
        "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
    },
    {
      icon: Smile,
      title: "Our people make the difference",
      description:
        "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-8 lg:px-16">
      {/* Heading Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-sm font-semibold text-red-500 tracking-wide uppercase">
          Features
        </h2>
        <h1 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-snug">
          Analytics that feels like it’s from the future
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      {/* Features Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            {/* Icon container */}
            <div className="flex justify-center items-center w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-gray-100 rounded-xl shadow-md">
              <feature.icon size={28} className="text-gray-800" />
            </div>
            <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
