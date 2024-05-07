function CardMachine() {
  const cards = [
    { name: "Diris'A20-A40'" },
    { name: "AtysM" },
    { name: "PSM102" },
    { name: "PSM102" },
    { name: "Bel" },
  ];
  return (
    <div className="w-defaultwidth m-auto flex justify-evenly">
      {cards.map((item, index) => (
        <div key={index} className="rounded-xl w-full bg-white basis-1/3  ">
          <p className="text-center py-4">{item?.name}</p>
          <div className="flex">
            <img
              className="m-auto w-full h-full  "
              src={`./assets/machine${index + 1}.png`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardMachine;
