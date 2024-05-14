"use client";

import Link from "next/link";

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
    <div className=" m-auto flex  flex-wrap w-full justify-center overflow-y-auto max-h-[600px] my-5">
      {cards.map((item, index) => (
        <div
          key={index}
          className="rounded-xl  lg:w-full  w-defaultwidth2  p-4 border-jordyBlue bg-white xl:basis-1/4 lg:basis-1/3  xl:my-5 my-2 2xl:mx-5b lg:mx-3 mx-1"
        >
          <div className="flex pb-5">
            <p className="font-bold text-blue">{item?.name}</p>
            <Link
              href={"/maintenance"}
              className="ms-auto bg-lightPurple text-blue  hover:text-white hover:bg-blue p-1 px-2 rounded-lg   flex h-fit"
            >
              Consulter
            </Link>
          </div>

          <div className="flex w-full">
            <img
              alt=""
              className="m-auto "
              src={`./assets/machine${index + 1}.png`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardMachine;
