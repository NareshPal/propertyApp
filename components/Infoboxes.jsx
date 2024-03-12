import React from "react";
import Infobox from "./Infobox";

const Infoboxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Infobox
            title="For Renters"
            bgColor="bg-gray-100"
            btnColor="bg-black"
            btnText="Browse Properties"
          >
            Find your dream rental property. Bookmark properties and contact
            owners.
          </Infobox>
          <Infobox
            title="For Property Owners"
            bgColor="bg-blue-100"
            btnColor="bg-blue-500"
            btnText="Add Property"
          >
            List your properties and reach potential tenants. Rent as an airbnb
            or long term.
          </Infobox>
        </div>
      </div>
    </section>
  );
};

export default Infoboxes;
