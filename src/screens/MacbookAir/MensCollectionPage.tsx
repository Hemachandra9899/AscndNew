import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { NavBar } from "../../components/ui/NavBar";
import { Separator } from "../../components/ui/separator";

// Dummy product data
const products = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  name: "FRAZER SHIRT",
  price: "Rs. 3,200.00",
  image: "/product-shirt.png",
}));

export const MensCollectionPage = () => {
  return (
    <div className="bg-white text-black">
      {/* Navbar */}
      <header>
        <NavBar />
      </header>

      {/* Page Content */}
      <div className="pt-24 px-6">
        {/* Back link */}
        <Link to="/" className="text-sm underline">
          &lt; Back
        </Link>

        {/* Title */}
        <h2 className="text-2xl font-bold mt-2">Banks Men's Collection</h2>
        <p className="text-sm mt-2 max-w-2xl">
          Explore the Men's Collection from Banks, including rain jackets, puffer jackets, vests,
          and pullovers. The collection includes a wide variety of different colors, fabrics,
          sizes and patterns.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mt-4">
          <Button variant="outline">Full T-shirts</Button>
          <Button variant="outline">Sleeveless</Button>
          <Button variant="outline">Hoodies</Button>
        </div>

        {/* Banner Image */}
        <div className="mt-6 relative">
          <img src="/banner-image.png" alt="Banner" className="w-full max-w-8xl" />
          <Button className="absolute right-4 top-4 bg-black text-white rounded-full px-4 py-1">
            Help?
          </Button>
        </div>

        {/* Product Grid Header */}
        <div className="mt-6 text-sm text-gray-600 flex justify-between items-center">
          <p>107 items</p>
          <p>
            Sorted by <strong>Recommended</strong> •{" "}
            <span className="underline cursor-pointer">Filter →</span>
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {products.map((product) => (
            <Link to="/product" key={product.id} className="text-center cursor-pointer">
              <div>
                <img src={product.image} alt={product.name} className="w-full" />
                <p className="mt-2 text-sm font-medium">{product.name}</p>
                <p className="text-sm">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-6">
          <Button variant="outline">Load More</Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 bg-black text-white px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
          <div className="space-y-2">
            <p>INSTAGRAM ↗</p>
            <p>LINKEDIN ↗</p>
            <p>TWITTER ↗</p>
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            <p>ABOUT</p>
            <p>SHOP</p>
            <p>WORK</p>
            <p>CONTACT</p>
            <p>TERMS & CONDITIONS</p>
          </div>
          <p>@2025</p>
        </div>
        <h1 className="text-5xl md:text-6xl font-[Sarina] text-center">ascnd</h1>
      </footer>
    </div>
  );
};
