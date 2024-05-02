import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

import React from "react";

function Calendar() {
  const date = new Date().toLocaleDateString();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  return (
    <div className="w-defaultwidth m-auto rounded-xl bg-gradient-to-t from-white to-lightPurple  mt-10">
      <div className="bg-blue rounded-xl text-white p-3 py-4 flex">
        <div className="basis-1/2 m-auto"> My Calendar</div>
        <a href="/profile" className="basis-1/2 flex ">
          <div className="flex ms-auto bg-jordyBlue rounded-lg p-2 px-4">
            <div className="pe-2 "> {date}</div>
            <FontAwesomeIcon icon={faCalendarDays} className="md:h-6 h-4 " />
          </div>
        </a>
      </div>
      <div className="bg-lightPurple p-3 rounded-b-xl flex ">
        {daysOfWeek.map((item, index) => (
          <div
            className={`m-auto text-center ${
              item === dayOfWeek
                ? "bg-jordyBlue text-white p-2 py-4 rounded-lg"
                : ""
            }`}
            key={index}
          >
            <div> {item}</div>
          </div>
        ))}
      </div>
      <div className="bg-white p-3 rounded-b-xl">kkk</div>
    </div>
  );
}

export default Calendar;
