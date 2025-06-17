import React from "react";
import {ShoppingBagModal} from "../../components/ui/ShoppingBagModal";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { NavBar } from "../../components/ui/NavBar";
import  { useState } from "react";
import MenuModal from "../../components/ui/MenuModal"; // Ensure this path is correct


const footerCategories = [
  { title: "Categories", items: ["Sleeve less tshirts", "Jewelry", "Sports", "Electronics", "Indoor"] },
  { title: "Shopping", items: ["Payments", "Delivery options", "Buyer protection"] },
  { title: "Customer care", items: ["Help center", "Terms & Conditions", "Privacy policy", "Returns & refund", "Survey & feedback"] },
  { title: "Pages", items: ["About Us", "Shop", "Contact Us", "Services", "Blog"] },
];

const socialIcons = [
  { name: "Facebook", src: "/-facebook.svg" },
  { name: "Twitter", src: "/-twitter.svg" },
  { name: "Instagram", src: "/-instagram.svg" },
  { name: "Linkedin", src: "/-linkedin.svg" },
];

const footerLinks = [
  { text: "INSTAGRAM", hasArrow: true },
  { text: "LINKEDIN", hasArrow: true },
  { text: "TWITTER", hasArrow: true },
];

const navLinks = [
  { text: "ABOUT" },
  { text: "TERMS & CONDITIONS" },
  { text: "SHOP" },
  { text: "WORK" },
  { text: "CONTACT" },
];

export const MacbookAir = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className="bg-white">
      {/* Fixed Navigation */}
      <header>
        < NavBar />
      </header>



      {/* Hero Section */}
      <section className="h-screen bg-[url('/unsplash-fokquc3ncoy.png')] bg-cover bg-center flex flex-col items-center justify-center text-center px-4 pt-20">
        <h1 className="text-white text-[80px] font-[Sarina]">ascnd</h1>
        <div className="mt-8 flex items-center gap-2 text-black text-2xl cursor-pointer hover:underline">
          <span>Our Fabric Technology Explained</span>
          <span className="rotate-[-45deg]">→</span>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 flex flex-col md:flex-row justify-between items-start gap-4">
  <h2 className="text-6xl font-[Sarina]">ascnd</h2>
  <p className="text-2xl max-w-xl font-semibold text-right">
    We create elegant and engaging designs <br /> for both online and offline
  </p>
</section>



      {/* Categories */}
      <section className="py-20 px-6 space-y-12">
        <div className="grid md:grid-cols-2 gap-10">
        <Link to="/mens" className="flex flex-col items-center">
          <img
          src="/chatgpt-image-jun-4--2025--03-51-20-pm-1.png"
          className="w-full max-w-l"
          alt="Cycling"
          />
         <p className="mt-4 text-2xl font-medium">Cycling T-shirts</p>
         </Link>
          <div className="flex flex-col items-center">
            <img src="/unsplash-u08w8z-ig7q.png" className="w-full max-w-l" alt="Yoga" />
            <p className="mt-4 text-2xl font-medium">Yoga wear</p>
          </div>
         
        </div>
        <div className="flex flex-col items-center">
          <img src="/unsplash-rn78o6ugdke.png" className="w-full max-w-8xl" alt="Running" />
          <p className="mt-4 text-2xl font-medium">Running wear</p>
        </div>
        <div className="text-right">
          <a className="text-xl underline">View All Collections →</a>
        </div>
      </section>

      {/* About Us & Preview Section */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-semibold mb-4">We create elegant and engaging designs for both online and offline</h2>
        <a className="underline text-xl mb-6 inline-block">More about us</a>
        <div className="grid md:grid-cols-2 gap-6">
          <img src="/chatgpt-image-may-28--2025--10-38-10-pm-3.png" alt="Preview1" className="w-full" />
          <img src="/chatgpt-image-may-28--2025--10-38-10-pm-4.png" alt="Preview2" className="w-full" />
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 px-6 grid md:grid-cols-2 gap-8">
        <Card className="bg-cover bg-center h-[400px] relative" style={{ backgroundImage: "url(/unsplash-ousihpbueeq.png)" }}>
          <CardContent className="p-4">
            <span className="text-white text-xl">Coming soon</span>
          </CardContent>
        </Card>
        <Card className="bg-cover bg-center h-[400px] relative" style={{ backgroundImage: "url(/unsplash-nlpn996yksg.png)" }}>
          <CardContent className="p-4">
            <span className="text-white text-xl">Coming soon</span>
          </CardContent>
        </Card>
      </section>

      {/* Help Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button className="bg-black rounded-full px-6 py-3 text-white">Help?</Button>
      </div>

      {/* Footer Section */}
      <footer className="bg-black text-white py-20 px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          {footerCategories.map((cat, i) => (
            <div key={i}>
              <h3 className="text-lg font-bold mb-4">{cat.title}</h3>
              <ul className="space-y-1">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="text-sm">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="bg-white mb-6" />
        <div className="flex justify-between flex-wrap gap-6">
          <div className="flex gap-6">
            {footerLinks.map((link, i) => (
              <div key={i} className="flex items-center text-xl">
                {link.text}
                {link.hasArrow && <span className="ml-2 rotate-[-42deg]">→</span>}
              </div>
            ))}
          </div>
          <div className="flex gap-6 items-center">
            {navLinks.map((link, i) => (
              <div key={i} className="text-sm">{link.text}</div>
            ))}
          </div>
          <div>@2025</div>
        </div>
      </footer>
    </div>
  );
};
