import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

import React from "react";

function Calendar() {
  return (
    <div className="w-defaultwidth m-auto rounded-xl bg-gradient-to-t from-white to-lightPurple  mt-10">
      <div className="bg-blue rounded-xl text-white p-3 py-4 flex">
        <div className="basis-1/2"> My Calendar</div>
        <a href="/profile" className="basis-1/2 flex">
          <FontAwesomeIcon
            icon={faCalendarDays}
            className="md:h-6 h-4 ms-auto "
          />
        </a>
      </div>
      <div className="bg-lightPurple p-3 rounded-b-xl">kkk</div>
      <div className="bg-white p-3 rounded-b-xl">kkk</div>
    </div>
  );
}

export default Calendar;
