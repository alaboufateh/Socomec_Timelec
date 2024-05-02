import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
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
      <div className="bg-blue rounded-xl text-white p-3 py-4">My profile</div>
      <div className="flex w-full place-items-center py-4">
        <div className="basis-2/6 flex ">
          <div className="m-auto">
            {props.data.img !== undefined && props.data.img !== "" ? (
              <img
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
        <div className="basis-4/6 flex">
          <div className="me-auto">
            <div className="font-bold text-2xl">{props.data?.name}</div>
            <div className="text-gray-500">{props.data?.job}</div>
            <div className="flex">
              <FontAwesomeIcon icon={faLocationDot} className="w-4 text-blue" />
              <div className="ps-2">{props.data?.address}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-3">
        <div className="basis-1/3 flex">
          <div className="m-auto">
            <div className="text-gray-500">gg</div>
            <div>{props.data?.birth}</div>
          </div>
        </div>
        <hr className="border-[1px] border-lightPurple h-10" />
        <div className="basis-1/3 flex">
          <div className="m-auto">
            <div className="text-gray-500">rrr</div>
            <div>{props.data?.birth}</div>
          </div>
        </div>
        <hr className="border-[1px] border-lightPurple h-10" />
        <div className="basis-1/3 flex ">
          <div className="m-auto">
            <div className="text-gray-500">eee</div>
            <div>{props.data?.birth}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProfile;
