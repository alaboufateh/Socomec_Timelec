"use client";
import "./SideBar.scss";
import Swal from "sweetalert2";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import {
  faHouse,
  faUser,
  faList,
  faToolbox,
  faRightToBracket,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

function SlideBar() {
  const icons = [
    { title: faHouse, path: "/" },
    { title: faUser, path: "/profile" },
    { title: faList, path: "/users" },
    { title: faToolbox, path: "/materials" },
    { title: faScrewdriverWrench, path: "/maintenance" },
  ];
  const initialArray = Array(icons.length).fill(false);
  initialArray[0] = true;
  const [hover, setHover] = useState(initialArray);
  return (
    <div className="w-defaultwidth m-auto py-1 sticky  top-0 sideBar">
      <div className="bg-blue  h-[90vh]  m-auto rounded-xl  py-10 grid ">
        <div className="  ">
          <img src="./assets/logoWhite.png" className="w-[80%] m-auto" />
        </div>
        <div>
          {icons.map((item, index) => (
            <Link href={item.path} key={index} className="flex">
              <div
                className="m-auto"
                onClick={() => {
                  setHover((e) => {
                    const state = Array(icons.length).fill(false);
                    state[index] = !e[index];
                    return state;
                  });
                }}
              >
                <FontAwesomeIcon
                  className={`md:h-6 h-8  p-2 rounded-lg my-4  text-white ${
                    hover[index] && "bg-jordyBlue"
                  } `}
                  style={{ boxSizing: "initial" }}
                  icon={item.title}
                />
              </div>
            </Link>
          ))}
        </div>
        <div className="mb-auto flex">
          <div
            onClick={() => {
              Swal.fire({
                title: "Are you sure?",
                text: "If you click yes, you will log out.",

                showCancelButton: true,
                confirmButtonColor: "#718BDC",
                animation: true,
                cancelButtonColor: "#4264D0",
                confirmButtonText: "Yes",
              }).then((result) => {
                if (result.isConfirmed) {
                }
              });
            }}
            className="mx-auto"
          >
            <FontAwesomeIcon
              icon={faRightToBracket}
              className="h-8 m-auto text-white "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideBar;
