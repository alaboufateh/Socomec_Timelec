import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

import React from "react";

function Calendar() {
  const date = new Date().toLocaleDateString();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const month = currentDate.toLocaleString("en-US", { month: "long" });
  const day = currentDate
    .toLocaleString("en-US", { day: "numeric" })
    .padStart(2, "0");
  const taskCompleted = [
    { task: "task one ", time: "10:00 pm" },
    { task: "task two", time: "10:30 pm" },
    { task: "task three", time: "11:00 pm" },
    { task: "task one ", time: "10:00 pm" },
    { task: "task two", time: "10:30 pm" },
    { task: "task three", time: "11:00 pm" },
    { task: "task one ", time: "10:00 pm" },
    { task: "task two", time: "10:30 pm" },
    { task: "task three", time: "11:00 pm" },
    { task: "task one ", time: "10:00 pm" },
    { task: "task two", time: "10:30 pm" },
    { task: "task three", time: "11:00 pm" },
    { task: "task one ", time: "10:00 pm" },
    { task: "task two", time: "10:30 pm" },
    { task: "task three", time: "11:00 pm" },
  ];
  return (
    <div className="w-defaultwidth m-auto rounded-xl bg-gradient-to-t from-white to-lightPurple  mt-10">
      <div className="bg-blue rounded-xl text-white p-3 py-4 flex">
        <div className="basis-1/2 m-auto"> My Calendar</div>
        <a href="/" className="basis-1/2 flex ">
          <div className="flex ms-auto bg-jordyBlue rounded-lg p-2 px-4">
            <div className="pe-2 "> {month}</div>
            <FontAwesomeIcon icon={faCalendarDays} className="md:h-6 h-4" />
          </div>
        </a>
      </div>
      <div className="bg-lightPurple p-3 rounded-b-xl flex ">
        {daysOfWeek.map((item, index) => (
          <div
            className={`m-auto text-center ${
              item === dayOfWeek
                ? "bg-jordyBlue text-white p-2  rounded-lg"
                : "text-lg"
            }`}
            key={index}
          >
            <div> {item}</div>
            {item === dayOfWeek ? <div>{day}</div> : ""}
          </div>
        ))}
      </div>
      <div className="bg-white p-3 rounded-b-xl  overflow-y-auto max-h-[350px]">
        {taskCompleted.map((item, index) => (
          <div key={index}>
            <hr
              className={`border-[1px] border-lightPurple w-full  my-1 border-dashed ${
                index === 0 ? "hidden" : "block"
              }`}
            />
            <div>
              <span className="text-gray-500">{item?.time}</span>
              <span className="px-1 text-4xl font-bold text-blue">.</span>
              {item?.task}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
