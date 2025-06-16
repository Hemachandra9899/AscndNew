import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MacbookAir } from "./screens/MacbookAir";
import {MensCollectionPage} from "./screens/MacbookAir/MensCollectionPage";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import  { ProductDetailPage } from "./screens/MacbookAir/ProductDetailPage";


createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MacbookAir />} />
      <Route path="/mens" element={<MensCollectionPage />} />
      <Route path="/product" element={<ProductDetailPage />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>,
);
