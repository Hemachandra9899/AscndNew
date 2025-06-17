import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MacbookAir } from "./screens/MacbookAir";
import {MensCollectionPage} from "./screens/MacbookAir/MensCollectionPage";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import  { ProductDetailPage } from "./screens/MacbookAir/ProductDetailPage";
import { OurFabricTechnology } from "./screens/MacbookAir/OurFabricTechnology";


createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MacbookAir />} />
      <Route path="/mens" element={<MensCollectionPage />} />
      <Route path="/product" element={<ProductDetailPage />} />
      <Route path="/fabric" element={<OurFabricTechnology />} />//must use lowercase letters 
    </Routes>
  </BrowserRouter>
  </StrictMode>,
);
