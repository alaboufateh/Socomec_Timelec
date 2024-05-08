"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faList,
  faToolbox,
  faGear,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import Link from "next/link";

function SlideBar() {
  const icons = [
    { title: faHouse, path: "/" },
    { title: faUser, path: "/profile" },
    { title: faList, path: "/users" },
    { title: faToolbox, path: "/materials" },
    { title: faGear, path: "/" },
  ];
  const initialArray = Array(icons.length).fill(false);
  initialArray[0] = true;
  const [hover, setHover] = useState(initialArray);
  return (
    <div className="w-defaultwidth m-auto py-1 sticky  top-0">
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
          <div className="mx-auto">
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
