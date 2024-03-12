import React from "react";

const Infobox = ({
  title,
  bgColor = "bg-gray-100",
  btnColor,
  btnText,
  children,
}) => {
  return (
    <div className={`p-6 rounded-lg shadow-md ${bgColor}`}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 mb-4">{children}</p>
      <a
        href="/properties"
        className={`inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700 ${btnColor}`}
      >
        {btnText}
      </a>
    </div>
  );
};

export default Infobox;
