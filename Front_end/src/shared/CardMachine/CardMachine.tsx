import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function CardMachine() {
  const cards = [
    { name: "Diris'A20-A40'" },
    { name: "AtysM" },
    { name: "PSM102" },
    { name: "PSM102" },
    { name: "Bel" },
    { name: "Bel" },
  ];
  return (
    <div className=" m-auto flex  flex-wrap w-full justify-center">
      {cards.map((item, index) => (
        <div
          key={index}
          className="rounded-xl  lg:w-full  w-defaultwidth2  p-4 border-jordyBlue bg-white xl:basis-1/4 lg:basis-1/3  xl:my-5 my-2 2xl:mx-5b lg:mx-3 mx-1"
        >
          <div className="flex pb-5">
            <p className="font-bold text-blue">{item?.name}</p>
            <button className="ms-auto bg-lightPurple p-1 px-2 rounded-lg  text-blue flex h-fit">
              Consulter
            </button>
          </div>

          <div className="flex w-full">
            <img className="m-auto " src={`./assets/machine${index + 1}.png`} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardMachine;
