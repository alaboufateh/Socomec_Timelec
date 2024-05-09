import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

function UsersList() {
  const taskCompleted = [{}, {}];
  return (
    <div className="w-defaultwidth2  m-auto rounded-xl bg-gradient-to-t from-white to-lightPurple  mt-10">
      <div className="bg-blue rounded-xl text-white p-3 py-4 flex">
        <div className="basis-1/2 m-auto"> My Calendar</div>
        <a href="/" className="basis-1/2 flex ">
          <div className="flex ms-auto bg-jordyBlue rounded-lg p-2 px-4">
            <div className="pe-2 hidden lg:block "> hhhh</div>
            <div className="text-sm pe-2 lg:hidden block "></div>
            <FontAwesomeIcon
              style={{ boxSizing: "initial" }}
              icon={faCalendarDays}
              className="md:h-6 h-4 my-auto"
            />
          </div>
        </a>
      </div>
      <div className="bg-lightPurple p-3 rounded-b-xl lg:flex  hidden "></div>
      <div className="bg-white p-3 rounded-b-xl  overflow-y-auto max-h-[300px] ">
        {taskCompleted.map((item, index) => (
          <div key={index}>
            <hr
              className={`border-[1px] border-lightPurple w-full  my-1 border-dashed ${
                index === 0 ? "hidden" : "block"
              }`}
            />
            <div className="lg:flex">
              <span className="text-gray-500 my-auto 2xl:basis-1/6 basis-2/6">
                hhh
              </span>
              <div className="2xl:basis-5/6 basis-4/6 flex">
                <FontAwesomeIcon
                  style={{ boxSizing: "initial" }}
                  icon={faCaretRight}
                  className="md:h-4 h-2 xl:basis-[10%] lg:basis-[20%]  my-auto text-blue lg:px-2 pe-1"
                />
                <div className="xl:basis-[90%] basis-[80%] lg:m-auto">
                  hhhhh
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersList;
