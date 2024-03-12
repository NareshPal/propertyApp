import React from "react";
import "@/assets/style/style.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Property App | Properties nearby you",
  description: "Find you dream properties",
  keywords: "rental, sale, purchase, find rental",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
