import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/ui/NavBar";
const fabricTechSteps = [
  {
    id: "01",
    title: "Choose the best cloth",
    description:
      "Create a shipping manifest in the Revive portal, and ship from any store or warehouse to our US-based hubs.",
    image: "/fabric-1.jpg", // replace with your actual image path
  },
  {
    id: "02",
    title: "Choose the best cloth",
    description:
      "Create a shipping manifest in the Revive portal, and ship from any store or warehouse to our US-based hubs.",
    image: "/fabric-2.jpg", // replace with your actual image path
  },
  {
    id: "03",
    title: "Choose the best cloth",
    description:
      "Create a shipping manifest in the Revive portal, and ship from any store or warehouse to our US-based hubs.",
    image: "/fabric-3.jpg", // replace with your actual image path
  },
];

export const OurFabricTechnology = () => {
  return (
    
    <section className="bg-white text-black">
      {/* Hero Section */}
      <header><NavBar /></header>
      <div className="pt-24 px-6">
        {/* Back link */}
        <Link to="/" className="text-sm underline">
          &lt; Back
        </Link>
        </div>
      <div className="relative h-[60vh] w-full">
        <img
          src="/fabric-hero.jpg" // Replace with your hero image
          alt="Fabric Background"
          className="w-full h-full object-cover"
        />
       
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-6">
          
          <h2 className="text-2xl font-light text-right text-black mb-4">
            Unlock the value in your returns
          </h2>
        </div>
      </div>


      {/* Fabric Steps Section */}
      <div className="flex flex-col gap-20 px-6 py-12">
        {fabricTechSteps.map((step) => (
          <div key={step.id} className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">{step.id}</h3>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="md:w-1/2">
                <h4 className="font-semibold">{step.title}</h4>
                <p className="text-sm mt-1">{step.description}</p>
              </div>
              <div className="md:w-1/2">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full rounded-md shadow-md"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
