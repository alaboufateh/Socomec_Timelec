"use client";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Materials() {
  return (
    <div className="bg-white rounded-xl p-2 w-defaultwidth2 mx-auto">
      <div className=" flex">
        <button
          className="bg-lightPurple text-blue font-bold hover:text-white hover:bg-blue p-2 px-4 rounded-lg ms-auto"
          onClick={() => {}}
        >
          <FontAwesomeIcon className="pe-2" icon={faPlus} />
          Ajouter une machine
        </button>
      </div>
    </div>
  );
}

export default Materials;
