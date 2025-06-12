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
        <div className="absolute w-[1500px] h-[975px] top-0 left-0 bg-black bg-[url(/unsplash-fokquc3ncoy.png)] bg-cover bg-[50%_50%]">
          <div className="w-[850px] top-[299px] left-[330px] text-white text-[200px] absolute [font-family:'Sarina',Helvetica] font-normal tracking-[0] leading-[normal]">
            ascnd
          </div>

          <div className="absolute w-[623px] h-9 top-[913px] left-[497px]">
            <div className="absolute w-[623px] top-0 left-0 opacity-[0.71] [font-family:'Inter',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal] underline">
              Our Fabric Technology Explained
            </div>

            <div className="top-0 left-[379px] rotate-[-49.57deg] opacity-[0.71] text-black text-2xl absolute [font-family:'Inter',Helvetica] font-normal tracking-[0] leading-[normal]">
              →
            </div>
          </div>
        </div>

        {/* Category headings */}
        <div className="absolute w-[180px] top-[1832px] left-[646px] [font-family:'Inter',Helvetica] font-medium text-black text-[26px] tracking-[0] leading-[normal]">
          Yoga wear
        </div>

        <div className="absolute w-[1002px] top-[2102px] left-[55px] [font-family:'Inter',Helvetica] font-medium text-black text-[26px] tracking-[0] leading-[normal]">
          Cycling T-shirts
        </div>

        <div className="absolute w-[1002px] top-[2979px] left-[55px] [font-family:'Inter',Helvetica] font-medium text-black text-[26px] tracking-[0] leading-[normal]">
          Running wear
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
        <div className="absolute w-[623px] top-[1042px] left-[620px] [font-family:'Inter',Helvetica] font-semibold text-black text-4xl tracking-[0] leading-[normal]">
          We create elegant and engaging designs for both online and offline
        </div>

        <img
          className="absolute w-[591px] h-[562px] top-[1254px] left-[637px]"
          alt="Unsplash"
          src="/unsplash-u08w8z-ig7q.png"
        />

        <img
          className="absolute w-[1179px] h-[777px] top-[2178px] left-[49px] object-cover"
          alt="Unsplash"
          src="/unsplash-rn78o6ugdke.png"
        />

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

        <img
          className="absolute w-[556px] h-[834px] top-[1254px] left-[49px] object-cover"
          alt="Chatgpt image"
          src="/chatgpt-image-jun-4--2025--03-51-20-pm-1.png"
        />

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
        <header className="fixed w-[1500px] h-[86px] top-0 left-0 z-50  backdrop-blur-sm">
         <div className="top-[25px] left-[120px] text-black text-5xl absolute [font-family:'Sarina',Helvetica] font-normal tracking-[0] leading-[normal]">
  ascnd
</div>

<img
  className="absolute w-[315px] h-[30px] top-[34px] left-[1176px]"
  alt="Menu"
  src="/vector.svg"
/>

<Button className="absolute w-[108px] h-11 top-[29px] left-[981px] bg-black rounded-[38px] hover:bg-black/90">
  <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[17px] tracking-[0] leading-[normal]">
    BAG:0
  </span>
</Button>

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
