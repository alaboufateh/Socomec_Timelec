"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Maintenance() {
  return (
    <div className="bg-white rounded-xl p-2 w-defaultwidth2 mx-auto">
      <div className=" flex">
        <div className=""><div className="">n serier <input /></div><div className="">code default</div></div>
        <div className=""><div className="">chapitre default</div><div className="">intervention</div> upload phot</div>
        <button
          className="bg-lightPurple text-blue font-bold hover:text-white hover:bg-blue p-2 px-4 rounded-lg ms-auto"
          onClick={() => { }}
        >
          <FontAwesomeIcon className="pe-2" icon={faPlus} />
          Ajouter une tâche
        </button>
      </div>
    </div>
  );
}

export default Maintenance;
