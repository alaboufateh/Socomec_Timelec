"use client";
import CardBlue from "@/shared/CardBlue/CardBlue";
import CardProfile from "@/shared/CardProfile/CardProfile";
import Navbar from "@/shared/Navbar/Navbar";
import { useState } from "react";

function page() {
  const [profileImg, setProfileImg] = useState("/assets/fackUser.jpg");

  const profile = {
    img: profileImg,
    name: "full name",
    job: "job",
    address: "address",
    birth: "",
  };
  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-defaultwidth mx-auto md:flex  ">
      <div className="basis-3/5">
        <Navbar />
        <CardBlue />
        <div className="bg-white rounded-xl p-4 w-defaultwidth2 mx-auto Maintenance">
          <div className="lg:flex ">
            <div className="basis-1/2 p-1">
              <img
                alt={profile.name}
                title={profile.name}
                className="xl:w-52 w-48 m-auto rounded-full"
                src={profile.img}
              />
            </div>
            <div className="basis-1/2">
              <div className="text-blue py-1">
                Changer votre photo de profil :
              </div>
              <input
                className="w-defaultwidth2 border-2 border-lightPurple p-2 my-1 rounded-lg"
                type="file"
                placeholder="Choisissez un fichier"
                onChange={handleImageChange}
              />
            </div>
          </div>

          <div className="lg:flex">
            <div className="basis-1/2">
              <div className="text-blue">Nom complet :</div>
              <input
                className="w-defaultwidth2 border-2 border-lightPurple p-2 my-1 rounded-lg"
                type="text"
                placeholder="Entrez votre nom complet"
              />
            </div>
            <div className="basis-1/2">
              <div className="text-blue">Date de naissance :</div>
              <input
                className="w-defaultwidth2 border-2 border-lightPurple p-2 my-1 rounded-lg"
                type="date"
                placeholder="Sélectionnez votre date de naissance"
              />
            </div>
          </div>

          <div className="lg:flex py-5">
            <div className="basis-1/2">
              <div className="text-blue">Poste :</div>
              <input
                className="w-defaultwidth2 border-2 border-lightPurple p-2 my-1 rounded-lg"
                type="text"
                placeholder="Entrez votre poste"
              />
            </div>
            <div className="basis-1/2">
              <div className="text-blue">Adresse :</div>
              <input
                className="w-defaultwidth2 border-2 border-lightPurple p-2 my-1 rounded-lg"
                type="text"
                placeholder="Entrez votre adresse"
              />
            </div>
          </div>

          <div className="lg:flex">
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
