"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Maintenance() {
  return (
    <div className="bg-white rounded-xl p-4 w-defaultwidth2 mx-auto">
      <div className="flex">
        <div className="basis-1/2 ">
          <img src="" />
        </div>
        <div className="basis-1/2">
          <input
            className=" w-defaultwidth2 border-2 border-lightPurple p-2 my-1 rounded-lg"
            type="file"
            placeholder="Enter Default Code"
          />
        </div>
      </div>

      <div className="flex">
        <div className="basis-1/2 ">
          <div className="text-blue">N Series :</div>
          <input
            className=" w-defaultwidth2 border-2 border-lightPurple p-2 my-1 rounded-lg"
            type="text"
            placeholder="Enter N Series"
          />
        </div>
        <div className="basis-1/2">
          <div className="text-blue"> Default Code :</div>
          <input
            className=" w-defaultwidth2 border-2 border-lightPurple p-2 my-1 rounded-lg"
            type="text"
            placeholder="Enter Default Code"
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
          <div className="text-blue"> Intervention :</div>
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
          <FontAwesomeIcon className="pe-2" icon={faPlus} />
          Ajouter une tâche
        </button>
      </div>
    </div>
  );
}

export default Maintenance;
