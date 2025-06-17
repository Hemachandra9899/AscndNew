import React from "react";
import { ArrowLeftIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { NavBar } from "../../components/ui/NavBar";
import { Link } from "react-router-dom";
// Product data
const productData = {
  name: "Suva Hardshell Pants Wide",
  price: "€189",
  description:
    "Suva Hardshell Pant Wide combines high functionality with a lifestyle-tech aesthetic.",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  colors: [
    { color: "#979e87", selected: true },
    { color: "#d9d9d9", selected: false },
  ],
};

const recommendedProducts = [
  {
    id: 1,
    name: "FRAZER SHIRT",
    price: "Rs. 8,300.00",
    image: "/chatgpt-image-may-28--2025--11-05-49-pm-3.png",
  },
  {
    id: 2,
    name: "FRAZER SHIRT",
    price: "Rs. 8,300.00",
    image: "/chatgpt-image-may-28--2025--10-38-10-pm-3.png",
  },
  {
    id: 3,
    name: "FRAZER SHIRT",
    price: "Rs. 8,300.00",
    image: "/chatgpt-image-may-28--2025--10-59-03-pm-3.png",
  },
];

const featureCategories = [
  { id: 1, name: "Size & Fit", icon: "/lineicons-zero-size.svg" },
  { id: 2, name: "Impact & Materials", icon: "/mdi-cloth-outline.svg" },
  { id: 3, name: "Details & Care", icon: "/gg-details-more.svg" },
  { id: 4, name: "Shipping/30-day returns", icon: "/gridicons-shipping.svg" },
];

const reviewsData = [
  {
    id: 1,
    name: "Some name",
    date: "18 Sep",
    text: "A quality vest but sticks to your body as soon as your sweat rate gets high.",
    avatar: "/---------2.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Some name",
    date: "18 Sep",
    text: "A quality vest but sticks to your body as soon as your sweat rate gets high.",
    avatar: "/---------2.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Some name",
    date: "18 Sep",
    text: "A quality vest but sticks to your body as soon as your sweat rate gets high.",
    avatar: "/---------2.png",
    rating: 5,
  },
];

export const ProductDetailPage = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full animate-fade-in">
      <div className="bg-white w-full max-w-[1280px] relative px-4 md:px-8">
        {/* Header */}
        <header className="bg-Black">
          <NavBar />
        </header>

        {/* Main */}
        <main className="pt-[90px]">
          {/* Product Section */}
          <section className="relative w-full">
            {/* Back Button */}
            <Link to ="/">
            <Button
              variant="outline"
              className="absolute top-8 left-4 md:left-12 bg-black opacity-60 text-white rounded-full"

            >
              <ArrowLeftIcon className="mr-1" />
              Back
            </Button></Link>

            {/* Product Image */}
            <img
              className="w-full h-[725px] object-cover rounded-xl"
              alt="Suva Hardshell Pants"
              src="/chatgpt-image-jun-10--2025--01-11-30-am-2.png"
            />
            {/* Thumbnails */}
            <Card className="absolute top-[480px] left-[57px] w-[326px] bg-white/75 backdrop-blur-md border border-white/10 rounded-lg max-md:static max-md:w-full max-md:mt-4">
              <CardContent className="p-4 flex flex-row md:flex-row justify-between items-center gap-4">
                <img className="w-[84px] h-[103px] object-cover rounded-lg" alt="thumb1" src="/chatgpt-image-jun-10--2025--12-42-34-am-2.png" />
                <img className="w-20 h-[103px] object-cover rounded-lg" alt="thumb2" src="/chatgpt-image-jun-10--2025--12-49-26-am-2.png" />
                <img className="w-[62px] h-[103px] object-cover rounded-lg" alt="thumb3" src="/chatgpt-image-jun-10--2025--01-11-30-am-3.png" />
              </CardContent>
            </Card>

            {/* Info Cards */}
            <div className="absolute top-[107px] right-[37px] space-y-4 max-md:static max-md:w-full max-md:mt-4 max-md:px-2">
              {/* Info Card */}
              <Card className="bg-white/75 backdrop-blur-md border border-white/10 rounded-lg w-[387px] max-md:w-full">
                <CardContent className="p-5">
                  <div className="space-y-4">
                    <div>
                      <h2 className="font-medium text-base flex justify-between">
                        <span>{productData.name}</span>
                        <span>{productData.price}</span>
                      </h2>
                      <p className="text-xs mt-2">{productData.description}</p>
                    </div>
                    <div>
                      <p className="font-medium text-[15px] mb-2">Race Type</p>
                      <div className="relative">
                        <div className="w-full h-2 bg-white rounded-full" />
                        <div className="absolute top-0 left-0 w-[248px] h-2 bg-black rounded-full" />
                      </div>
                      <div className="flex justify-between mt-2 text-[11px] opacity-80">
                        <span>Normal</span>
                        <span>Medium</span>
                        <span>Extreme</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Color and Size */}
              <Card className="bg-white/75 backdrop-blur-md border border-white/10 rounded-lg w-[387px] max-md:w-full">
                <CardContent className="p-6">
                  <h3 className="font-medium text-lg mb-4">Color</h3>
                  <div className="flex gap-2">
                    {productData.colors.map((c, i) => (
                      <div
                        key={i}
                        className={`w-[17px] h-[17px] rounded-full ${c.selected ? "border-2 border-[#0c98ff]" : ""}`}
                        style={{ backgroundColor: c.color }}
                      />
                    ))}
                  </div>

                  <h3 className="font-medium text-lg mt-4">Size</h3>
                  <div className="text-lg mt-2 opacity-60 flex flex-wrap gap-2">
                    {productData.sizes.map((size) => (
                      <span key={size}>{size}</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            

            {/* Add to Bag */}
              <div className="fixed bottom-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-t border-black/10">
            <div className="flex justify-center items-center h-[98px] px-4">
              <Button className="w-full max-w-[354px] h-[59px] bg-black rounded-full text-white text-lg hover:scale-105 transition-transform">
                {productData.price} - Add to Bag
              </Button>
            </div>
          </div>

            {/* Features */}
            <div className="w-full bg-[#2d2b2c] text-white p-8">
              <h2 className="text-2xl mb-4">Features</h2>
              <p className="opacity-70 text-lg leading-relaxed max-w-[815px]">
                A weatherproof outer layer built for movement and refined with SOAR engineering.
                Constructed from a three-layer waterproof membrane, the Rainmac balances full protection with structured breathability.
              </p>
              <div className="flex justify-end mt-4">
                <a href="#" className="underline text-lg hover:text-gray-300 transition-colors">All features of this product</a>
                <span className="ml-2">→</span>
              </div>
            </div>
          </section>

          {/* Feature Categories */}
          <section className="flex flex-wrap h-auto bg-[#2d2b2c] text-white">
  {featureCategories.map((f) => (
    <div
      key={f.id}
      className="w-1/2 md:w-1/4 flex flex-col items-center justify-center border-r border-white/20 last:border-none p-6 hover:bg-[#3d3b3c] transition-colors"
    >
      <img className="w-[66px] h-[66px] mb-4" alt={f.name} src={f.icon} />
      <h3 className="text-lg text-center">{f.name}</h3>
    </div>
  ))}
</section>


          {/* Recommended Products */}
          <section className="mt-16 px-4 md:px-12">
            <h2 className="text-2xl mb-8">Recommended for you</h2>
            <div className="flex flex-wrap gap-8 justify-center md:justify-start">
              {recommendedProducts.map((item) => (
                <div key={item.id} className="flex flex-col w-full sm:w-[48%] md:w-[30%] hover:scale-105 transition-transform">
                  <img className="h-[434px] object-cover w-full rounded-xl" alt={item.name} src={item.image} />
                  <div className="text-xl font-semibold mt-2 flex justify-between">
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Separator className="w-full h-1.5 bg-[#d9d9d9] my-16" />

          {/* Reviews */}
          <section className="px-4 md:px-8 mb-16">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
              <img className="w-full md:w-[390px] h-[196px] object-cover rounded-lg" alt="Ratings" src="/screenshot-2025-05-30-at-10-30-54-pm-1.png" />
              <h2 className="text-2xl font-semibold">(60) Reviews</h2>
              <Button className="bg-black text-white rounded-lg h-[34px] w-[179px] hover:bg-gray-800 transition-colors">
                Write Review
              </Button>
            </div>

            <div className="flex flex-col md:flex-row gap-12">
              <div className="w-full md:w-[378px]">
                <Separator className="mb-12 h-0.5 bg-[#d9d9d9]" />
                <img className="w-full h-[147px] object-cover rounded-md" alt="Rating spread" src="/screenshot-2025-05-30-at-10-47-15-pm-1.png" />
              </div>

              <div className="flex-1 space-y-8">
                {reviewsData.map((r) => (
                  <Card key={r.id} className="rounded-[48px] shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-8 relative">
                      <div className="flex items-center">
                        <img className="w-[70px] h-[70px] object-cover rounded-full" alt="User" src={r.avatar} />
                        <span className="ml-4 text-lg font-medium">{r.name}</span>
                        <div className="ml-auto flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <img key={i} className="w-[26px] h-[25px]" alt="Star" src="/vector.svg" />
                          ))}
                        </div>
                      </div>
                      <p className="mt-8 text-base leading-relaxed">{r.text}</p>
                      <p className="absolute bottom-4 left-8 text-sm text-gray-500">{r.date}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
