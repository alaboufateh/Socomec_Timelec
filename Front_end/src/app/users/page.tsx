import CardBlue from "@/shared/CardBlue/CardBlue";
import CardProfile from "@/shared/CardProfile/CardProfile";
import Maintenance from "@/shared/Maintenance/Maintenance";
import Navbar from "@/shared/Navbar/Navbar";
import UsersList from "@/shared/UsersList/UsersList";
import React from "react";

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
      </div>
      <div className="basis-2/5 ">
        <CardProfile data={profile} />
        <UsersList />
      </div>
    </div>
  );
}

export default page;
