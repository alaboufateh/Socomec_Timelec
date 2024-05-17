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
        <div className="bg-white rounded-xl p-4 w-defaultwidth2 mx-auto Maintenance">
          <div className="flex">
            <div className="basis-1/2  ">
              <div className="text-blue py-1"> Bel :</div>
              <img alt="" className="w-52 m-auto" src="/assets/machine1.png" />
            </div>

            <div className="basis-1/2">
              <div className="text-blue py-1"> Télécharger une photo :</div>
              <input
                className=" w-defaultwidth2 border-2  border-lightPurple p-2 my-1 rounded-lg"
                type="file"
                placeholder="Enter Default Code"
              />
            </div>
          </div>

          <div className="flex">
            <div className="basis-1/2 ">
              <div className="text-blue">Fullname :</div>
              <input
                className=" w-defaultwidth2 border-2 border-lightPurple p-2 my-1 rounded-lg"
                type="text"
                placeholder="Enter Fullname"
              />
            </div>
            <div className="basis-1/2">
              <div className="text-blue"> :</div>
              <input
                className=" w-defaultwidth2 border-2 border-lightPurple p-2 my-1 rounded-lg"
                type="date"
                placeholder="Enter "
              />
            </div>
          </div>
          <div className="flex py-5">
            <div className="basis-1/2">
              <div className="text-blue"> Default Chapter :</div>
              <input
                className=" w-defaultwidth2 border-2 border-lightPurple p-2 my-1 rounded-lg"
                type="text"
                placeholder="Enter Default Chapter"
              />
            </div>
            <div className="basis-1/2">
              <div className="text-blue">Intervention :</div>
              <input
                className=" w-defaultwidth2 border-2 border-lightPurple p-2 my-1 rounded-lg"
                type="text"
                placeholder="Enter Intervention"
              />
            </div>
          </div>
          <div className=" flex">
            <button
              className="bg-lightPurple text-blue font-bold hover:text-white hover:bg-blue p-2 px-4 rounded-lg ms-auto"
              onClick={() => {}}
            >
              Mettre à jour votre profil
            </button>
          </div>
        </div>
      </div>
      <div className="basis-2/5 ">
        <CardProfile data={profile} />
      </div>
    </div>
  );
}

export default page;
