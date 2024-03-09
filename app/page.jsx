import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="text-blue-600 text-3xl">HomePage!</div>
      <Link href={"/properties"}>Properties</Link>
    </>
  );
};
export default HomePage;