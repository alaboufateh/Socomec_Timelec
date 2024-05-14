import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

export default function CardBlue() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const month = currentDate.toLocaleString("en-US", { month: "long" });
  const year = currentDate.toLocaleString("en-US", { year: "numeric" });
  const day = currentDate
    .toLocaleString("en-US", { day: "numeric" })
    .padStart(2, "0");

  return (
    <div className="bg-blue w-defaultwidth2 m-auto rounded-xl flex my-5 ">
      <div className="basis-2/3 m-4">
        <div className="flex w-fit bg-jordyBlue rounded-lg p-2 px-4 text-white">
          <FontAwesomeIcon
            style={{ boxSizing: "initial" }}
            icon={faSun}
            className="md:h-6 h-4 my-auto pe-2 "
          />
          {month} {day}, {year}
        </div>
        {/* <div className="text-white h-full flex text-3xl font-bold">
          <p className="my-auto">Have a Nice {dayOfWeek} !</p>
        </div> */}
      </div>
      <div className="flex basis-1/3 ">
        <div className="bg-white rounded-xl ms-auto m-4">
          <img alt="" className="w-full p-4" src="./assets/logoTimelec.png" />
        </div>
      </div>
    </div>
  );
}
