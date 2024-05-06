import React from "react";
import FeatureCard from "./FeatureCard";

export default function Features() {
  const feature1 = {
    title: "Dynamic Digital Agility",
    desc: "Zidio Development believes in the power of collaboration, continuous learning, and adapting to the ever-evolving digital landscape.",
  };
  const feature2 = {
    title: "Responsiveness",
    desc: "Zidio Development is highly responsive to user feedback and continuously listen to our customers' needs and adapt our design and features accordingly.",
  };
  const feature3 = {
    title: "Make it simple",
    desc: "Zidio Development prioritize simplicity in website's design and operation.Despite its advanced features, the website is intuitive to use and easy to maintain.",
  };
  const feature4 = {
    title: "Creative Tech Wizards",
    desc: "Our team of skilled developers and creative thinkers specializes in turning complex ideas into user-friendly digital solutions.",
  };
  const feature5 = {
    title: "Excellence in Engineering",
    desc: "From custom software to cutting-edge mobile apps, we're dedicated to engineering excellence and pushing the boundaries of technology.",
  };
  const feature6 = {
    title: "Visionary Software Architects",
    desc: "We're not just developers; we're visionaries committed to delivering impactful software solutions that drive success for businesses globally.",
  };

  return (
    <>
      <div className="container px-4 py-5" id="featured-3">
        <h2 className="display-5 fw-bold pb-2 border-bottom text-center">
          {" "}
          <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  className="bi bi-code-slash"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
                </svg>{" "}
          Why Zidio Development ?
        </h2>
        <div className="row g-4 pt-5 row-cols-1 row-cols-lg-3">
          <FeatureCard {...feature1} />
          <FeatureCard {...feature2} />
          <FeatureCard {...feature3} />
          <FeatureCard {...feature4} />
          <FeatureCard {...feature5} />
          <FeatureCard {...feature6} />
        </div>
      </div>
    </>
  );
}
