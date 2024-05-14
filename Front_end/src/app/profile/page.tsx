"use client";
import CardBlue from "@/shared/CardBlue/CardBlue";
import CardProfile from "@/shared/CardProfile/CardProfile";
import Navbar from "@/shared/Navbar/Navbar";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function page() {
  const profile = {
    img: "/assets/fackUser.jpg",
    name: "string string string ",
    job: "string string ",
    address: "string string string string",
    birth: "string",
  };
  return (
    <div className="w-defaultwidth mx-auto md:flex  ">
      <div className="basis-3/5">
        <Navbar />
        <CardBlue />
        card edit profile
      </div>
      <div className="basis-2/5 ">
        <CardProfile data={profile} />
      </div>
    </div>
  );
}

export default page;
