import Hero from "@/components/Hero";
import RecentProperties from "@/components/RecentProperties";
import Infoboxes from "@/components/infoboxes";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Infoboxes />
      <RecentProperties />
    </>
  );
};
export default HomePage;
