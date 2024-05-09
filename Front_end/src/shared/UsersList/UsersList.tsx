"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

function UsersList(props: {
  users: { email: string; number: string; fullname: string; img: string }[];
}) {
  return (
    <div className="w-defaultwidth2  m-auto rounded-xl bg-gradient-to-t from-white to-lightPurple  mt-10">
      <div className="bg-blue rounded-xl text-white p-3 py-4 flex">
        <div className="basis-1/2 m-auto">List of users</div>
        <div className="basis-1/2 flex ">
          <button
            className="bg-jordyBlue  font-bold  p-2 px-4 rounded-lg ms-auto"
            onClick={() => {}}
          >
            <FontAwesomeIcon
              style={{ boxSizing: "initial" }}
              className="pe-2"
              icon={faUserPlus}
            />
            Add user
          </button>
        </div>
      </div>

      <div className=" rounded-xl overflow-x-auto overflow-y-auto max-h-[340px] ">
        <table className="w-full text-left   text-gray-500 dark:text-gray-400">
          <thead>
            <tr className="">
              <th scope="col" className="px-6 py-6">
                Photo
              </th>
              <th scope="col" className="px-6 py-6">
                Fullname
              </th>
              <th scope="col" className="px-6 py-6">
                Email
              </th>
              <th scope="col" className=" py-6">
                Number phone
              </th>
            </tr>
          </thead>
          <tbody>
            {props.users.map((item, index) => (
              <tr
                key={index}
                className="bg-white  border-b-[1px] border-lightPurple  my-1 border-dashed dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-12 rounded-full"
                    src={`/assets/${item.img}`}
                  />
                </th>
                <td className="px-6 py-2">{item.fullname}</td>
                <td className="px-6 py-2">{item.email}</td>
                <td className="px-6 py-2">+216{item.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersList;
