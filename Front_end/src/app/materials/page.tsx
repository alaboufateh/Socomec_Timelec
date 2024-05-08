import CardBlue from "@/shared/CardBlue/CardBlue";
import Maintenance from "@/shared/Maintenance/Maintenance";
import Navbar from "@/shared/Navbar/Navbar";
import React from "react";

function materials() {
  return (
    <div className="w-defaultwidth mx-auto md:flex  ">
      <div className="basis-3/5">
        <Navbar />
        <CardBlue />
        <Maintenance />
      </div>
      <div className="basis-2/5 "></div>
    </div>
  );
}

export default materials;
