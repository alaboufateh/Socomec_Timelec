import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";

function SlideBar() {
  const icons = [
    { title: faHouse, path: "" },
    { title: faUser, path: "" },
    { title: faList, path: "" },
    { title: faToolbox, path: "" },
    { title: faGear, path: "" },
  ];
  return (
    <div className="w-defaultwidth m-auto py-1 sticky  top-0">
      <div className="bg-blue  h-[90vh]  m-auto rounded-xl  py-10 grid ">
        <div className="m-auto">LOGO</div>
        <div>
          {icons.map((item, index) => (
            <a href={item.path} key={index}>
              <FontAwesomeIcon
                icon={item.title}
                className="h-8 m-auto text-white my-8"
              />
            </a>
          ))}
        </div>
        <a href="" className="mb-auto">
          <FontAwesomeIcon
            icon={faRightToBracket}
            className="h-8 m-auto text-white "
          />
        </a>
      </div>
    </div>
  );
}

export default SlideBar;
