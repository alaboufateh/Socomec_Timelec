"use client";
import React from "react";

function Tasks(props: {
  Tasks: {
    machine: string;
    reference: string;
    fullname: string;
    task: string;
  }[];
}) {
  return (
    <div className="w-defaultwidth2 my-5 m-auto rounded-xl bg-gradient-to-t from-white to-lightPurple  mt-10">
      <div className="bg-blue rounded-xl text-white p-3 py-4 flex">
        <div className="basis-1/2 m-auto">Today's Tasks</div>
        <div className="basis-1/2 flex ">
          <button
            className="bg-jordyBlue  font-bold  p-2 px-4 rounded-lg ms-auto"
            onClick={() => {}}
          >
            Select user
          </button>
        </div>
      </div>

      <div className="rounded-xl overflow-x-auto overflow-y-auto max-h-[450px]">
        <table className="w-full text-left  text-gray-500 dark:text-gray-400">
          <thead>
            <tr className="bg-lightPurple">
              <th scope="col" className="px-5 py-6">
                Fullname
              </th>
              <th scope="col" className="px-5 py-6">
                Machine
              </th>
              <th scope="col" className="px-5 py-6">
                Reference
              </th>
              <th scope="col" className="px-5 py-6">
                Task
              </th>
            </tr>
          </thead>
          <tbody>
            {props.Tasks.map((item, index) => (
              <tr
                key={index}
                className="bg-white  border-b-[1px] border-lightPurple  my-1 border-dashed dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-5 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.fullname}
                </th>
                <td className="px-5 py-2">{item.machine}</td>
                <td className="px-5 py-2">{item.reference}</td>
                <td className="px-5 py-2">{item.task}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tasks;
