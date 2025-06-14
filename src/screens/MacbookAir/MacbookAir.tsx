import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

// Data for footer categories
const footerCategories = [
  {
    title: "Categories",
    items: [
      "Sleeve less tshirts",
      "Jewelry",
      "Sports",
      "Electronics",
      "Indoor",
    ],
  },
  {
    title: "Shopping",
    items: ["Payments", "Delivery options", "Buyer protection"],
  },
  {
    title: "Customer care",
    items: [
      "Help center",
      "Terms & Conditions",
      "Privacy policy",
      "Returns & refund",
      "Survey & feedback",
    ],
  },
  {
    title: "Pages",
    items: ["About Us", "Shop", "Contact Us", "Services\nBlog"],
  },
];

// Data for social media icons
const socialIcons = [
  { name: "Facebook", src: "/-facebook.svg" },
  { name: "Twitter", src: "/-twitter.svg" },
  { name: "Instagram", src: "/-instagram.svg" },
  { name: "Linkedin", src: "/-linkedin.svg" },
];

// Data for footer links
const footerLinks = [
  { text: "INSTAGRAM", hasArrow: true },
  { text: "LINKEDIN", hasArrow: true },
  { text: "TWITTER", hasArrow: true },
];

// Data for navigation links
const navLinks = [
  { text: "ABOUT" },
  { text: "TERMS & CONDITIONS" },
  { text: "SHOP" },
  { text: "WORK" },
  { text: "CONTACT" },
];

