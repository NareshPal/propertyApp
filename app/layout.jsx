import React from "react";
import "@/assets/style/style.css";

export const metadata = {
  title: "Property App | Properties nearby you",
  description: "Find you dream properties",
  keywords: "rental, sale, purchase, find rental",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
