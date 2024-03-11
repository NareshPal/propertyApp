import React from "react";
import "@/assets/style/style.css";
import Navbar from "@/components/Navbar";

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
      </body>
    </html>
  );
};

export default MainLayout;
