import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <div className="flex w-defaultwidth2 m-auto pb-4">
      <div className="basis-2/3">
        <div className="flex  bg-white rounded-xl  ">
          <input
            type="text"
            className="w-full px-1 py-3 rounded-xl ps-5"
            placeholder="Search with reference..."
          />
          <button type="submit" className="rounded-xl px-2 flex">
            <FontAwesomeIcon
              style={{ boxSizing: "initial" }}
              icon={faMagnifyingGlass}
              className="md:h-8 h-6 p-1 m-auto text-blue"
            />
          </button>
        </div>
      </div>
      <div className="basis-1/3  flex">
        <div className="ms-auto flex ">
          <div className="bg-white p-2 rounded-xl mx-1 flex">
            <FontAwesomeIcon
              style={{ boxSizing: "initial" }}
              icon={faBell}
              className="md:h-8 h-6 p-1 text-blue m-auto"
            />
          </div>

          <div className="bg-white p-2 rounded-xl mx-1 flex">
            <FontAwesomeIcon
              style={{ boxSizing: "initial" }}
              icon={faGear}
              className="md:h-8 h-6 p-1 text-blue m-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
