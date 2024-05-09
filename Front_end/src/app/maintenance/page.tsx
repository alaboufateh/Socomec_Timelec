import CardBlue from "@/shared/CardBlue/CardBlue";
import ListMaintenance from "@/shared/ListMaintenance/ListMaintenance";
import Maintenance from "@/shared/Maintenance/Maintenance";
import Navbar from "@/shared/Navbar/Navbar";
import React from "react";

function page() {
  return (
    <div className="w-defaultwidth mx-auto md:flex  ">
      <div className="basis-3/5">
        <Navbar />
        <CardBlue />
        <Maintenance />
      </div>
      <div className="basis-2/5 ">
        <ListMaintenance />
      </div>
    </div>
  );
}

export default page;
