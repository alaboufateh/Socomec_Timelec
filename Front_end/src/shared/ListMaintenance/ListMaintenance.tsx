import {
  faCalendarDays,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ListMaintenance() {
  const taskCompleted = [
    { task: "task one ", date: "11/12/2023" },
    { task: "task two", date: "05/02/2024" },
    { task: "task three", date: "01/03/2024" },
    { task: "task one ", date: "11/12/2023" },
    { task: "task one ", date: "11/12/2023" },
    { task: "task two", date: "05/02/2024" },
    { task: "task three", date: "01/03/2024" },
    { task: "task one ", date: "11/12/2023" },
    { task: "task two", date: "05/02/2024" },
  ];
  return (
    <div className="w-defaultwidth2  m-auto rounded-xl bg-gradient-to-t from-white to-lightPurple  mt-10">
      <div className="bg-blue rounded-xl text-white p-3 py-4 flex">
        <div className="basis-1/2 m-auto font-bold"> Machine</div>
        <div className="basis-1/2 flex ">
          <div className="flex ms-auto bg-jordyBlue rounded-lg p-2 px-4">
            Select reference
          </div>
        </div>
      </div>
      <div className="bg-lightPurple p-3 rounded-b-xl lg:flex  hidden ">
        les taches effectuées sur cette machine :
      </div>
      <div className="bg-white p-3 rounded-b-xl  overflow-y-auto max-h-[350px] ">
        {taskCompleted.map((item, index) => (
          <div key={index}>
            <hr
              className={`border-[1px] border-lightPurple w-full  my-1 border-dashed ${
                index === 0 ? "hidden" : "block"
              }`}
            />
            <div className="lg:flex">
              <span className="text-gray-500 my-auto 2xl:basis-1/6 basis-2/6">
                {item?.date}
              </span>
              <div className="2xl:basis-5/6 basis-4/6 flex">
                <FontAwesomeIcon
                  style={{ boxSizing: "initial" }}
                  icon={faCaretRight}
                  className="md:h-4 h-2 xl:basis-[10%] lg:basis-[20%]  my-auto text-blue lg:px-2 pe-1"
                />
                <div className="xl:basis-[90%] basis-[80%] lg:m-auto">
                  {item?.task}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListMaintenance;