export const MacbookAir = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1280px] h-[7346px] relative">
        {/* Footer section with categories */}
        <div className="absolute w-[1176px] h-[699px] top-[4167px] left-[52px]">
          <div className="absolute top-[324px] left-[72px] [font-family:'Sarina',Helvetica] font-normal text-white text-[300px] tracking-[0] leading-[normal]">
            ascnd
          </div>

          <div className="inline-flex items-start gap-[218px] absolute top-[109px] left-[38px]">
            {footerCategories.map((category, index) => (
              <div
                key={index}
                className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]"
              >
                <div className="relative w-fit mt-[-1.00px] [font-family:'Baloo_2',Helvetica] font-bold text-white text-base tracking-[0] leading-[26px] whitespace-nowrap">
                  {category.title}
                </div>
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="relative w-fit [font-family:'Baloo_2',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <Separator className="absolute w-[509px] h-px top-[52px] left-[38px] bg-white" />

          <div className="absolute top-[17px] left-10 opacity-[0.34] [font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            Enter email address
          </div>

          <Button
            variant="ghost"
            className="absolute top-5 left-[463px] opacity-80 [font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap"
          >
            Submit
          </Button>

          <div className="inline-flex items-start gap-[18px] absolute top-[321px] left-[38px]">
            {socialIcons.map((icon, index) => (
              <img
                key={index}
                className="relative w-6 h-6"
                alt={icon.name}
                src={icon.src}
              />
            ))}
          </div>

          <img
            className="absolute w-[588px] h-[690px] top-0 left-0"
            alt="Chatgpt image"
            src="/chatgpt-image-may-28--2025--10-38-10-pm-5.png"
          />

          <img
            className="absolute w-[583px] h-[686px] top-0 left-[593px]"
            alt="Chatgpt image"
            src="/chatgpt-image-may-28--2025--10-38-10-pm-6.png"
          />
        </div>

        {/* Hero section */}
      
<div className="relative w-full h-[90vh] bg-black bg-[url('/unsplash-fokquc3ncoy.png')] bg-cover bg-center flex flex-col items-center justify-center text-center px-4 sm:px-8">
  
  {/* Title */}
  <h1 className="text-white text-[64px] sm:text-[100px] md:text-[150px] lg:text-[180px] xl:text-[200px] font-[Sarina] font-normal leading-none">
    ascnd
  </h1>

  {/* Fabric Tech Link */}
  <div className="mt-10 flex items-center gap-4  px-6 py-3 rounded-md cursor-pointer hover:underline">
    <span className="text-black text-lg sm:text-xl md:text-2xl font-[Inter] font-normal">
      Our Fabric Technology Explained
    </span>
    <span className="text-black text-lg sm:text-xl md:text-2xl rotate-[-45deg] font-[Inter] font-normal">
      →
    </span>
  </div>
</div>

<div className="absolute w-[623px] top-[1042px] left-[620px] [font-family:'Inter',Helvetica] font-semibold text-black text-4xl tracking-[0] leading-[normal]">
          We create elegant and engaging designs for both online and offline
        </div>
        {/* Category headings */}<div>
{/* Category Section - Moderately Positioned */}
<div className="absolute top-[2100px] left-0 w-full px-4 py-10 space-y-10">
  {/* Side-by-side on md+, stacked reverse on mobile */}
  <div className="flex flex-col-reverse md:flex-row md:justify-center md:gap-10 items-center">
    
    {/* Yoga wear */}
    <div className="flex flex-col items-center md:w-1/2">
      <img
        className="w-full max-w-md h-auto object-cover"
        alt="Yoga wear"
        src="/unsplash-u08w8z-ig7q.png"
      />
      <p className="mt-4 text-[26px] font-medium text-black font-['Inter']">
        Yoga wear
      </p>
    </div>

    {/* Cycling T-shirts */}
    <div className="flex flex-col items-center md:w-1/2">
      <img
        className="w-full max-w-md h-auto object-cover"
        alt="Cycling T-shirts"
        src="/chatgpt-image-jun-4--2025--03-51-20-pm-1.png"
      />
      <p className="mt-4 text-[26px] font-medium text-black font-['Inter']">
        Cycling T-shirts
      </p>
    </div>
  </div>

  {/* Running wear */}
  <div className="flex flex-col items-center">
    <img
      className="w-full max-w-6xl h-auto object-cover"
      alt="Running wear"
      src="/unsplash-rn78o6ugdke.png"
    />
    <p className="mt-4 text-[26px] font-medium text-black font-['Inter']">
      Running wear
    </p>
  </div>
</div>

        {/* Links */}
        <div className="absolute w-[623px] top-[3310px] left-[49px] [font-family:'Inter',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal] underline">
          More about us
        </div>

        <div className="absolute w-[230px] top-[4913px] left-[1011px] [font-family:'Inter',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal] underline">
          View All collections
        </div>

        <div className="absolute w-[230px] top-[5135px] left-[52px] [font-family:'Inter',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
          Latest Updates
        </div>

        <div className="absolute w-[230px] top-[6171px] left-[54px] [font-family:'Inter',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
          Women Wear
        </div>

        <div className="absolute w-[318px] top-[5964px] left-[697px] [font-family:'Inter',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
          Customizeable Jersey
        </div>

        {/* Content sections */}
        
        

        

        <div className="absolute w-[831px] top-[3179px] left-[49px] [font-family:'Inter',Helvetica] font-semibold text-black text-[44px] tracking-[0] leading-[normal]">
          We create elegant and engaging designs for both online and offline
        </div>

        <img
          className="absolute w-[587px] h-[690px] top-[3464px] left-[52px]"
          alt="Chatgpt image"
          src="/chatgpt-image-may-28--2025--10-38-10-pm-3.png"
        />

        <img
          className="absolute w-[583px] h-[686px] top-[3466px] left-[645px]"
          alt="Chatgpt image"
          src="/chatgpt-image-may-28--2025--10-38-10-pm-4.png"
        />
</div>
        {/* Coming soon sections */}
        <Card className="absolute w-[538px] h-[745px] top-[5204px] left-[690px] bg-[url(/unsplash-nlpn996yksg.png)] bg-cover bg-[50%_50%] border-0 rounded-none">
          <CardContent className="p-0">
            <div className="absolute w-[230px] top-[19px] left-4 [-webkit-text-stroke:1px_#000000] [font-family:'Inter',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
              Coming soon
            </div>
          </CardContent>
        </Card>

        <Card className="absolute w-[626px] h-[951px] top-[5204px] left-[52px] bg-[url(/unsplash-ousihpbueeq.png)] bg-[100%_100%] border-0 rounded-none">
          <CardContent className="p-0">
            <div className="absolute w-[230px] top-[33px] left-3.5 [-webkit-text-stroke:1px_#000000] [font-family:'Inter',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
              Coming soon
            </div>
          </CardContent>
        </Card>

       

        {/* Footer */}
        <div className="absolute w-[1280px] h-[709px] top-[6692px] left-0">
          <div className="absolute w-[1280px] h-[669px] top-0 left-0 bg-black" />

          <div className="top-[334px] left-36 text-white text-[300px] absolute [font-family:'Sarina',Helvetica] font-normal tracking-[0] leading-[normal]">
            ascnd
          </div>

          <div className="flex flex-col gap-6 absolute top-[104px] left-[52px]">
            {footerLinks.map((link, index) => (
              <div key={index} className="flex items-center">
                <div className="[font-family:'Inter',Helvetica] font-normal text-white text-[32px] tracking-[0] leading-[normal]">
                  {link.text}
                </div>
                {link.hasArrow && (
                  <div className="ml-4 rotate-[-42.54deg] text-white text-[34px] [font-family:'Inter',Helvetica] font-normal tracking-[0] leading-[normal]">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-6 absolute top-[109px] left-[500px]">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="[font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap"
              >
                {link.text}
              </div>
            ))}
          </div>

          <div className="top-[109px] left-[1140px] text-white text-xl whitespace-nowrap absolute [font-family:'Inter',Helvetica] font-normal tracking-[0] leading-[normal]">
            @2025
          </div>
        </div>

        {/* Logo */}
        <div className="top-[1056px] left-[58px] text-black text-5xl absolute [font-family:'Sarina',Helvetica] font-normal tracking-[0] leading-[normal]">
          ascnd
        </div>

        {/* Navigation bar */}
        <header className="fixed top-0 left-0 w-full h-20 z-50 backdrop-blur-sm px-4 sm:px-8 md:px-16 flex items-center justify-between">
      {/* Logo */}
      <div className="text-black text-3xl sm:text-4xl md:text-5xl font-normal font-[Sarina]">
        ascnd
      </div>

      {/* Right Side - Menu + Bag Button */}
      <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 pr-2 sm:pr-4">
        {/* Bag Button */}
        <Button className="bg-black rounded-full px-4 py-2 sm:px-6 sm:py-2 hover:bg-black/90">
          <span className="font-['Inter'] font-medium text-white text-sm sm:text-base">
            BAG:0
          </span>
        </Button>

        {/* Menu Icon */}
        <img
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-[30px] md:h-[30px]"
          alt="Menu"
          src="/vector.svg"
        />
      </div>
    </header>

        {/* Help button */}
        <div className="fixed w-[134px] h-[85px] top-[693px] left-[1094px] z-40">
          <Button className="relative w-[108px] h-11 top-[17px] left-[26px] bg-black rounded-[38px] hover:bg-black/90">
            <span className="w-[62px] [font-family:'Inter',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[normal]">
              Help?
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};
