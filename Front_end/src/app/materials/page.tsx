import CardBlue from "@/shared/CardBlue/CardBlue";
import Carousel from "@/shared/Carousel/Carousel";
import Navbar from "@/shared/Navbar/Navbar";
import React from "react";

function materials() {
  return (
    <div className="w-defaultwidth mx-auto md:flex  ">
      <div className="basis-3/5">
        <Navbar />
        <CardBlue />
        <Carousel />
      </div>
      <div className="basis-2/5 "> caracteristique product</div>
    </div>
  );
}

export default materials;
