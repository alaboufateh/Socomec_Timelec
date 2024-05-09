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
  const users = [
    {
      email: "email.test@gmail.com",
      number: "00000000",
      fullname: "fullname fullname",
      img: "fackUser1.jpg",
    },
    {
      email: "email.test@gmail.com",
      number: "00000000",
      fullname: "fullname fullname",
      img: "fackUser2.jpg",
    },
    {
      email: "email.test@gmail.com",
      number: "00000000",
      fullname: "fullname fullname",
      img: "fackUser3.jpg",
    },
    {
      email: "email.test@gmail.com",
      number: "00000000",
      fullname: "fullname fullname",
      img: "fackUser4.jpg",
    },
    {
      email: "email.test@gmail.com",
      number: "00000000",
      fullname: "fullname fullname",
      img: "fackUser5.jpg",
    },
    {
      email: "email.test@gmail.com",
      number: "00000000",
      fullname: "fullname fullname",
      img: "fackUser6.jpg",
    },
  ];
  return (
    <div className="w-defaultwidth mx-auto lg:flex  ">
      <div className="basis-3/5 ">
        <Navbar />
        <CardBlue />
      </div>
      <div className="basis-2/5 ">
        <CardProfile data={profile} />
        <UsersList users={users} />
      </div>
    </div>
  );
}

export default page;
