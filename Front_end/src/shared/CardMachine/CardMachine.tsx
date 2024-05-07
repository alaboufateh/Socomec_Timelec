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
    <div className="w-defaultwidth2 m-auto flex justify-evenly flex-wrap  ">
      {cards.map((item, index) => (
        <div
          key={index}
          className="rounded-xl  lg:p-4 border-jordyBlue  bg-white basis-1/4 m-5 "
        >
          <div className="flex pb-5">
            <p className="font-bold text-blue">{item?.name}</p>
            <button className="ms-auto bg-lightPurple p-1 px-2 rounded-lg text-blue flex">
              Consulter
            </button>
          </div>

          <div className="flex">
            <img className="m-auto " src={`./assets/machine${index + 1}.png`} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardMachine;
