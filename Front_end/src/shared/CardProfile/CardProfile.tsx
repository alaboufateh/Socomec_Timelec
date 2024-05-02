import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CardProfile(props: {
  data: {
    img?: string;
    name?: string;
    job?: string;
    address?: string;
    birth?: string;
  };
}) {
  return (
    <div className="w-defaultwidth m-auto bg-white rounded-xl">
      <div className="bg-blue rounded-xl text-white p-3 py-4 flex">
        <div className="basis-1/2"> My profile</div>
        <a href="/profile" className="basis-1/2 flex">
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="md:h-6 h-4 ms-auto "
          />
        </a>
      </div>
      <div className="xl:flex w-full  py-4">
        <div className="xl:basis-2/6 flex ">
          <div className="m-auto">
            {props.data.img !== undefined && props.data.img !== "" ? (
              <img
                title={props.data?.name}
                src={props.data?.img}
                className="rounded-full w-24"
                alt={props.data?.name}
              />
            ) : (
              <div className="w-24  bg-lightBlue rounded-full ">
                <FontAwesomeIcon
                  className="w-20 p-4 m-auto text-blue"
                  icon={faUser}
                />
              </div>
            )}
          </div>
        </div>
        <div className="xl:basis-4/6  xl:flex xl:ps-0 ps-4 xl:text-start text-center">
          <div className="xl:me-auto ">
            <div className="font-bold text-2xl ">{props.data?.name}</div>
            <div className="text-gray-500  ">{props.data?.job}</div>
            <div className="lg:flex  hidden">
              <FontAwesomeIcon icon={faLocationDot} className="w-4 text-blue" />
              <div className="ps-2">{props.data?.address}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex xl:py-3 pb-5">
        <div className="basis-1/3 flex">
          <div className="lg:m-auto lg:ps-0 ps-4">
            <div className="text-gray-500">gg</div>
            <div>{props.data?.birth}</div>
          </div>
        </div>
        <hr className="border-[1px] border-lightPurple lg:h-10 lg:w-0 w-defaultwidth m-auto my-1" />
        <div className="basis-1/3 flex">
          <div className="lg:m-auto lg:ps-0 ps-4">
            <div className="text-gray-500">rrr</div>
            <div>{props.data?.birth}</div>
          </div>
        </div>
        <hr className="border-[1px] border-lightPurple lg:h-10 lg:w-0 w-defaultwidth m-auto my-1" />{" "}
        <div className="basis-1/3 flex ">
          <div className="lg:m-auto lg:ps-0 ps-4">
            <div className="text-gray-500">eee</div>
            <div>{props.data?.birth}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProfile;
